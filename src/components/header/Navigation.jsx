import React from "react";
import "../../assets/styleHeader.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "./../../assets/logo/logo.svg";
import { useState } from "react";
import { Dropdown, Button } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";

const Navigation = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  const Navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    Navigate("/");
  };

  const items = [
    {
      key: "1",
      label: <button onClick={() => Navigate(`/setting`)}>My Account</button>,
    },
    {
      key: "2",
      label: <button onClick={logout}>Log Out</button>,
    },
  ];


  const [user, setUser] = useState({});

  const localId = localStorage.getItem("Id");

  const fetchProduct = async () => {
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
    fetchProduct();
  }, []);


  return (
    <>
      <section className="navBarSection h-20">
        <header className="header flex">
          <div className="logoDiv">
            <img className="w-20 ml-10" src={logo} alt="logo" />
          </div>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <button className="navLink" onClick={() => Navigate(`/home`)}>
                  Beranda
                </button>
              </li>
              <li className="navItem">
                <button
                  className="navLink"
                  onClick={() => Navigate(`/payment`)}
                >
                  Payment
                </button>
              </li>
              <li className="navItem">
                <button className="navLink" onClick={() => Navigate(`/promo`)}>
                  Promo
                </button>
              </li>
              <li className="navItem">
                <button
                  className="navLink"
                  onClick={() => Navigate(`/history`)}
                >
                  History
                </button>
              </li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <Button className="bg-green-600 text-white">
                  Hi {user.name}
                </Button>
              </Dropdown>
            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toogleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Navigation;
