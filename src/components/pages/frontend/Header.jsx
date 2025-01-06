import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="text-white items-center text-center justify-center">
          <ul className="flex gap-10 items-center text-lg text-center justify-center h-20 relative">
            <li
              className="btn-animate border border-white rounded-full px-10 cursor-pointer py-2"
              data-text="Home"
            >
              Home
            </li>
            <li
              className="btn-animate border border-white rounded-full px-10 cursor-pointer py-2"
              data-text="About"
            >
              About
            </li>
            <li
              className="btn-animate border border-white rounded-full px-10 cursor-pointer py-2"
              data-text="Skill"
            >
              Skill
            </li>
            <li
              className="btn-animate border border-white rounded-full px-10 cursor-pointer py-2"
              data-text="Contact"
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
