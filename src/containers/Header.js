import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="http://localhost:3000/"
          >
            FakeShop
          </a>
        </h2>
        <div style={{fontSize:"18px", alignItems:'center'}}>
          <a style={{marginLeft:'850px'}} href="http://localhost:3000/">Home</a>
          <a style={{marginLeft:'10px'}} href="http://localhost:3000/addproduct">Add Product</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
