import React from "react";
import Footer from "../../components/footer/Footer";
import gambar from "../../assets/logo/123.svg";
import Working from "../../assets/logo/0101.svg";
import "../../assets/styleLanding.css";
import Keamanan from "./../../assets/logo/kemanan.png";
import Sistem from "./../../assets/logo/layanan.png";
import Layanan from "./../../assets/logo/sistem.png";
import listrik from "./../../assets/logo/listrik.png";
import bpjs from "./../../assets/logo/bpjs1.png";
import pdam from "./../../assets/logo/pdam1.png";
import bni from "./../../assets/logo/bni1.png";
import bca from "./../../assets/logo/bca1.png";
import logo from "./../../assets/logo/logo.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigate("/home");
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  const Navigate = useNavigate();

  return (
    <>
      <section className="navBarSection h-20">
        <header className="header flex">
          <div className="logoDiv">
            <img className="w-20 ml-10" src={logo} alt="logo" />
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <button className="btn" onClick={() => Navigate(`/login`)}>
                  Sign In
                </button>
              </li>
              <li className="navItem">
                <button
                  className="btn bg-success text-white"
                  onClick={() => Navigate(`/register`)}
                >
                  Sign Up Free
                </button>
              </li>
            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toogleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
      <section className="landingPage w-full relative flex items-center justify-center m-auto">
        <img
          className="absolute mt-5 object-cover"
          src={gambar}
          alt="landingGambar"
        ></img>
        <div className="homeContent mt-10">
          <div className="textDiv">
            <button
              className="btn bg-success mt-40 ml-20"
              onClick={() => Navigate(`/login`)}
            >
              <p className="text-white">Special Promo for You</p>
            </button>
          </div>
        </div>
      </section>
      <br />
      <div data-aos="fade-up" className="row landingImage">
        <div className="col-md-4">
          <img className="max-w-lg h-96 mt-5" src={Working} alt="working" />
        </div>
        <div className="col-md-6 text-justify ml-32 md:">
          <h1 className="mt-4 text-3xl font-bold">Tentang Kami</h1> <br />
          <span className="text-sm leading-3">
            {" "}
            Loopsapps adalah aplikasi smart berbasis website yang akan
            memberikan anda kemudahan dan cepat dalam bertransaksi dan melakukan
            pembayaran ke berbagai merchant yang sudah tersedia di aplikasi
            loops ini. Loopsapp adalah aplikasi pembayaran dan transaksi serba
            bisa, simple, instan dan aman yang siap buat segala transaksi
            finansial anda jadi lebih menyenangkan. Didorong oleh keyakinan
            mendasar bahwa memiliki akses ke layanan keuangan menciptakan
            peluang, Loopsapp berkomitmen untuk mendemokratisasi dan
            memberdayakan orang dan bisnis untuk bergabung dan berkembang dalam
            ekonomi global. Platform pembayaran digital terbuka kami memberikan
            kemudahan untuk terus terhubung dan bertransaksi dengan cara baru
            dan canggih secara online melalui website resmi kami. Melalui
            kombinasi inovasi teknologi dan kemitraan strategis, Loopsapp
            menciptakan cara yang lebih baik dan mudah untuk berstransaksi
            antara user dan merchant atau pihak ketiga dan fleksibilitas saat
            melakukan pembayaran.
          </span>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-20 justify-content-center">
        <h1 className="text-4xl text-center uppercase font-[poppins]">
          Transaksi <span className="font-bold">Aman</span> dan{" "}
          <span className="font-bold">Nyaman</span> <br /> dengan LoopsApp
        </h1>
      </div>
      <section data-aos="fade-up" className="container-lg">
        <div className="row mt-5 ">
          <div className="col-md-4">
            <img className="w-40 mx-auto mt-2" src={Sistem} alt="layanan" />
            <h1 className="text-center mt-4 text-2xl font-bold">
              Layanan Terlengkap
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Layanan Terlengkap kemudahan untuk transaksi, kirim uang, dan
              pembayaran tagihan pada merchant
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mt-2 mx-auto" src={Keamanan} alt="keamanan" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Keamanan Terjamin
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Keamanan terjamin Loops menjamin 100% kemanan transaksi digital
              dengan garansi uang kembali
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-40 mx-auto mt-2" src={Layanan} alt="sistem" />
            <h1 className=" text-center mt-4 font-[poppins] text-2xl font-bold">
              Sistem Tercanggih
            </h1>
            <p className="mt-3 text-md text-gray-500 font-[poppins] text-center">
              Sistem Tercanggih Loops dibangun dengan teknologi keamanan kelas
              dunia dengan sistem jaringan yang diawasi 24 jam
            </p>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="container-lg">
        <h1 className="text-center text-3xl font-bold mt-5 font-[poppins]">
          Partner Kami
        </h1>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4 justify-justify-content-center">
            <img className="#" src={listrik} alt="listrik" />
          </div>
          <div className="col-md-4 mt-3">
            <img className="#" src={bpjs} alt="bpjs" />
          </div>
          <div className="col-md-4">
            <img className="w-60 ml-10 mt-3" src={pdam} alt="pdam" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="#" src={bni} alt="bni" />
          </div>
          <div className="col-md-2 mt-5">
            <img className="#" src={bca} alt="bca" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Index;
