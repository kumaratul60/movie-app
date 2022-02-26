import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie-App</div>
      </Link>
      <div className="user_image">
        <img
          src="https://www.pngkit.com/png/detail/128-1280585_user-icon-fa-fa-user-circle.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
