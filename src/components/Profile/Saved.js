import React from "react";
import pics from "../MobileView/images/Group 427319102.png";
import { BiPencil } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight, MdFavoriteBorder } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import BottomTab from "../navbar-and-footer/BottomTab";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
// import { BiMinus } from "react-icons/bi";
// import { MdAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Saved = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="div-profile-div">
        <div className="div-profile-div-first">
          <div className="div-profile-div-second">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={() => navigate("/profile")}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.4em",
                  width: "100%",
                }}
              >
                <img width="48px" src={pics} alt="alt" />
                <div>
                  <h3>Ibeneme Ikenna</h3>
                  <p>@ibeneme_ikenna</p>
                </div>{" "}
              </div>
              <span
                style={{
                  fontSize: "24px",
                  backgroundColor: "#d9d9d965",
                  padding: "0.2em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "1.6em",
                  height: "1.6em",
                  borderRadius: "323px",
                }}
              >
                <BiPencil
                  style={{
                    fontSize: "24px",
                  }}
                />{" "}
              </span>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  backgroundColor: "#fff",

                  width: "100%",
                }}
                onClick={() => navigate("/order")}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <RiFileList3Line
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Orders</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",

                  margin: "8px 0",
                  width: "100%",
                }}
                onClick={() => navigate("/bag")}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <BsBag
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Bag</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                className=" active-profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",

                  margin: "8px 0",
                  width: "100%",
                }}
                onClick={() => navigate("/saved")}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <MdFavoriteBorder
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Saved</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  backgroundColor: "#fff",
                  margin: "8px 0",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <FiHelpCircle
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Help & Support</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  backgroundColor: "#fff",
                  margin: "8px 0",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <GoLaw
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Refund Policy</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  backgroundColor: "#fff",
                  margin: "8px 0",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4em",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#d9d9d965",
                      padding: "0.2em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "2em",
                      height: "2em",
                      borderRadius: "323px",
                    }}
                  >
                    <TbLogout
                      style={{
                        fontSize: "24px",
                      }}
                    />{" "}
                  </span>

                  <h3>Log Out</h3>
                </div>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>

          <div className="cart-first-div">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Saved</h2>{" "}
              <p
                style={{
                  border: "1px solid gray",
                  padding: "0.8em 1.2em",
                }}
              >
                {" "}
                Clear Saved
              </p>
            </div>

            <div
              style={{
                marginTop: "2em",
                display: "flex",
                gap: "0.5em",
                width: "100%",
                borderTop:'1px solid #d9d9d975',
                paddingTop:'1.4em'
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
                  {/* <div
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
                  </div> */}

                  <div className="product-description-second-div-p">
                    <span>&#8358;</span>
                    1000
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "2em",
                display: "flex",
                gap: "0.5em",
                width: "100%",
                borderTop:'1px solid #d9d9d975',
                paddingTop:'1.4em'
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
                  {/* <div
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
                  </div> */}

                  <div className="product-description-second-div-p">
                    <span>&#8358;</span>
                    1000
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "2em",
                display: "flex",
                gap: "0.5em",
                width: "100%",
                borderTop:'1px solid #d9d9d975',
                paddingTop:'1.4em'
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
                  {/* <div
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
                  </div> */}

                  <div className="product-description-second-div-p">
                    <span>&#8358;</span>
                    1000
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <BottomTab />
    </div>
  );
};

export default Saved;
