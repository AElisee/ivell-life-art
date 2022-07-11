import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Formation = () => {
  return (
    <div className="formation">
      <Header />
      <div className="formation-container">
        <div className="devise">
          <div>
            <h2>votre devise</h2>
            <select name="" id="">
              <option value="">$ (dollars)</option>
              <option value="">€ (euro)</option>
              <option value="">Fcfa</option>
              <option value="">Bitcoin</option>
            </select>
          </div>
        </div>
        <div className="content">
          <div className="card formation-1">
            <div className="img"></div>
            <div className="f-link">
              <NavLink to="/formation" className="decoration">
                De zéro à Pro en Photographie Studio
              </NavLink>
            </div>
          </div>
          <div className="card formation-2">
            <div className="img"></div>
            <div className="f-link">
              <NavLink to="/formation" className="decoration">
                Rétouche comme un Pro
              </NavLink>
            </div>
          </div>
          <div className="card formation-3">
            <div className="img"></div>
            <div className="f-link">
              <NavLink to="/formation">luts gratuits</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Formation;
