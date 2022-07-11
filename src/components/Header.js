import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>
            <NavLink to="/accueil">IVELL LIVE ART</NavLink>
          </h1>
          <p>des images bios, faites par de vrais artitistes</p>
        </div>
        <nav>
          <ul>
            <NavLink to="/accueil">
              <li>recent</li>
            </NavLink>
            <li>
              galerie
              <ul id="sub-menu">
                <li>
                  <NavLink to="/beaute">Beauté</NavLink>
                </li>
                <li>
                  <NavLink to="/mode">Mode</NavLink>
                </li>
                <li>
                  <NavLink to="/produit">Produit</NavLink>
                </li>
                <li>
                  <NavLink to="/anniversaire">Anniversaire</NavLink>
                </li>
                <li>
                  <NavLink to="/mariage">Mariage</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/formation" id="formation">
                Formation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
