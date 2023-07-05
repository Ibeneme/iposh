import { useRef } from "react";
import { FaBars, FaTimes, FaTwitter, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../navbar-and-footer/styles/Navbar.css";
import { BsSearch, BsHandbagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

function Navbar() {
  let navigate = useNavigate();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };




  return (
    <header
    className="header-header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
margin:'0em'
      
      }}
      

    >
      <div
        className="take-for-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
            
        }}
      >
        <div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars
              style={{
                fontSize: "0.8em",
                marginTop: "0.4em",
                marginLeft:'-0.32em'
              }}
            />
          </button>
          <div className="nav-three-icons" onClick={() => navigate("/")}>
            <h3 className="h3-for-navbar">iPosh</h3>
          </div>
        </div>

        <nav ref={navRef}>
          <div
            style={{
              padding: "4em 2em",
              display: "flex",
              flexDirection: "column",
              color: " #fff",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textAlign: "center",
              height: "100%",
            }}
          >
            <button
              className="nav-btn nav-close-btn"
              style={{
                color: "#fff",
              }}
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: " #fff",
                justifyContent: "space-between",
                alignItems: "flex-start",

                height: "100%",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: " #fff",
                  height: "100%",
                }}
              >
                <div
                className="nav-three-icons-show"
                  style={{
                    
                    display: "flex",
                    flexDirection: "column",
                    color: " #fff",
                    fontSize: "1.2em",
                    gap: "1.42em",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <p>Bouncy Hairs</p>
                  <p>Wavy Hairs</p>
                  <p>Curly Hairs</p>
                  <p>Sales</p>
                  <p>Closure or Frontal</p>
                  <p>Wigs</p>
                  <p>Hair accessories</p>
                  <p>Login</p>
                </div>
                <div
                className="nav-three-icons-show"
                  style={{
                    display: "flex",
                    width: "100%",
                    fontSize: "1.53em",
                    justifyContent: "space-between",
                    margin: "1.4em 0",
                  }}
                >
                  <FaTwitter />
                  <AiFillInstagram />
                  <FaTiktok />
                </div>
              </div>
              <div className="nav-three-icons-show">
                <button
                  className="nav-three-icons-show"
                  style={{
                    padding: "1.1em 3em",
                    border: "none",
                    borderRadius: "637px",
                    color: "#000",
                  }}
                >
                  {" "}
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1.2em",
              color: "gray",
              fontSize: "1.2em",
            }}
          >
            <BsSearch className="nav-three-icons" />
            <BiSolidUser onClick={() => navigate("/signup")} />
            <BsHandbagFill onClick={() => navigate("/bag")} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="nav-three-icons"
          style={{
            width: "90%",
            backgroundColor: "black",
            color: "white",
            marginTop: "-1.3em",
            borderTop: "#FC2C9C 3px solid",
            paddingLeft: "3em",
            paddingRight: "4em",
            paddingTop: "1em",
            paddingBottom: "0.3em",
            display: "flex",
            gap: "4em",
            overflow: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "0",
          
            scrollbarColor: "transparent transparent",
          }}
        >
          <style>
            {`
      .nav-three-icons::-webkit-scrollbar {
        width: 0.5em;
      }
      .nav-three-icons::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
    `}
          </style>
          <p className="bouncy-hairs">Bouncy Hairs</p>
          <p className="bouncy-hairs">Wavy Hairs</p>
          <p className="bouncy-hairs">Curly Hairs</p>
          <p className="bouncy-hairs">Sales</p>
          <p className="bouncy-hairs">Closure or Frontal</p>
          <p className="bouncy-hairs">Wigs</p>
          <p className="bouncy-hairs">Sales</p>
          <p className="bouncy-hairs">Closure or Frontal</p>
          <p className="bouncy-hairs">Wigs</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
