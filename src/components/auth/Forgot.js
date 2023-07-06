import React from "react";
import { RiMailLine } from "react-icons/ri";
import "./auth.css";
import {useNavigate} from 'react-router-dom'
import BottomTab from "../navbar-and-footer/BottomTab";


const Forgot = () => {
    const navigate = useNavigate()
  return (
    <div className="auth-div-first">

      <div className="auth-div">
        <h3
          style={{
            textAlign: "center",
            fontSize:'24px'
          }}
        >
          Forgot Password
        </h3>
        <p
          style={{
            textAlign: "center",
            color:'gray',
            marginTop:'0.3em',
            fontSize:'18px'
          }}
          onClick={()=>navigate('/signin')}
        >
        Remembered Your Password? <span  style={{
              color: "#FC2C9C",
          }}>Login</span>
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
                color:'gray',
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "8px",
                fontSize: "20px",
              }}
            />
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
            fontSize:'16px'
      
          }}
          onClick={()=>navigate('/verify')}
        >
          Submit
        </button>
      </div>
      <BottomTab />
    </div>
  );
};

export default Forgot;
