import React from "react";
import Caroussel from "../components/Caroussel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Caroussel />
      <Footer />
    </div>
  );
};

export default Home;
