import moment from "moment";
import React, { useEffect, useState } from "react";
import CardHistory from "../../components/card-history";
import Navigation from "../../components/header/Navigation";
import api from "../../services/invoiceapi";

const History = () => {

  const [products, setProducts] = useState([]);

  const local = localStorage.getItem("Id")

  const fetchProduct = async () => {
    

    try {
      const url = `/userinvoice/${local}`;
      const response = await api.get(url);
      const payload = [...response.data]; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="bg-utama h-screen">
        <Navigation></Navigation>
        <div className="container-lg">

        {products && products.slice().map(
          (item //tanpa return gunakan kurung biasa
          ) => (

          <CardHistory 
            firstName={item.orderType} 
            bills={item.totalPrice} 
            merch= {moment(item.createdDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            onClick={item.invoiceId}/>
          )
        )}
        </div>
      </div>
    </>
  );
};

export default History;
