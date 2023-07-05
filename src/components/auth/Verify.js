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
          }}
        >
          Verify your account
        </h3>
        <p
          style={{
            zIndex:'1',
            textAlign: "center",
            fontSize: "14px",
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
                height: "50px",
                width: "100%",
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
              fontSize: "14px",
              color: "gray",
              marginTop: "0.3em",
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
            height: "50px",
            backgroundColor: "#FC2C9C",
            width: "100%",
            border: "none",
            color: "white",
            marginTop: "2.3em",
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
