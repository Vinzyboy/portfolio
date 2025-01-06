import { imgPath } from "@/components/helpers/functions-general";
import { FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
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
            </h1>
            <ul className="flex gap-5 mb-5">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <SiGmail />
              </li>
              <li>
                <FaPhoneAlt />
              </li>
            </ul>
            <button className="btn-animate" data-text="Contact Me">
              Contact Me
            </button>
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

        <div className="skills mt-20">
          <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>
          <div className="skill-card">
            <div className="grid grid-cols-3 gap-5">
              <img src={`${imgPath}/as.png`} alt="" />
              <img src={`${imgPath}/lp.png`} alt="" />
              <img src={`${imgPath}/page.jpg`} alt="" />
              <img src={`${imgPath}/pw.png`} alt="" />
              <img src={`${imgPath}/quiz.png`} alt="" />
              <img src={`${imgPath}/Social_media.png`} alt="" />
            </div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>

              <div className="expi">
                  <h1 className="text-5xl text-center">Experience</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
