import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import "./auth.css";
import { useNavigate, useLocation } from "react-router-dom";
import BottomTab from "../navbar-and-footer/BottomTab";
import { verifyEmail } from "../../Redux/auth/SignUp";
import { resendOTP } from "../../Redux/auth/SignUp";
import { useDispatch } from "react-redux";
import icon from "./icon/Happy man walks with shopping bags.png";

const PassowrdReset = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [verificationError, setVerificationError] = useState("");
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerifyEmail = async () => {
    try {
      const response = await dispatch(verifyEmail({ email, otp }));
      console.log(response, "veevev");
      if (response.payload.message === "Email successfully verified") {
        navigate(`/createpassword?email=${email}`)
      } else if (response.payload.error === "Invalid verification code") {
        setVerificationError("OTP not Correct");
      } else if (response.payload.error === "Missing email or otp") {
        setVerificationError("Provide an Valid OTP");
      } else if (response.payload === "No response from the server.") {
        setVerificationError("No response from the server.");
      }
    } catch (error) {
      setVerificationError(error.message);
    }
  };

  const handleResend = async (email) => {
    try {
      const response = await dispatch(resendOTP( email));
      console.log(response, "veevev");
      if (response.payload.message === "Email successfully verified") {
        setIsModalOpen(true)
      } else if (response.payload.error === "Invalid verification code") {
        setVerificationError("OTP not Correct");
      } else if (response.payload.error === "Missing email or otp") {
        setVerificationError("Provide an OTP");
      } else if (response.payload === "No response from the server.") {
        setVerificationError("No response from the server.");
      }

    } catch (error) {
      setVerificationError(error.message);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    moveNext()
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const navigate = useNavigate();

  const moveNext = () => {
   navigate('/')
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
            fontSize: "18px",
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
              color: `${verificationError ? "red" : "black"}`,
            }}
          >
            <input
              type="number"
              placeholder="Enter yourOTP"
              style={{
                paddingLeft: "32px",
                height: "60px",
                width: "100%",
                border: `1px solid ${verificationError ? "red" : "black"}`,
                fontSize: "16px",
              }}
              value={otp}
              onChange={handleOtpChange}
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
              color: "red",
              fontSize: "16px",
              marginTop: "4px",
            }}
          >
            {verificationError}
          </p>
          <p
            style={{
              textAlign: "end",
              color: "gray",
              marginTop: "0.3em",
              fontSize: "16px",
            }}
            onClick={()=>handleResend(email)}
          >
            Didn't get OTP?
            <span
              style={{
                color: "#FC2C9C",
                cursor: "pointer",
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
            fontSize: "16px",
          }}
          onClick={handleVerifyEmail}
        >
          Submit
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              Verification successful, Let’s start{" "}
              <span
                style={{
                  color: "#FC2C9C",
                }}
              >
              {" "}  Shopping hairs
              </span>{" "}
            </h2>
            <p>Welcome, to My Posh, prime store for best of hairs</p>
            <img src={icon} width="200px" alt={icon} />

            <button
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "6px",
              }}
              onClick={toggleModal}
            >
             Proceed
            </button>
          </div>
        </div>
      )}

      <BottomTab />
    </div>
  );
};

export default PassowrdReset;
