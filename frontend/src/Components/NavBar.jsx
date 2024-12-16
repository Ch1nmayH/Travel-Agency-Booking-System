import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/Packages" },
    { name: "About", path: "/about" },
  ];

  const navigate = useNavigate();
  return (
    <div
      className="h-[80px] shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-0 z-10 transition-all"
      style={{
        background: "linear-gradient(to right, #0A1A22, #2B3F4F)", // Different gradient for NavBar
      }}
    ></div>
  );
};

export default NavBar;
