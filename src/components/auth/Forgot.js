import React from "react";
import { RiMailLine } from "react-icons/ri";
import "./auth.css";
import {useNavigate} from 'react-router-dom'


const Forgot = () => {
    const navigate = useNavigate()
  return (
    <div className="auth-div-first">

      <div className="auth-div">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Forgot Password
        </h3>
        <p
          style={{
            textAlign: "center",
            fontSize:"14px",
            color:'gray',
            marginTop:'0.3em',
            zIndex:'1'
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
                height: "50px",
                width: "100%",
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
            height: "50px",
            backgroundColor: "#FC2C9C",
            width: "100%",
            border: "none",
            color: "white",
            marginTop: "2.3em",
      
          }}
          onClick={()=>navigate('/verify')}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Forgot;
