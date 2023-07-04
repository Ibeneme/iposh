import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../TestingData/ProductData";
import "./ProductDescription/Description.css";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Navbar from "../navbar-and-footer/Navbar";
import BottomTab from "../navbar-and-footer/BottomTab";

const ProductDescription = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const product = Data.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const sizes = product.sizes || [];

  const handleSizeClick = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? "" : size));
  };
  return (
    <div>
      <Navbar />
      <div className="product-description-first-div">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2em",
            }}
          >
            <img
              className="product-description-first-div-img"
              key={0}
              src={selectedImage}
              alt="Selected"
              style={{
                marginRight: "10px",
                marginBottom: "10px",
                border: "none",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 100px)",
                gap: "10px",
              }}
            >
              {product.image.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`yeah ${index}`}
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(imageUrl)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-description-second-div">
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'baseline'
          }}>
            <h2  style={{
                fontSize:"01.03em"
            }}>{product.title}</h2>{" "}
            <p className="product-description-second-div-p"
            style={{
                fontSize:"1.4em"
            }}>
              Price: <span>&#8358;</span>
              {product.price}
            </p>
          </div>

          <p>{product.description}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4em",
              marginTop: "2em",
            }}
          >
            <p>Colors</p>

            <div style={{ display: "flex", gap: "0.3em" }}>
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "40px",
                    height: "40px",
                    padding: "1em",
                    backgroundColor: product.colors[index],
                    border: selectedColor === color ? "2px solid #000" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "2em" }}>
            Sizes:
            <div style={{ display: "flex" }}>
              {sizes.map((size) => (
                <div
                  key={size}
                  style={{
                    padding: "8px",
                    marginRight: "10px",
                    marginTop: "0.4em",

                    background: selectedSize === size ? "#fff" : "transparent",
                    border:
                      selectedSize === size
                        ? "#FC2C9C 1px solid"
                        : "#666666 1px solid",
                    color: selectedSize === size ? "#FC2C9C" : "#666666",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "2em",
              }}
            >
              <p>Quantity</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "12em",
                  marginTop: "0.3em",
                  border: "1px solid gray",
                  padding: "0.6em 1.2em",
                }}
              >
                <BiMinus />
                <p>1</p>
                <MdAdd />
              </div>
            </div>
            <div className="product-description-div-btn">
              <button className="product-description-div-btn-btn">
                Buy Now
              </button>
              <button className="product-description-div-btn-btn-white">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomTab />
    </div>
  );
};

export default ProductDescription;
