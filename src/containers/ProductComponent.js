import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/actions/productsActions";

const ProductComponent = () => {
  const productsList = useSelector((state) => state.allProducts.products);
  const [products, setProducts] = useState(productsList)
  const dispatch = useDispatch();
  console.log(products, "products")

  useEffect(()=> {
    setProducts(productsList)
  },[productsList])

  console.log(productsList, "productslists")

  const renderList = products.map((product) => {
    const { _id, title, image, price, category } = product;

    const deleteProd = (id) => {
      dispatch(deleteProduct(_id));
    };

    return (
      <div className="four wide column" key={_id}>
        <Link to={`/product/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
                <Link to={`/editproduct/${_id}`}>
                  <button style={{ width: "100px", margin: "15px 0 5px 70px" }}>
                    Edit Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Link>
        <button
          style={{
            width: "100px",
            margin: "15px 0px 1px 85px",
            color: "red",
            backgroundColor: "lighgrey",
            textShadow: "black 0.2px 0.2px 0.3px",
          }}
          onClick={() => deleteProd(_id)}
        >
          Delete Product
        </button>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
