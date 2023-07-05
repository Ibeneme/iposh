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


const Delivery = () => {
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
                className=" active-profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  marginTop: "18px",
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
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  maxWidth: "100%",
                  marginTop: "2em",
                  alignItems: "center",
                  gap: "2em",
                }}
              > <p
              style={{
                minWidth: "fit-content",
                flex: "0 0 auto",
                color: "gray",
              }}
              onClick={()=>navigate('/Order')}
            >
              All Orders
            </p>
                <h3
                  style={{
                    color: "#FC2C9C",
                    minWidth: "fit-content",
                    flex: "0 0 auto",
                    paddingBottom: "1px",
                    borderBottom: "3px solid #FC2C9C",
                  }}
                  onClick={()=>navigate('/delivery')}
                >
               Delivered Orders
                </h3>
               
                <p
                  onClick={()=>navigate('/pending')}
                  style={{
                    minWidth: "fit-content",
                    flex: "0 0 auto",
                    color: "gray",
                  }}
                >
                  Pending Orders
                </p>
              </div>
              <div
                style={{
                  marginTop: "2em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                  className="bone"
                >
                  <span
                    style={{
                      fontSize: "24px",
                      backgroundColor: "#FC2C9C18",
                      padding: "0.2em",
                      color: "#FC2C9C",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "1.8em",
                      height: "1.8em",
                      borderRadius: "323px",
                    }}
                  >
                    <RiFileList3Line
                      style={{
                        fontSize: "16px",
                      }}
                    />{" "}
                  </span>
                  <div>
                    <h3 className="staight">
                      Bone Straight 28inches: 12abG4#swmp9a
                    </h3>
                    <p className="staight-p">Brown Color Bone Straight</p>
                  </div>
                </div>

                <p
                  style={{
                    color: "gray",
                  }}
                >
                  09:56am
                </p>
              </div>
         
            <div
              style={{
                marginTop: "2em",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={()=>navigate('/orderdetail')}
            >
              <div
                style={{
                  display: "flex",
                  width:'100%',
           
                
                }}
                className="bone"
              >
                <span
                  style={{
                    fontSize: "24px",
                    backgroundColor: "#FC2C9C18",
                    padding: "0.2em",
                    color: "#FC2C9C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "1.8em",
                    height: "1.8em",
                    borderRadius: "323px",
                  }}
                >
                  <RiFileList3Line
                    style={{
                      fontSize: "16px",
                    }}
                  />{" "}
                </span>
                <div>
                  <h3 className="staight">Bone Straight 28inches: 12abG4#swmp9a</h3>
                  <p className="staight-p">Brown Color Bone Straight</p>
                </div>
              </div>

              <p style={{
                color:'gray'
              }}>
                09:56am
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
 
      <BottomTab />
    </div>
  );
};

export default Delivery
