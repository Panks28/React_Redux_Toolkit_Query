import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetail,
  editProductDetails,
} from "../redux/actions/productsActions";
import axios from "axios";

function EditProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { productId } = useParams();
  let product = useSelector((state) => state.product);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setCategory(product.category);
  }, [product]);

  console.log(product.title, "title");

  const editDetails = (data) => {
    const ProductDetails = {
        data:data,
        id: productId
    }
    dispatch(editProductDetails(ProductDetails));
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1>Edit Product</h1>
      <div>
        {" "}
        {product.title ? (
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
        ) : (
          "Loading...."
        )}
      </div>
    </div>
  );
}

export default EditProduct;
