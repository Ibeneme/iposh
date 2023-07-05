import React, { useState } from "react";
import "../bag/bag.css";
import { useNavigate } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

const Saved = () => {
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClearBag = () => {
    handleModalClose();
  };
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
      <div className="cart-div">
        <div className="cart-first-div first-div-div">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Saved</h2>{" "}
            <div
              style={{
                border: "1px solid gray",
                width: '8em',
                height:'50px',
                fontSize:'18px',
                backgroundColor:'white',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}
              onClick={handleModalOpen}
            >
              Clear Saved
            </div>
            {isModalOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "99999",
                  padding:'16px'
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "2em",
                    borderRadius: "8px",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize:'24px'
                    }}
                  >
                    Confirm you want to Clear your Saved?
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize:'18px',
                      marginTop:'0.5em',
                      color:'gray',
                    }}
                  >
                    Are you sure you want to clear your Saved?
                  </p>
                  <div
                    style={{
                      marginTop: "3em",
                      display: "flex",
                      gap:'0.8em'
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                        height: "50px",
                        border: "1px solid black",
                        backgroundColor: "white",
                        color: "black",
                        fontSize:'18px'
                      }}
                      onClick={handleClearBag}
                    >
                      No, Cancel
                    </button>
                    <button  style={{
                        width: "100%",
                        height: "50px",
                        border: "none",
                        backgroundColor: "#fc2c9c",
                        color: "white",
                        fontSize:'18px'
                      }} onClick={handleModalClose}>Yes, Clear Saved</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              marginTop: "2em",
              display: "flex",
              gap: "0.5em",
              width: "100%",
              borderBottom: "1px solid #d9d9d975",
              paddingBottom: "1.4em",
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
                      fontSize: "18px",
                    }}
                  >
                    Bone Straight
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
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
             

                <div style={{
                   fontSize:'24px'
                }}
                className="product-description-second-div-p">
                  <span>&#8358;</span>
                  1000
                </div>
              </div>
            </div>
            {showDeleteOption && <RiDeleteBin6Line style={{ color: "gray" }} />}
          </div>
        
          <div
            style={{
              marginTop: "2em",
              display: "flex",
              gap: "0.5em",
              width: "100%",
              borderBottom: "1px solid #d9d9d975",
              paddingBottom: "1.4em",
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
                      fontSize: "18px",
                    }}
                  >
                    Bone Straight
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
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
             

                <div style={{
                   fontSize:'24px'
                }}
                className="product-description-second-div-p">
                  <span>&#8358;</span>
                  1000
                </div>
              </div>
            </div>
            {showDeleteOption && <RiDeleteBin6Line style={{ color: "gray" }} />}
          </div>

          <div
            style={{
              marginTop: "2em",
              display: "flex",
              gap: "0.5em",
              width: "100%",
              borderBottom: "1px solid #d9d9d975",
              paddingBottom: "1.4em",
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
                      fontSize: "18px",
                    }}
                  >
                    Bone Straight
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
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
             

                <div style={{
                   fontSize:'24px'
                }}
                className="product-description-second-div-p">
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
         
          <div>
            <button
              style={{
                width: "100%",
                height: "60px",
                backgroundColor: "#FC2C9C",
                color: "white",
                border: "none",
                fontSize:'16px'
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

export default Saved;
