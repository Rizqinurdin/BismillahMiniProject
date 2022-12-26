import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const CardHistory = ({firstName, bills, merch, onClick}) => {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 justify-items-center bg-utama h-32 place-items-center">
      <div
        className="bg-white w-3/5 text-center
        rounded-lg font font-[poppins] text-sm font-semibold"
      >
        <div
          className="hover:bg-utama hover:ring-2 hover:ring-white py-3
          rounded-lg hover:text-white ring-2 ring-kedua shadow-xl shadow-kedua"
        >
          <div className="grid grid-flow-col grid-cols-5 items-center grid-rows-2" onClick={() => navigate(`/invoice/${onClick}`)}>
            <div className=" col-span-1 row-span-2 ml-3">
              <AiFillCaretLeft />
            </div>
            <div className=" col-span-2 row-span-1 text-left">
              {firstName}
            </div>
            <div className=" col-span-2 row-span-1 text-left">Rp. {bills}</div>
            <div className=" col-span-2 row-span-2 text-right mr-3">{merch}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
