import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formation1 from "./pages/Formations/Formation1";
import Formation2 from "./pages/Formations/Formation2";
import Formation3 from "./pages/Formations/Formation3";
import Galery1 from "./pages/Galeries/Galery1";
import Galery2 from "./pages/Galeries/Galery2";
import Galery3 from "./pages/Galeries/Galery3";
import Galery4 from "./pages/Galeries/Galery4";
import Galery5 from "./pages/Galeries/Galery5";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beaute" element={<Galery1 />} />
        <Route path="/mode" element={<Galery2 />} />
        <Route path="/produit" element={<Galery3 />} />
        <Route path="/anniversaire" element={<Galery4 />} />
        <Route path="/mariage" element={<Galery5 />} />
        <Route path="/photographie" element={<Formation1 />} />
        <Route path="/retouche-pro" element={<Formation2 />} />
        <Route path="/packs-setup" element={<Formation3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
