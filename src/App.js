import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Promo from "./components/promo/Promo";
import Details from "./pages/details-promo";
import DetailsPDAM from "./pages/details-promo/pdam";
import Footer from "./components/footer/Footer";
import DetailsPLN from "./pages/details-promo/pln";
import Home from "./pages/home/Home";
import Topup from "./components/topup/topup";
import Index from "./pages/landingpage/Index";
import History from "./pages/history/index";
import Invoice from "./pages/invoice/Index"
import Payment from "./pages/payment/Index"
import Register from "./components/register/index"
import Login from "./components/login/index"
import Setting from "./pages/setting/Setting";
import CardHistory from "./components/card-history";
import Price from "./pages/Price/Price"
import { Bill, PaymentBill } from "./components";
import ProtectedRoutes from "./ProtectedRoutes";
import TopUpPayment from "./pages/topup_payment/TopUpPayment";
import BankVA from "./pages/bankVA/BankVA";
import MerchantPayment from "./pages/merchant_payment/MerchantPayment";



function App(){
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route element={<ProtectedRoutes/>}>

        <Route path="/home" element={<Home />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/details" element={<Details />} />
        <Route path="/detail-pdam" element={<DetailsPDAM />} />
        <Route path="/detail-pln" element={<DetailsPLN/>}/>
        <Route path="/topup" element={<Topup />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/setting" element={<Setting/>}/>
        {/* <Route path="/invoice" element={<Invoice/>}/> */}
        <Route exact path="/invoice/:id" element={<Invoice />} />
        <Route path="/ch" element={<CardHistory/>}/>
        <Route path="/bill" element={<Bill/>}/>
        <Route path="/pay" element={<PaymentBill/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/topuppayment" element={<TopUpPayment/>}/>
        <Route path="/bankva" element={<BankVA/>}/>
        <Route path="/merchantpayment" element={<MerchantPayment/>}/>

        </Route>

      </Routes>
      
    </BrowserRouter>
   </>
  )
}

export default App;