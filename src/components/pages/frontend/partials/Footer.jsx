import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="container">
              <div className="flex flex-col items-center text-center gap-2  pt-10">
                  <div className="border border-line w-full mb-5"></div>
          <div>
            <p className="text-4xl">RVJDT</p>
          </div>
          <ul className="flex gap-5 mb-5">
            <li className="border border-slate-500 rounded-md p-3 cursor-pointer  hover:border-gray-400 hover:shadow-slate-700">
              <FaFacebook />
            </li>
            <li className="border border-slate-500 rounded-md p-3 cursor-pointer  hover:border-gray-400 hover:shadow-slate-700">
              <FaInstagram />
            </li>
            <li className="border border-slate-500 rounded-md p-3 cursor-pointer  hover:border-gray-400 hover:shadow-slate-700">
              <SiGmail />
            </li>
            <li className="border border-slate-500 rounded-md p-3 cursor-pointer  hover:border-gray-400 hover:shadow-slate-700">
              <FaPhoneAlt />
            </li>
          </ul>
          <div>
            <p>Rai Vince Job D. Tejada © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
