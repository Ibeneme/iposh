import React from "react";
import Navbar from "../navbar-and-footer/Navbar";
import Search from "../MobileView/Search";
import logo from "../MobileView/images/Frame 23359.png";
import productsData from "../TestingData/Data";
import image from "../MobileView/images/ewien-van-bergeijk-kwant-Pi2o-Q6ZQjE-unsplash 2.png";
import BottomTab from "../navbar-and-footer/BottomTab";
import { useNavigate } from "react-router-dom";
import Data from "../TestingData/ProductData";

const ProductsHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div>
        <Search />
      </div>
      <div>
        <img
          alt="im"
          src={logo}
          width="100%"
          style={{
            padding: "1em",
          }}
        />

        <div>
          <h2
            style={{
              marginTop: "4em",
              textAlign: "center",
            }}
          >
            {" "}
            SHOP BY CATEGORY
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1em",
              overflowX: "auto",
              padding: "1em",
              width: "100%",
              scrollbarWidth: "none", // Hide the scrollbar in Firefox
            }}
          >
            {productsData.map((product) => (
              <div key={product.id} style={{ position: "relative" }}>
                <img
                  className="image-wigs"
                  src={product.image}
                  alt={product.title}
                  style={{
                    marginBottom: "0.5em",
                    filter: "brightness(55%)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <h3
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    padding: "0.5em",
                    background: "white",
                    color: "black",
                    margin: "0",
                  }}
                >
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "4em",
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          FEATURED PRODUCTS
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

              {product.colors && product.colors.length > 0 && (
                <p>Colors: {product.colors.join(", ")}</p>
              )}
              {console.log(product)}
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
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="container">
          <img src={image} alt="Wholesale Store" className="image" />
          <div className="content">
            <div className="title">OUR WHOLESALE STORE</div>
            <div className="address">
              No 12 Ada George Road, Mile 4, Rumuepirikom, Port Harcourt
            </div>
            <div className="timing">
              Mon - Fri, 9:00am - 6:00pm
              <br />
              Saturday, 9:00am - 2:00pm
              <br />
              Sunday, Closed
            </div>
            <button
              style={{
                width: "fit-content",
                padding: "1em 2em",
                marginTop: "1em",
                backgroundColor: "#FC2C9C",
                borderRadius: "6px",
                color: "white",
                border: "none",
              }}
            >
              Get Directions
            </button>
          </div>
        </div>

        <BottomTab />
      </div>
    </div>
  );
};

export default ProductsHome;
