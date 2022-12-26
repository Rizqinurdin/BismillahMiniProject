import React from "react";
import Logo from "./imgs/loops-logo.png";
import Background from "./imgs/e-wallet.jpg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";


const Login = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/home")
    }
  }, [])


  const handleLogin = async () =>{

    let result = await fetch("http://localhost:8080/api/user/login",{
      method: 'post',
      body: JSON.stringify({email, password}),
      
      headers: {
        'Content-Type': 'application/json'
      }
    });
      result = await result.json();
      console.log(result)

    if(result.valid === "User Login Success"){
      localStorage.setItem('user', JSON.stringify(result))
      localStorage.setItem('Id', JSON.stringify(result.userId))
      localStorage.setItem('userEmail', email)
      new Swal({title:"Success!",
      text:"Login Success!",
      type:"Success",
      timer:15000})
      window.location.href = "/home";
      // navigate("/home");
    }else{
      new Swal("Input A valid Login Credentials")
    }
  }

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800 ">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src={Background}
                className="w-full"
                alt="e-wallet illustration"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <img className="h-20 mx-auto" src={Logo} alt="loops-logo" />
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0 text-xl">
                    Welcome
                  </p>
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal invalid:focus:ring-red-700 invalid:text-red-700 invalid:focus:border-red-700 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center mb-6"></div>

                <div className="text-center lg:text-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="./register"
                      className=" hover:text-green-500 focus:text-green-500 transition duration-200 ease-in-out"
                    >
                     <span></span> Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
