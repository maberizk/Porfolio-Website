import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="footerColor">
      <div>
        <p className="footer_email">michelle.aberizk@gmail.com</p>
      </div>
      <div className="socialIcons">
        <a
          href="https://www.linkedin.com/in/michelle-aberizk-99148624/"
          target="_blank"
          className="icon"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="https://www.pinterest.com/meesh129/" className="icon">
          <i className="fa fa-pinterest" target="_"></i>
        </a>
        <a href="https://github.com/maberizk" target="_blank" className="icon">
          <i className="fa fa-github"></i>
        </a>
        <a href="/Resume_MichelleAberizk.pdf" target="_blank" className="icon">
          <i className="fa fa-file"></i>
        </a>
      </div>
    </div>
  );
}
