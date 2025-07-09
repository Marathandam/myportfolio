import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#hackathons">Hackathons</a>
      <a href="#leetcode">LeetCode and Cp</a>
      <a href="#current-projects">Current Projects</a>
      <a href="#contact">Contact</a>
      <button onClick={toggleTheme} className="btn" style={{ marginLeft: "1rem" }}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
