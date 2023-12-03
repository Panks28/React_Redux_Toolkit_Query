import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { useGetAllProductsQuery } from "../services/products";

const ProductListing = () => {
  // const dispatch = useDispatch();

  // const { data } = useGetAllProductsQuery();
  // console.log(data, "data");

  // useEffect(() => {
  //   const {data} = useGetAllProductsQuery()
  //   console.log(data, "data")}, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
