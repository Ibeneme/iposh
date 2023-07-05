import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-div-first">
      <div className="auth-div">
        <h3
          style={{
            textAlign: "center",
            fontSize:'24px'
          }}
        >
          Verify your account
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "gray",
            marginTop: "0.3em",
          }}
        >
          Check mail for OTP{" "}
         
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize:'18px'
          }}
        >
          <label
            style={{
              marginTop: "2.3em",
            }}
          >
            OTP
          </label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "0.3em",
            }}
          >
            <input
              type="number"
              placeholder="Enter yourOTP"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                fontSize:'16px'
              }}
            />
            <RiLockPasswordLine
              style={{
                color: "gray",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "8px",
                fontSize: "20px",
              }}
            />
          </div>
        </div>
        <div style={{}}>
          <p
            style={{
              textAlign: "end",
              color: "gray",
              marginTop: "0.3em",
              fontSize:'16px'
            }}
            onClick={() => navigate("/verify")}
          >
            Didn't get OTP?
            <span
              style={{
                color: "#FC2C9C",
              }}
            >
              {" "}
              Resend
            </span>
          </p>
        </div>
        <button
          style={{
            height: "60px",
            backgroundColor: "#FC2C9C",
            width: "100%",
            border: "none",
            color: "white",
            marginTop: "2.3em",
            fontSize:'16px'
          }}
          onClick={() => navigate("/")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verify;
