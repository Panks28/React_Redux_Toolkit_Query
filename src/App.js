import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import AddProduct from "./containers/AddProduct";
import EditProduct from "./containers/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/editproduct/:productId" component={EditProduct} />
          <Route>
            <div
              style={{
                marginTop: "80px",
                color: "DarkGrey",
                textShadow: "Black 1px 1px 1px",
                textAlign: "center",
              }}
            >
              <h1> Error: 404 Not Found! </h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
