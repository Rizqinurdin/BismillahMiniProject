import Navigation from "../header/Navigation";
import { useNavigate } from "react-router-dom";
import BPJS from "../../assets/logo/bpjs.png";
import swal from "sweetalert";
import { useState } from "react";

function Bill() {

  const [paymentId, setNopel] = useState("");

  const handlePay = async () =>{

    let result = await fetch(`http://localhost:8080/api/merchant/find`,{
      method: 'post',
      body: JSON.stringify({paymentId}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });

      result = await result.json();
      console.log(result)

    if(result.valid === "Check Success"){
      console.log(JSON.stringify(result));
      // localStorage.setItem('user', JSON.stringify(result))
      localStorage.setItem('payid', result.merchantId)
      // localStorage.setItem('merchName', result.data)
      // localStorage.setItem('nopel', paymentId)
      swal("Merch Found!")
      window.location.href = "/pay";
      // navigate("/home");
    }else{
      console.log(JSON.stringify(result));
      swal("Nomor Pelanggan Tidak Diketahui")
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
            className="card col-12 col-lg-6 login-card hv-center"
            style={{ display: "flex", justifyContent: "center", padding: 40.0 }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 justify-items-center w-full">
                <div className=" col-span-1">
                  <img src={BPJS} alt="bpjs" className=" h-36" />
                </div>
              </div>
              <div className="mb-3">
                <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Id Pelanggan
                  </span>
                  <input
                    type="text"
                    name="number"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  block w-full rounded-md sm:text-sm focus:border-utama focus:ring-utama"
                    placeholder="Tolong Masukkan ID PELANGGAN"
                    value={paymentId}
                    onChange={(e) => setNopel(e.target.value)}
                  />
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-kedua bg-utama text-white text-xl ring-2 ring-kedua hover:ring-utama"
                  onClick={handlePay}
                >
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
