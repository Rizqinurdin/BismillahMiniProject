import React from "react";
import Navigation from "../../components/header/Navigation";
import hero3 from "./../../assets/logo/holiday.png";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Navigation />
      <div className="container-lg">
        <h1 className="text-center text-3xl font-bold font-[poppins]">
          Kabar gembira untuk Loopers kali ini aplikasi loops <br /> kembali
          menghadirkan promo discount sebanyak 10 % <br /> bagi para pelanggan
          setia
        </h1>
        <img src={hero3} class="img-fluid mx-auto mt-4 w-auto" alt="..." />

        <h1 className="mt-5 font-bold">Syarat dan Ketentuan</h1>
        <div className="mt-2">
          <p className="col-md-8">
            1. Promo ini berlaku untuk pembayaran PDAM pada aplikasi Loops
            dengan ketentuan sebagai berikut: •Promo berupa potongan harga
            sebanyak 50% jumlah yang harus dibayarkan pengguna di potong
            sebanyak 50% dari jumlah yang seharusnya dibayarkan.
          </p>
          <p className="col-md-8">
            2. Periode 1 – 31 Desember 2022, Pelanggan akan mendapatkan discount
            atau potongan harga sebesar 50% selama periode promo berlaku hingga
            10x transaksi/ Pelanggan/ Periode.
          </p>
          <p className="col-md-8">
            3. Kuota Promo terbatas setiap harinya selama periode promo.
          </p>
          <p className="col-md-8">
            4. Loops dapat menggugurkan hak pengguna apabila ditemukan tindakan
            yang dianggap oleh Loops sebagai penyalahgunaan, kecurangan dan atau
            transaksi mencurigakan lainnya
          </p>
          <p className="col-md-8">
            5. Promo dapat berubah atau berhenti sewaktu-waktu sesuai dengan
            kebijakan perusahaan, yang akan diinfokan terlebih dahulu melalui
            website www.loops.com
          </p>
          <p className="col-md-8">
            6. Promo ini akan hangus pada tanggal 31 Desember 2022, pukul 23:59
            WIB..
          </p>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => Navigate(`/bill`)}
          >
            Reedem Code
          </button>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Details;
