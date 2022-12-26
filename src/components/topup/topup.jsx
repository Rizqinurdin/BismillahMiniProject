import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import Navigation from "../header/Navigation";


const bank = [
  { value: "BCA", label: "BCA" },
  { value: "BRI", label: "BRI" },
  { value: "Alfamart", label: "Alfamart" },
];


function Topup() {
  
  const navigate = useNavigate();

  const nominal = [
    { value: "100000", label: "100000" },
    { value: "200000", label: "200000" },
    { value: "300000", label: "300000" },
    { value: "400000", label: "400000" },
    { value: "500000", label: "500000" },
  ];

  const [selectNominal, setSelectNominal] = useState();
  const [selectMethod, setSelectMethod] = useState();
  
  localStorage.setItem("topupNominal", selectNominal)
  localStorage.setItem("topupMethod", selectMethod)

  const topup = () => {

    if (selectMethod === "Alfamart") {
      navigate ("/merchantpayment")
    }else{
      navigate ("/bankva")
    }

}


  return (
    <>
      <Navigation></Navigation>
      <div className="Payment mt-5 font-[poppins]">
        <div
          style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
        >
          <div
            className="card col-12 col-lg-6 login-card mt-2 hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form>
              <h3 className="font-[poppins]">Metode Topup</h3>
              <br />

              <div className="mb-3">
                <Select options={bank} placeholder="Top Up Transfer ATM" onChange={(bank) => setSelectMethod(bank.value)}/>
              </div>

              <div className="mb-3">
                <Select options={nominal} placeholder="Nominal" onChange={(nominal) => setSelectNominal(nominal.value)}/>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={topup}
                >
                  Top Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topup;
