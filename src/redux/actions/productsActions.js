import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/getAll");
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
  console.log(data)
  return async (dispatch) => {
    await fakeStoreApi.post("/signup", data);
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: data });
    console.log("Product Added Successfully");
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

export const editProductDetails = (data) => {
  return async (dispatch, getState) => {
    await fakeStoreApi
      .patch(`/update/${data.id}`, data.data)
      .then((res) => console.log(res, "res from Thunk Middleware"));
    dispatch({
      type: ActionTypes.EDIT_PRODUCT_DETAILS,
      payload: data,
    });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    await fakeStoreApi
      .delete(`/delete/${id}`)
      .then((res) =>
        console.log(
          res,
          "response after deletion of the selected product with id"
        )
      );
  };
};
