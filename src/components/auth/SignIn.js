import React, { useState } from "react";
import {
  RiMailLine,
  RiLockPasswordLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "react-icons/ri";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import { signinUser } from "../../Redux/auth/SignUp";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorNetwork, setErrorNetwork] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const response = await dispatch(signinUser({ email, password }));
      console.log("Signup response:", response);
      if (response.payload.error === "User with this email does not exist") {
        setError("User with this email does not exist");
      } else if (response.payload.status === "failed") {
        setErrorPassword("Enter a Password");
      } else if (response.payload.error === "Missing email or password") {
        setError("Email is required");
        setErrorPassword("Password is required");
      } else if (response.payload === "No response from the server") {
        setErrorNetwork("Please Check your Network");
      } else if (response.payload.error === "Incorrect password") {
        setErrorPassword("Incorrect password");
      } else if (response.payload.message === "Successfull authentication") {
        navigate("/");
      } else {
        setErrorNetwork("Unknown Error Occured");
      }
      console.log(errorPassword, "er");
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-div-first">
      <div className="auth-div">
        <h3
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Login to IPosh
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "gray",
            marginTop: "0.3em",
            fontSize: "18px",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#FC2C9C",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signup")}
          >
            Create an Account
          </span>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "18px",
          }}
        >
          {errorNetwork ? (
            <p
              style={{
                backgroundColor: "#ff000021",
                color: "red",
                marginTop: "1.3em",
                marginBottom: "-1.3em",
                padding: "12px 16px",
              }}
            >
              {errorNetwork}
            </p>
          ) : null}
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
              required
              placeholder="Enter your Email Address"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                fontSize: "16px",
                color: `${error ? "red" : "black"}`,
                border: `1px solid ${error ? "red" : "black"}`,
              }}
              value={email}
              onChange={handleEmailChange}
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
          <p
            style={{
              color: "red",
              fontSize: "16px",
              marginTop: "4px",
            }}
          >
            {error}
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}
        >
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
                border: `1px solid ${errorPassword ? "red" : "black"}`,
                width: "100%",
                fontSize: "16px",
                color: `${errorPassword ? "red" : "black"}`,
              }}
              value={password}
              onChange={handlePasswordChange}
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
          <p
            style={{
              color: "red",
              fontSize: "16px",
              marginTop: "4px",
            }}
          >
            {errorPassword}
          </p>
        </div>
        <p
          style={{
            textAlign: "end",
            marginTop: "0.3em",
            fontSize: "14px",
            color: "gray",
            cursor: "pointer",
          }}
          onClick={() => navigate("/forgot")}
        >
          Forgot Password?
        </p>
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
          onClick={handleSignIn}
        >
          Submit
        </button>
      </div>
      <BottomTab />
    </div>
  );
};

export default SignIn;
