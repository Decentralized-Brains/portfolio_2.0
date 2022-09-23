import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../App.css";

import HeroImage from "../assets/img/hero.jpg";
import Upwork from "../assets/img/upwork.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container min-h-screen grid place-items-center md:grid-cols-2 border-b border-gray-300/30">
        <div className="h-[90px] md:hidden"></div>
        <div className="mt-6">
          <h1 className="text-white xl:text-[64px]">
            Want to adopt <span className="text-orange-400">Blockchain</span>?
            You're in the right place!
          </h1>
          <p className="text-gray-400 py-6 text-lg">
            Interested in using blockchain in your business? We provide
            customized blockchain services to help organizations and startups
            quickly integrate and deploy blockchain technology
          </p>
          <div className="flex gap-4">
            <button>
              Our Projects <AiOutlineArrowRight />
            </button>
            <a
              href="#"
              className="w-[120px] bg-white hover:bg-purple-200 duration-300 grid place-items-center px-3 rounded-md"
            >
              <img src={Upwork} alt="" />
            </a>
          </div>
          <div className="flex mt-10 xl:mt-[100px] justify-start">
            <div className="text-center border-r border-gray-600 pr-6">
              <h2 className="text-white">613+</h2>
              <p className="text-gray-300 mt-2">Freelancing Project</p>
            </div>
            <div className="text-center border-r border-gray-600 px-6">
              <h2 className="text-white">14+</h2>
              <p className="text-gray-300 mt-2">Blockchain Projects</p>
            </div>
            <div className="text-center px-6">
              <h2 className="text-white">342+</h2>
              <p className="text-gray-300 mt-2">Happy Client</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:pt-0">
          <img
            className="w-full max-w-[500px] border-2 border-purple-500 p-4 rounded-xl mb-4 md:mb-0"
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
