import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../redux/actions/productsActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function AddProduct() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitProduct = (data) => {
    console.log(data, "data");
    dispatch(addProduct(data));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 style={{ textAlign: "center" }}>Add a New Product</h2>
      <Box
        component="form"
        style={{
          border: "1px dotted grey",
          margin: "20px 100px 10px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        autoComplete="on"
        onSubmit={handleSubmit(SubmitProduct)}
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
          {...register("title")}
          sx={{ width: "250px", margin: "18px 0 8px 0" }}
        />
        {/* <input {...register("title", { required: true })} /> */}
        <TextField
          required
          id="outlined-required"
          type="number"
          label="Price"
          {...register("price")}
          sx={{ width: "250px", marginBottom: "8px" }}
        />
        {/* <input {...register("price", { required: true })} /> */}
        <TextField
          required
          id="outlined-required"
          label="Description"
          {...register("description")}
          sx={{ width: "250px", marginBottom: "8px" }}
        />
        {/* <input {...register("description", { required: true })} /> */}
        <TextField
          required
          id="outlined-required"
          label="Image URL"
          {...register("image")}
          sx={{ width: "250px", marginBottom: "8px" }}
        />
        {/* <input {...register("image", { required: true })} /> */}
        <TextField
          required
          id="outlined-required"
          label="Category"
          {...register("category")}
          sx={{ width: "250px", marginBottom: "8px" }}
        />
        {/* <input {...register("category", {})} /> */}
        {errors.title && <span>This field is required</span>}

        <Button
          variant="contained"
          type="submit"
          sx={{ width: "140px", marginBottom: "8px" }}
        >
          {" "}
          Add Product{" "}
        </Button>
      </Box>
    </div>
  );
}

export default AddProduct;
