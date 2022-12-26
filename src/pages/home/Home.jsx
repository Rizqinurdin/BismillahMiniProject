import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Navigation from "../../components/header/Navigation";
import { Card } from "react-bootstrap";
import Promo from "../../assets/logo/icon1.png";
import Pay from "../../assets/logo/icon2.png";
import History from "../../assets/logo/icon3.png";
import User from "../../assets/logo/users.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import api from "../../services/api";
import api2 from "../../services/invoiceapi";
import CardHistory from "../../components/card-history";
import moment from "moment";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};

const Home = () => {



  const [products, setProducts] = useState([]);

  const local = localStorage.getItem("Id")

  const fetchProduct = async () => {
    try {
      const url = `/userinvoice/${local}`;
      const response = await api2.get(url);
      const payload = [...response.data]; //masuk kedalam data dan ke citties
      console.log(payload);
      setProducts(payload);
    } catch (error) {
      alert(error);
    }
  };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  

  const Navigate = useNavigate();

  const [user, setUser] = useState({});

  const localId = localStorage.getItem("Id");

  const fetchUser = async () => {
    try {
      const url = `/${localId}`;
      const response = await api.get(url);
      const payload = { ...response.data }; //masuk kedalam data dan ke citties
      console.log(payload);
      setUser(payload);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchProduct();
  }, []);

  // localStorage.setItem("Id", user.userId);
  localStorage.setItem("Name", user.name);
  localStorage.setItem("Balance", user.balance);
  localStorage.setItem("Gender", user.gender);
  localStorage.setItem("PhoneNum", user.phoneNumber);

  return (
    <>
      <Navigation></Navigation>
      <div className="container-lg">
        <div className="container mt-5">
          
          
          <h1 className="text-1xl font-bold font-[poppins]">
            Welcome Back {user.name}
          </h1>

          <div className="row">
            <div className="col-md-4">
              <Card className="bg-slate-100 mt-3" style={{ width: "30rem" }}>
                <Card.Body>
                  <Card.Title className="text-2xl font-[poppins]">
                    Loops Balance
                  </Card.Title>
                  <Card.Subtitle className="mb-2 mt-3 text-2xl">
                    Rp.{user.balance}
                  </Card.Subtitle>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => Navigate(`/topup`)}
                  >
                    Topup
                  </button>
                </Card.Body>
              </Card>

              <div className="conpromo mt-3">
                <Carousel autoplay style={{ width: "30rem" }}>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        src={require("./img/card.png")}
                        alt="1"
                        className="carlog"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        src={require("./img/card2.png")}
                        alt="2"
                        className="carlog"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        src={require("./img/card3.png")}
                        alt="3"
                        className="carlog"
                      />
                    </h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>
                      <img
                        src={require("./img/card2.png")}
                        alt="3"
                        className="carlog"
                      />
                    </h3>
                  </div>
                </Carousel>
              </div>
            </div>
            <br></br>
            <div className="col-md-4">
              <Card
                className="bg-slate-100 ml-72 h-2/4"
                style={{ width: "35rem" }}
              >
                <Card className="md:w-100">
                  <Card.Header>
                    Shortcut
                    <div className="row">
                      <div className="col-md-4 flex mt-3 w-full justify-center">
                        <button>
                          {" "}
                          <img
                            className="w-12 mx-2"
                            src={Promo}
                            alt="promo"
                            onClick={() => Navigate(`/promo`)}
                          />
                          <p className="text-xs mt-2 text-center">Promo</p>
                        </button>
                        <button>
                          {" "}
                          <img
                            className="w-12 mx-2"
                            src={History}
                            alt="payment"
                            onClick={() => Navigate(`/payment`)}
                          />
                          <p className="text-xs mt-2 text-center">Bills</p>
                        </button>
                        <button>
                          {" "}
                          <img
                            className="w-12 mx-2"
                            src={Pay}
                            alt="history"
                            onClick={() => Navigate(`/history`)}
                          />
                          <p className="text-xs mt-2 text-center">History</p>
                        </button>
                        <button>
                          {" "}
                          <img
                            className="w-12 mx-2"
                            src={User}
                            alt="account"
                            onClick={() => Navigate(`/setting`)}
                          />
                          <p className="text-xs mt-2 text-center">Account</p>
                        </button>
                      </div>
                    </div>
                    <Card.Header className="mt-3">
                      <p className="font-[poppins]">Recent Activity</p>
                      <div className="font-light text-sm font-[poppins] ">
                      {products && products.slice(0,3).map((item //tanpa return gunakan kurung biasa
                      ) => (

                          <CardHistory
                              firstName={item.orderType} 
                              bills={item.totalPrice} 
                              merch={moment(item.createdDate).format("ddd, hA")} 
                              onClick={item.invoiceId}/>
                          )
                        )}
                      </div>
                    </Card.Header>
                  </Card.Header>
                </Card>
              </Card>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
