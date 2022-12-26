import React from "react";
import Navigation from "../../components/header/Navigation";
import logo from "../../assets/logo/loops.png";
import Footer from "../../components/footer/Footer";
import api from "../../services/invoiceapi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";


const Invoice = () => {

  const [product, setProducts] = useState({});

  const param = useParams();

  const fetchProduct = async  (id) => {

    try {
      const url = `/find/${id}`;
      const response = await api.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProduct(param.id);
    }
  }, [param.id]);


  // const date = product.createdDate.moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
   const date = moment(product.createdDate).format("dddd, MMMM Do YYYY, h:mm:ss a");

  return (
    <>
      <Navigation></Navigation>
      <div className="bg-utama px-2">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="border rounded-lg border-dashed border-kedua shadow-lg shadow-black py-5 border-3 bg-white ring-2 ring-white">
                <div className=" pl-3">
                  <div className="flex flex-row justify-center mb-3">
                    <img className=" w-28" src={logo} alt="" />
                  </div>
                  <h2 className="text-kedua">{product.orderType}</h2>
                  <div className="flex flex-row items-end">
                    {" "}
                    <span className="text-black text-3xl font-bold">
                    {product.totalPrice}
                    </span>{" "}
                    <span className="mt-2 text-gray font-bolder">.00 IDR</span>{" "}
                  </div>
                </div>
                <div className="flex w-full mt-3 mb-3">
                  {" "}
                  <span className="border border-dashed w-full border-kedua"></span>{" "}
                </div>
                <div className="p-3 space-y-5">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Company</span>{" "}
                    <span className="text-black text-lg font-bold">{product.bankName}{product.merchantName}</span>{" "}
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Base Price #</span>{" "}
                    <span className="text-black text-lg font-bold">{product.basePrice}</span>{" "}
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Promo #</span>{" "}
                    <span className="text-black text-lg font-bold">{product.discount}</span>{" "}
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Order #</span>{" "}
                    <span className="text-black text-lg font-bold">
                      DS1234343
                    </span>{" "}
                  </div>
                  {/* <div className='flex flex-col'> <span className='text-gray'>Service</span> <span className='text-black text-lg font-bold'>New Document</span> </div> */}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-gray">Date #</span>{" "}
                    <span className="text-black text-lg font-bold">
                    {date}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Invoice;
