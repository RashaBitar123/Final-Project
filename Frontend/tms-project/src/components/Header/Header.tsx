import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/4Finance-Logo.png";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <img
        onClick={() => navigate("/")}
        className="header-logo"
        src={Logo}
        alt="4Finance Logo"
      />
      <nav>
        <ul className="menu-ul">
          <li
            onClick={() => navigate("teachers-management")}
            className="menu-item"
          >
            Teachers Mangement
          </li>
          <li
            onClick={() => navigate("students-management")}
            className="menu-item"
          >
            Students Management
          </li>
          <li
            onClick={() => navigate("courses-management")}
            className="menu-item"
          >
            Courses Management
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
