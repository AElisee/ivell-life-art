import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formation from "./pages/Formations/Formation";
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
        <Route index element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/beaute" element={<Galery1 />} />
        <Route path="/mode" element={<Galery2 />} />
        <Route path="/produit" element={<Galery3 />} />
        <Route path="/anniversaire" element={<Galery4 />} />
        <Route path="/mariage" element={<Galery5 />} />
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
