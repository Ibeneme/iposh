import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div style={{
        minHeight:'50vh',
        backgroundColor:'black'
      }}>
      <div className="footer-background-black">
        <div className="iposh-flex">
          <div className="iposh-contents">
            <h1>iPosh</h1>
            <div>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Help & FAQ</p>
              <p>Return Policy</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="iposh-contents">
            <p className="iposh-contents-p-stlye">
              Subscribe to get our discount days and sales
            </p>
            <div className="div-stlye">
              <input
                className="input-stlye"
                placeholder="Enter your email address to subscribe"
              />
              <button className="button-stlye">Submit</button>
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            paddingBottom: "6em",
            marginTop: "-5em",
          }}
          className="iposh-contents-p"
        >
          © 2023 IPosh Hair
        </p>
      </div>
    </div>
  );
};

export default Footer;
