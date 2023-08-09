import React, { useState } from "react";
import {
  RiLockPasswordLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "react-icons/ri";
import "./auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import { createPassword } from "../../Redux/auth/SignUp";
import { useDispatch } from "react-redux";

const CreatePassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [newPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorNetwork, setErrorNetwork] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");



  const handleSignIn = async () => {
    try {
      const response = await dispatch(createPassword({ email, newPassword }));
      console.log("Signup response:", response);
      if (response.payload.error === "User with this email does not exist") {
      } else if (response.payload.status === "failed") {
        setErrorPassword("Network Error");
      } else if (response.payload.error === "Missing email or password") { 
        setErrorPassword("Password is required");
      } else if (response.payload === "No response from the server") {
        setErrorNetwork("Please Check your Network");
      } else if (response.payload.error === "Incorrect password") {
        setErrorPassword("Incorrect password");
      } else if (response.payload.message === "Password successfully changed") {
        navigate("/signin");
      } else {
        setErrorNetwork("Unknown Error Occured");
      }
      console.log(errorPassword, "er");
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };



  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
    console.log(newPassword, "newPassword");
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
          Create a New Password
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
              value={newPassword}
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

export default CreatePassword;
