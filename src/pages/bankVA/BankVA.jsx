import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Navigation from "../../components/header/Navigation";


function BankVA() {

  const [virtualAcc, setNomorVa] = useState("");
  
  const handleVA = async () =>{
  
    let result = await fetch(`http://localhost:8080/api/topup/find`,{
      method: 'post',
      body: JSON.stringify({virtualAcc}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
      result = await result.json();
      console.log(result)
  
    if(result.valid === "Check Success"){
      // localStorage.setItem('checkk', JSON.stringify(result))
      localStorage.setItem('payid', result.vaccount)
      // localStorage.setItem('nopel', virtualAcc)
      
      
      window.location.href = "/topuppayment";
      
    }else{
      swal("Input A valid VA Credentials")
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
            <form onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-[poppins]">Metode Topup Virtual Account</h3>
              <br />

              <div className="mb-3">
              <input
                    type="text"
                    name="number"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  block w-full rounded-md sm:text-sm focus:border-utama focus:ring-utama"
                    placeholder="Tolong Masukkan Nomor VA" 
                       value={virtualAcc}
                       onChange={e => setNomorVa(e.target.value)}
                       
                />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn hover:bg-green-400 bg-green-500 text-white font-[poppins]"
                  onClick={handleVA}
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

export default BankVA;
