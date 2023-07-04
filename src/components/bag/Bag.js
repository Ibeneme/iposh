import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import "../bag/bag.css";
import { useNavigate } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import Navbar from "../navbar-and-footer/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

const Bag = () => {
  const [showDeleteOption, setShowDeleteOption] = useState(false);

  const handleSwipeLeft = () => {
    setShowDeleteOption(true);
  };

  const handleSwipeRight = () => {
    setShowDeleteOption(false);
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
  });

  const navigate = useNavigate();
  return (
    <div className="div-cart-div">
      <Navbar />
      <div className="cart-div">
        <div className="cart-first-div first-div-div">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Bag</h2>{" "}
            <p
              style={{
                border: "1px solid gray",
                padding: "0.8em 1.2em",
              }}
            >
              {" "}
              Clear Bag
            </p>
          </div>

          <div
            style={{
              marginTop: "2em",
              display: "flex",
              gap: "0.5em",
              width: "100%",
              ...swipeHandlers,
            }}
          >
            <img
              width="90px"
              height="90px"
              alt="alt"
              src="https://res.cloudinary.com/dqa2jr535/image/upload/v1688304628/dev-asangbam--LCwTy91CWI-unsplash_12_o4s6rm.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Bone Straight
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "gray",
                      marginTop: "0.2em",
                    }}
                  >
                    {" "}
                    24inch || Black Color{" "}
                  </p>
                </div>
                <RiDeleteBin6Line
                  style={{
                    color: "gray",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "fit-content",
                    gap: "1em",
                    marginTop: "0.3em",
                    border: "1px solid gray",
                    padding: "0.3em 0.5em",
                  }}
                >
                  <BiMinus />
                  <p>1</p>
                  <MdAdd />
                </div>

                <div className="product-description-second-div-p">
                  <span>&#8358;</span>
                  1000
                </div>
              </div>
            </div>
            {showDeleteOption && <RiDeleteBin6Line style={{ color: "gray" }} />}
          </div>
        </div>
        <div
          className="cart-second-div"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "3em",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2em",
            }}
          >
            <p>Total Price</p>

            <div className="product-description-second-div-p">
              <span>&#8358;</span>
              1000
            </div>
          </div>
          <div>
            <button
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#FC2C9C",
                color: "white",
                border: "none",
              }}
              onClick={() => navigate("/checkout")}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <BottomTab />
    </div>
  );
};

export default Bag;
