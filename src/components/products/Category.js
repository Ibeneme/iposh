import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "../TestingData/ProductData";
import Navbar from "../navbar-and-footer/Navbar";

const Category = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar />
      {" "}
      <div
        style={{
          marginTop: "150px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          FEATURED CATEGORY
        </h2>
        <div className="product-grid">
          {Data.map((product) => (
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              key={product.id}
              className="product-item"
            >
              <img src={product.image[0]} alt={product.title} />
              <p>{product.title}</p>

              <h3>Price: ${product.price}</h3>
              <button
                style={{
                  width: "fit-content",
                  padding: "1em 2em",
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: "6px",
                  marginTop: "1em",
                  marginBottom: "2em",
                  color: "black",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
