import React from "react";
import pics from "../MobileView/images/Group 427319102.png";
import { BiPencil } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight, MdFavoriteBorder } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import Navbar from "../navbar-and-footer/Navbar";
import BottomTab from "../navbar-and-footer/BottomTab";
import "./Profile.css";
import { useNavigate } from "react-router-dom";


const ProfileEdit = () => {
 

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1em 0.3em",
                  backgroundColor: "#fff",
                  margin: "8px 0",
                  width: "100%",
                  marginTop: "18px",
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
                  backgroundColor: "#fff",
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

          <div
            className="profile-account"
            style={{
              backgroundColor: "white",
              padding: "2em",
              width: "100%",
            }}
          >
            <h2>My Account</h2>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.2em",
                marginBottom: "2em",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
              />
              <label htmlFor="image-input">
                {imageUrl ? (
                  <img
                    src={logo}
                    alt="Editable"
                    style={{
                      width: "50%",
                      height: "auto",
                      border: "1px solid black",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "50px",
                      padding: "1em 1em",
                      backgroundImage: `url(${logo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid black",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Click to add an image
                  </div>
                )}
              </label>
            </div> */}

            <div
              style={{
                marginTop: "1em",
              }}
            >
              <label>Full Name</label>
              <div
                style={{
                  width: "100%",
                  padding: "1em 1em",
                  border: "1px solid black",
                  height: "50px",
                }}
                contentEditable="true"
              >
                <p>Ibeneme Ikenna</p>
              </div>
            </div>
            <div
              style={{
                marginTop: "1em",
              }}
            >
              <label>Email Address</label>
              <div
                style={{
                  width: "100%",
                  padding: "1em 1em",
                  border: "1px solid black",
                  height: "50px",
                }}
                contentEditable="true"
              >
                IbenemeIkenna96@gmail.com
              </div>
            </div>
            <div
              style={{
                marginTop: "1em",
              }}
            >
              <label>Delivery Address</label>
              <div
                style={{
                  width: "100%",
                  padding: "1em 1em",
                  border: "1px solid black",
                  height: "50px",
                }}
                contentEditable="true"
              >
                <p>No 12 Ada George Road</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  color: "white",
                  backgroundColor: "#fc2c9c",
                  padding: "1em ",
                  marginTop: "1em",
                  borderRadius: "8px",
                }}
              >
                Save Changes
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomTab />
    </div>
  );
};

export default ProfileEdit;
