import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import api from "../../services/api"
import axios from "axios";

import Navigation from "../../components/header/Navigation";
import Swal from "sweetalert2";

const Setting = () => {

  // const Navigate = useNavigate();

  const [user, setUser] = useState({});

  const localId = localStorage.getItem("Id")
  const localEmail = localStorage.getItem("userEmail")

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
  }, []);

  const [userAddress, setuserAddress] = useState('');
  const [PhoneNum, setPhoneNum] = useState('');
  const [userAddressA, setuserAddressA] = useState('');
  const [userPovince, setuserPovince] = useState('');
  const [userCity, setuserCity] = useState('');
  const [userCountry, setuserCountry] = useState('');
  const [userPostCode, setuserPostCode] = useState('');

  const name = localStorage.getItem("Name")
  const mail = localStorage.getItem("userEmail")

  const addRegis = e => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/user/update/${localId}`, {

      name: name,
      email: mail,
      phoneNumber: PhoneNum,
      address: userAddress,
      addressAlter: userAddressA,
      province: userPovince,

      cities: userCity,
      postalCode: userPostCode,
      country: userCountry,

    })
    .then(function (response) {
      console.log(response);
      new Swal({title:"Success!",
      text:"Update Success!",
      type:"Success",
      timer:15000})
      window.location.href = "/setting"

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <h1 className="text-2xl mt-3">My Account</h1>
        <p>Update your current profile</p>
      </div>
      <div className="dashboard-content mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="">
                <div className="card">
                  <div className="card-body bg-slate-100">
                    <div className="row mb-12">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            // value={"Muhammad Farizqi Nurdin"}
                            placeholder={user.name}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            // value={"rizqi.ndin27@gmail.com"}
                            placeholder={user.email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="addressOne">Address 1</label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressOne"
                            name="addressOne"
                            // value={"Jalan Gunung Tambora III"}
                            placeholder={user.address}
                            onChange={e => setuserAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="addressTwo">Address 2 </label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressTwo"
                            name="addressTwo"
                            // value={"Jalan Gunung Jaya Wijaya"}
                            placeholder={user.addressAlter}
                            onChange={e => setuserAddressA(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="provinces">Provinces</label>
                          <input
                            type="text"
                            className="form-control"
                            id="provinces"
                            name="provinces"
                            // value={"West Sumatera"}
                            placeholder={user.province}
                            onChange={e => setuserPovince(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="cities">Cities</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cities"
                            name="cities"
                            // value={"Padang"}
                            placeholder={user.cities}
                            onChange={e => setuserCity(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div className="form-group">
                          <label htmlFor="postalCode">Postal Code</label>
                          <input
                            name="post"
                            id="post"
                            className="form-control"
                            placeholder={user.postalCode}
                            onChange={e => setuserPostCode(e.target.value)}
                          />

                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            // value={"Indonesia"}
                            placeholder={user.country}
                            onChange={e => setuserCountry(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-2">
                        <div className="form-group">
                          <label htmlFor="mobile">Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            // value={"+62 821 7205 6024"}
                            placeholder={user.phoneNumber}
                            onChange={e => setPhoneNum(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <button
                  type="submit"
                  className="btn btn-success bg-green-700 hover:bg-green-500 px-5"
                  onClick={addRegis}
                >
                  Save Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
