import { imgPath } from "@/components/helpers/functions-general";
import { FaInstagram, FaFacebook, FaPhoneAlt, FaBiking } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="flex gap-20 items-center justify-center">
          <div>
            <h1 className="text-5xl mb-5">
              Im <span className="font-bold">Rai Vince</span>
            </h1>{" "}
            <p className="text-2xl">Find me on</p>
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
          </div>
          <div>
            <img
              src={`${imgPath}/budi.jpg`}
              alt=""
              className="h-[821px] object-cover"
            />
          </div>
        </div>

        <div className="about-me px-20 mt-20">
          <h1 className="text-5xl mb-5 font-bold text-center">About</h1>
          <p className="text-2xl text-justify  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            fuga ad itaque quibusdam atque hic quaerat commodi, architecto
            provident iure accusantium vel cupiditate eos sit exercitationem
            tempora? Necessitatibus at accusamus dolor obcaecati provident
            nesciunt quis quo! Non laborum expedita repudiandae eligendi porro
            officiis beatae rerum tempore, voluptatum, adipisci sequi nobis.
          </p>
        </div>

        <div className="expi mt-20 px-10">
          <h1 className="text-5xl text-center mb-10">What I Do</h1>
          <div className="grid grid-cols-4 gap-5">
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
            <div
              className="card border border-opacity-50 border-slate-500 
            px-5 py-5 max-w-[350px] shadow-2xl rounded-md cursor-pointer
             hover:border-gray-400 hover:shadow-slate-700"
            >
              <FaBiking size={30} fill="red" />
              <h2 className="font-bold text-2xl">Lorem, ipsum.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                doloremque.
              </p>
            </div>
          </div>
        </div>

        <div className="skills mt-20">
          <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>
          <div className="skill-card">
            <div className="flex gap-10 justify-center">
              <div className="flex flex-col gap-10">

                <img src={`${imgPath}/as.png`} alt="" />
                <img src={`${imgPath}/lp.png`} alt="" />
              </div>
              <div className="flex flex-col gap-10">
                <img src={`${imgPath}/page.jpg`} alt="" />
                <img src={`${imgPath}/pw.png`} alt="" />
              </div>
              <div className="flex flex-col gap-10">

                <img src={`${imgPath}/quiz.png`} alt="" />
                <img src={`${imgPath}/Social_media.png`} alt="" />
              </div>
            </div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
