import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import { RiFileList3Fill } from "react-icons/ri";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import "./styles/Navbar.css";

const BottomTab = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bottomtab">
      <NavLink
        exact
        to="/"
        className="bottomtab-link"
        activeClassName="active"
        onClick={() => handleTabClick("/")}
      >
        <HiHome className="bottomtab-icon" />
        <p className="bottomtab-text">Home</p>
      </NavLink>
      <NavLink
        to="/saved"
        className="bottomtab-link"
        activeClassName="active"
        onClick={() => handleTabClick("/saved")}
      >
        <MdFavorite className="bottomtab-icon" />
        <p className="bottomtab-text">Saved</p>
      </NavLink>
      <NavLink
        to="/bag"
        className="bottomtab-link"
        activeClassName="active"
        onClick={() => handleTabClick("/bag")}
      >
        <BsFillHandbagFill className="bottomtab-icon" />
        <p className="bottomtab-text">Bag</p>
      </NavLink>
      <NavLink
        to="/order"
        className="bottomtab-link"
        activeClassName="active"
        onClick={() => handleTabClick("/order")}
      >
        <RiFileList3Fill className="bottomtab-icon" />
        <p className="bottomtab-text">Orders</p>
      </NavLink>
      <NavLink
        to="/profile"
        className="bottomtab-link"
        activeClassName="active"
        onClick={() => handleTabClick("/profile")}
      >
        <BiSolidUser className="bottomtab-icon" />
        <p className="bottomtab-text">Profile</p>
      </NavLink>
    </div>
  );
};

export default BottomTab;
