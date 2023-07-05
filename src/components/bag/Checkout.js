import React, { useState } from "react";

const Checkout = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState("");

  const handleDeliveryMethodChange = (event) => {
    setSelectedDeliveryMethod(event.target.value);
  };
  return (
    <div>
      <div className="first-checkout">
        <div className="div-checkout">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            <h3>Delivery Method</h3>
            <p
              style={{
                color: "gray",
              }}
            >
              Choose your desired payment method
            </p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                marginBottom: "1em",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.6em",
                }}
              >
                <input
                  type="radio"
                  value="method1"
                  checked={selectedDeliveryMethod === "method1"}
                  onChange={handleDeliveryMethodChange}
                />
                <div style={{}}>
                  <h4>Pick Up Station</h4>
                  <p
                    style={{
                      color: "gray",
                      marginTop: "0.2em",
                    }}
                  >
                    {" "}
                    Complete your pickup at your best time
                  </p>
                </div>
              </label>
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "3em",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.6em",
                }}
              >
                <input
                  type="radio"
                  value="method2"
                  checked={selectedDeliveryMethod === "method2"}
                  onChange={handleDeliveryMethodChange}
                />
                <div style={{}}>
                  <h4>Door Delivery</h4>
                  <p
                    style={{
                      color: "gray",
                      marginTop: "0.2em",
                    }}
                  >
                    Get your order in 2-5 business days
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5em",
              }}
            >
              Delivery Address
            </h3>
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="Enter your house Address"
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="Enter your street number"
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="Enter your city of residence"
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="--Select your LGA"
            />
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="--Select your Land Mark"
            />{" "}
            <input
              style={{
                width: "100%",
                height: "60px",
                padding: "1em",
              }}
              placeholder="--Select your State"
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <button
                style={{
                  width: "fit-content",
                  height: "60px",
                  padding: "0 2em",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize:'16px'
                }}
              >
                Save Address
              </button>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "4em",
                marginBottom: "1em",
              }}
            >
              <h3>Payment Details</h3>
              <p
                style={{
                  color: "gray",
                }}
              >
                Choose your desired payment method
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "1em",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.6em",
                  }}
                >
                  <input
                    type="radio"
                    value="method1"
                    checked={selectedDeliveryMethod === "method1"}
                    onChange={handleDeliveryMethodChange}
                  />
                  <div style={{}}>
                    <h4>Pay With Card</h4>
                    <p
                      style={{
                        color: "gray",
                        marginTop: "0.2em",
                      }}
                    >
                      {" "}
                      Credit Cards, Debit Cards, Visa, MasterCard, Verve
                    </p>
                  </div>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "3em",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.6em",
                  }}
                >
                  <input
                    type="radio"
                    value="method2"
                    checked={selectedDeliveryMethod === "method2"}
                    onChange={handleDeliveryMethodChange}
                  />
                  <div style={{}}>
                    <h4>Pay With Bank Transfer</h4>
                    <p
                      style={{
                        color: "gray",
                        marginTop: "0.2em",
                      }}
                    >
                      Instant funds transfer
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "4em",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "2em",
                  color: "gray",
                }}
              >
                <p>Total Price</p>

                <div className="product-description-second-div-p">
                  <span>&#8358;</span>
                  1000
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "white",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1em",
                    color: "gray",
                  }}
                >
                  <p>Delivery Price</p>

                  <div className="product-description-second-div-p">
                    <span>&#8358;</span>
                    1000
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1em",
                    color: "#000",
                    fontSize: "1.2em",
                    fontWeight: "bolder",
                  }}
                >
                  <p>Grand Total</p>

                  <div style={{
                   fontSize:'24px'
                }}
                className="product-description-second-div-p">
                    <span>&#8358;</span>
                    1000
                  </div>
                </div>
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
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Checkout;
