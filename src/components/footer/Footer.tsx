import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      &copy; {new Date().getFullYear()} BLOG Project. All Rights Reserved.
    </footer>
  );
};

export default Footer;
