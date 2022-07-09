import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink href="#">
            <i class="fa-brands fa-instagram-square"></i>
          </NavLink>
        </li>
        <li>
          <NavLink href="#">
            <i class="fa-brands fa-facebook-square"></i>
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
