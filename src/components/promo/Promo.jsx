import React from "react";
import Hero from "../hero/Hero";
import Banner from "../card/Banner";
import Navigation from "../header/Navigation";
import Footer from "../../components/footer/Footer";

const Content = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="container-lg mt-3">
        <Hero></Hero>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Content;
