import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navigation from "../../components/header/Navigation";
import api from "../../services/topupapi";

function TopUpPayment() {
  
  const Navigate = useNavigate();
  
  const localId = localStorage.getItem("Id")
  const topupmethod = localStorage.getItem("topupMethod")
  const topupnominal = localStorage.getItem("topupNominal")
  const localpayid = localStorage.getItem("payid")


  const [product, setProducts] = useState({});

  const fetchProduct = async () => {

    try {
      const url = `/get/${localpayid}`;
      const response = await api.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);


  console.log(product.balance);

  var baseprice = topupnominal;
  // var merchname = localStorage.getItem("merchName")
  // console.log(baseprice);
  
  var discount, bayar;
  if(baseprice > 200000){
    discount = baseprice*50/100;
    bayar = baseprice + discount;
  }else if (baseprice > 99000) {
    discount = baseprice*25/100;
     bayar = JSON.parse(baseprice) + JSON.parse(discount);
  }else if (baseprice > 50000) {
    discount = baseprice*10/100;
    bayar = baseprice + discount;
  }else{
    discount = 0;
    bayar = baseprice - discount;
  }

  const addRegis = e => {

    if (product.balance >= baseprice) {
      
      e.preventDefault();
      // ngebuat history payment
      axios.post('http://localhost:8080/api/invoice/create', {
        userId: localId,
        virtualAcc: localpayid,
        basePrice: baseprice,
        discount: discount,
        totalPrice: bayar
      })
      .then(function (response) {
        console.log(response);
        Navigate("/home")
      })
      .catch(function (error) {
        console.log(error);
      });

      new Swal({title:"Success!",
      text:"TopUp Success!",
      type:"Success",
      timer:20000})
      window.location.href = "/home";

    }else{
      
      new Swal({title:"Failed!",
      text:"TopUp Failed!",
      type:"Failed",
      timer:20000})
      window.location.href = "/topuppayment";

    }

  }

  return (
    <>
      <Navigation></Navigation>
      <div className="Payment mt-2 font-[poppins]">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <h3 className="font-[poppins]">TOTAL PAYMENT</h3>
              <br />

              <section className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="baseprice"
                      name="baseprice"
                      value={topupnominal}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Bonus</label>
                    <input
                      type="text"
                      className="form-control"
                      id="discount"
                      name="discount"
                      value={discount}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label htmlFor="name">Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      id="totalPrice"
                      name="totalPrice"
                      value={bayar}
                    />
                  </div>
                </div>
              </section>

              <div className="mb-3"></div>

              <div className="mb-3"></div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={addRegis}
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopUpPayment;
