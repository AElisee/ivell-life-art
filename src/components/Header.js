import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>
            <NavLink to="/">IVELL LIVE START</NavLink>
          </h1>
          <p>des images bios, faites par de vrais artitistes</p>
        </div>
        <nav>
          <ul>
            <li>recent</li>
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
              Formation
              <ul id="sub-menu">
                <li>
                  <NavLink to="/photographie">Photographie</NavLink>
                </li>
                <li>
                  <NavLink to="/retouche-pro">Retouche Pro</NavLink>
                </li>
                <li>
                  <NavLink to="/packs-setup">Packs Setup</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
