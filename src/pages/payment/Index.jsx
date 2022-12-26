import React from "react";
import Navigation from "../../components/header/Navigation";
import Hero from "../../components/hero/Hero";
import bpjs from "./../../assets/logo/bpjs1.png";
import listrik from "./../../assets/logo/listrik.png";
import pdam from "./../../assets/logo/pdam1.png";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Navigation></Navigation>
      <section className="container-lg mt-3">
        <Hero></Hero>
        <h1 className="text-center text-2xl mt-5 font-[poppins]">
          Payment LoopsApp
        </h1>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100  m-4">
            <img
              className="ml-auto mr-auto"
              src={bpjs}
              alt="1"
              onClick={() => Navigate(`/bill`)}
            />
          </div>
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100 m-4">
            <img
              className="ml-auto mr-auto"
              src={listrik}
              alt="2"
              onClick={() => Navigate(`/bill`)}
            />
          </div>
          <div className="col-md-4 rounded-lg bg-green-200 hover:bg-green-100 m-4">
            <img
              className="w-60 mt-2 ml-auto mr-auto"
              src={pdam}
              alt="3"
              onClick={() => Navigate(`/bill`)}
            />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Index;
