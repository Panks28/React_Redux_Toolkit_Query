import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProductDetail = (id) => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/products/" + id);
    dispatch({
      type: ActionTypes.FETCH_PRODUCT_DETAILS,
      payload: response.data,
    });
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    await fakeStoreApi.post("/products", JSON.stringify(data));
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: data });
    console.log("Product Added Successfully")
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
