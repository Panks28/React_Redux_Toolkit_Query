import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../services/products";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
  });
  const { data, isLoading } = useGetOneProductQuery(productId);

  useEffect(() => {
    if (productId && productId !== "" && data) {
      setProductDetails(data);
    }
  }, [data, productId]);

  const { image, title, price, category, description } = productDetails;

  return (
    <div className="ui grid container">
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
