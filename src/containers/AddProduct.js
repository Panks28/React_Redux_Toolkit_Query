import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../redux/actions/productsActions";

function AddProduct() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const SubmitProduct = (data) => {
    console.log(data, "data");
    dispatch(addProduct(data));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit(SubmitProduct)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          Title
          <input {...register("title", { required: true })} />
        </label>
        <label>
          Price
          <input {...register("price", { required: true })} />
        </label>
        <label>
          Description
          <input {...register("description", { required: true })} />
        </label>
        <label>
          Image URL
          <input {...register("image", { required: true })} />
        </label>
        <label>
          Category
          <input {...register("category", { })} />
        </label>

        {errors.title && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default AddProduct;
