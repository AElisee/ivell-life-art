import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSlide from "../components/HomeSlide";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeSlide />
      <Footer />
    </div>
  );
};

export default Home;
