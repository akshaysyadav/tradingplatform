import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "https://tradingplatform-tau.vercel.app/"; 
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {[
            { name: "Dashboard", path: "/" },
            { name: "Orders", path: "/orders" },
            { name: "Holdings", path: "/holdings" },
            { name: "Positions", path: "/positions" },
            { name: "Funds", path: "/funds" },
          ].map((menu, index) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={menu.path}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {menu.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div
          className="profile logout-btn"
          onClick={handleLogout}
          style={{ cursor: "pointer", textAlign: "center", padding: "10px" , }}
        >
          <div className="avatar">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
