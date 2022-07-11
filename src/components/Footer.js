import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to="/">
            <img
              src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
              alt="intagram-icon"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              alt="facebook-icon"
            />
          </NavLink>
        </li>
      </ul>
      <p>
        e-mail: <span>ivell.lifeart@gmail.com</span>
      </p>
    </footer>
  );
};

export default Footer;
