import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300"
      >
        <div>
          <h1 className="w-full text-3xl font-bold text-black font-[poppins]">
            LoopsApp
          </h1>
          <p className="py-4 text-black font-[poppins]">
          Loopsapps adalah aplikasi smart berbasis website yang akan memberikan anda kemudahan dan cepat dalam bertransaksi dan melakukan pembayaran ke berbagai merchant yang sudah
tersedia di aplikasi loops ini.
          </p>
          <div className="text-black flex  md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className="text-black  lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-bold text-base text-black font-[poppins]">
              Kontak Kami
            </h6>
            <ul>
              <li className="py-2 text-sm"> PT. LoopsApps</li>
              <li className="py-2 text-sm">Jl. Mampang prapatan</li>
              <li className="py-2 text-sm">Jakarta Selatan</li>
              <li className="py-2 text-sm">Indonesia</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-base text-black font-[poppins]">
              Informasi
            </h6>
            <ul>
              <li className="py-2 text-sm">Tentang Kami</li>
              <li className="py-2 text-sm">Manajemen LoopsApp</li>
              <li className="py-2 text-sm">Karir</li>
              <li className="py-2 text-sm">Pengumuman</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-base text-black font-[poppins]">
              Bantuan
            </h6>
            <ul>
              <li className="py-2 text-sm">Kamus</li>
              <li className="py-2 text-sm">Pusat Bantuan</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-base text-black font-[poppins]">
              2022 PT LoopsApp
            </h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
