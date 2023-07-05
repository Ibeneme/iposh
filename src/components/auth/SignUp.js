import React, { useState } from "react";
import {
  RiMailLine,
  RiLockPasswordLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "react-icons/ri";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      style={{
        pointerEvents: "initial",
      }}
      className="auth-div-first"
    >
      <div className="auth-div">
        <h3
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Create an Account
        </h3>
        <div
          style={{

            textAlign: "center",
            fontSize: "16px",
            color: "gray",
            marginTop: "0.3em",
            cursor: "pointer",
          }}
          className="z"
          onClick={() => navigate("/signin")}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "#FC2C9C",
            }}
          >
            Login
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          
            fontSize:'18px'
          }}
          className="z"
        >
          <label
            style={{
              marginTop: "2.3em",
            }}
          >
            Email Address
          </label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "0.3em",
            }}
          >
            <input
              type="email"
              placeholder="Enter your Email Address"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                fontSize:'16px'
              }}
            />
            <RiMailLine
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginTop: "1.3em" }}>Password</label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "0.3em",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                fontSize:'16px'
              }}
            />
            <RiLockPasswordLine
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "8px",
                fontSize: "20px",
              }}
            />
            {showPassword ? (
              <RiEyeCloseLine
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "8px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <RiEyeLine
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "8px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginTop: "1.3em" }}>Password</label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "0.3em",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                fontSize:'16px'
              }}
            />
            <RiLockPasswordLine
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "8px",
                fontSize: "20px",
              }}
            />
            {showPassword ? (
              <RiEyeCloseLine
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "8px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <RiEyeLine
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "8px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
        <button
          style={{
            height: "60px",
            backgroundColor: "#FC2C9C",
            width: "100%",
            border: "none",
            color: "white",
            marginTop: "2.3em",
            fontSize: "16px",
          }}
          onClick={() => navigate("/verify")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
