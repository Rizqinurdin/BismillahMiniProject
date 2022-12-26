import React from "react";
import { useNavigate } from "react-router-dom";
import card from "../../assets/logo/card.png";
import card1 from "../../assets/logo/card2.png";
import card2 from "../../assets/logo/card3.png";

const Banner = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div classNameName="container">
        <div className="row">
          <h5 className="mt-5 text-center fw-bold">Promo Sedang Berlangsung</h5>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 ml-20 w-4/5">
              <img className="rounded-t-lg" src={card} alt="spanduk" />

              <div className="p-3">
                <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                  Promo 25 % untuk pembayara BPJS via LoopApp
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Bayar BPJS Kesehatan jangan tunggu sakit! Sekarang bisa lebih
                  mudah dan cepat pakai aplikasi Loops. Bayar tagihan BPJSmu
                  sekarang dengan promo bayar BPJS dari aplikasi loops dan
                  dapatkan discount 25%!
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => Navigate(`/details`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 ml-10 w-4/5">
              <img className="rounded-t-lg" src={card1} alt="spanduk1" />
              <div className="p-3">
                <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                  Promo discount topup 10% setiap transaksi Topup 100.000
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Ada kabar gembira untuk Loopers! kali ini aplikasi Loops
                  kembali menghadirkan promo discount sebanyak 10% bagi para
                  pelanggan setianya yang melakukan transaksi Topup di aplikasi
                  loops ini.
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => Navigate(`/detail-pdam`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5 w-4/5">
              <img className="rounded-t-lg" src={card2} alt="spanduk3" />

              <div className="p-3">
                <h5 className="mb-2 text-ratio-1x1 font-bold tracking-tight text-gray-900 dark:text-white">
                  Promo Mega Discount up to 50%
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Bayar PDAM Sekarang bisa lebih mudah dan cepat pakai aplikasi
                  Loops. Bayar tagihan PDAM sekarang dengan promo bayar PDAM
                  dari aplikasi loops dan dapatkan discount 50% off syarat dan
                  ketentuan berlaku.
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => Navigate(`/detail-pln`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
