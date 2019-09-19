import React from "react";
import "./Header.css";

const Header = () => (
    <div className="header">  
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="news">Trending Coins</a></li>
      <li><a href="portfolio">My Portfolio</a></li>
      <li><a href="news">News</a></li>
      <li><a className="active" href="about">Log In</a></li>
      <li><a className="active" href="about">Sign Up</a></li>
    </ul>
    </div>
  );

export default Header;