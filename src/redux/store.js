// import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
// import thunk from "redux-thunk";
import { productApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
  // composeEnhancers(applyMiddleware(thunk))
});
setupListeners(store.dispatch);

export default store;
