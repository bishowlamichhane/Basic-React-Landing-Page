import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="headerElement">
      <div className="div1 ">
        <img src="../images/brand_logo.png" style={{ cursor: "pointer" }} />
      </div>
      <NavBar />
      <div className="div3">
        <button className="loginButton">Login</button>
      </div>
    </div>
  );
};

export default Header;
