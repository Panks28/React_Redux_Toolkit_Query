import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery, useUpdateProductMutation } from "../services/products";

function EditProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { productId } = useParams();
  const { data, isError } = useGetOneProductQuery(productId);
  const [updateProduct] = useUpdateProductMutation()

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (productId && productId !== "" && data) {
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
      setImage(data.image);
      setCategory(data.category);
    }
  }, [productId, data]);

 

  const editDetails = (data) => {
    data.id = productId
    console.log(data.id, "data")
    updateProduct(data)
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1>Edit Product</h1>
      <div>
        {title ? (
          <form
            onSubmit={handleSubmit(editDetails)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>
              Title
              <input
                style={{ marginLeft: "20px" }}
                value={title}
                {...register("title", {
                  validate: (value, title) => value !== "",
                })}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </label>
            <label>
              Price
              <input
                type="number"
                style={{ marginLeft: "20px" }}
                value={price}
                {...register("price", {
                  validate: (value, title) => value !== 0,
                })}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </label>
            <label>
              Description
              <input
                style={{ marginLeft: "20px" }}
                value={description}
                {...register("description", {
                  validate: (value, title) => value !== "",
                })}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </label>
            <label>
              Image URL
              <input
                style={{ marginLeft: "20px" }}
                value={image}
                {...register("image", {
                  validate: (value, title) => value !== "",
                })}
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
            </label>
            <label>
              Category
              <input
                style={{ marginLeft: "20px" }}
                value={category}
                {...register("category", {
                  validate: (value, title) => value !== "",
                })}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              />
            </label>

            {errors.title && <span>This field is required</span>}

            <input
              style={{
                width: "100px",
                textAlign: "center",
                margin: "10px 0 0 593px",
              }}
              type="submit"
              value="Done"
            />
          </form>
        ) : isError ? (
          <h2>Error : Failed to Connect with the Server!</h2>
        ) : (
          "Loading...."
        )}
      </div>
    </div>
  );
}

export default EditProduct;
