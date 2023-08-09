import React, { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import { resendOTP } from "../../Redux/auth/SignUp";
import { useDispatch } from "react-redux";

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorNetwork, setErrorNetwork] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const response = await dispatch(resendOTP(email));
      setLoading(true);
      console.log("Signup response:", response);
      if (response.payload.code === 200) {
        navigate(`/passwordreset?email=${email}`);
      } else if (
        response.payload.response.data.error ===
        "User with this email does not exist"
      ) {
        setError("User with this email does not exist");
      } else if (
        response.payload.response.data.error === "Missing email field"
      ) {
        setError("Email is required");
      } else if (response.payload === "No response from the server") {
        setErrorNetwork("Please C   heck your Network");
      } else {
      }
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setErrorNetwork("");
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
          Forgot Password
        </h3>
        <p
          style={{
            textAlign: "center",
            color: "gray",
            marginTop: "0.3em",
            fontSize: "18px",
          }}
        >
          Did you Remember your Password??{" "}
          <span
            style={{
              color: "#FC2C9C",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signin")}
          >
            Login
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

export default Forgot;
