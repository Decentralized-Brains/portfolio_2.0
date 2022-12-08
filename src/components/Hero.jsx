import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import "../App.css";

import HeroImage from "../assets/img/hero.jpg";
import Upwork from "../assets/img/upwork.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hidden opacity-70 items-center justify-center px-16 lg:flex">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-[200px] -left-[400px] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[300px] -right-[220px] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[200px] left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="relative container min-h-screen grid place-items-center md:grid-cols-2 border-b border-gray-300/30">
        <div className="h-[90px] md:hidden"></div>
        <div className="mt-[4rem]">
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
              <a href="#projects">Our Projects</a>
              <AiOutlineArrowRight />
            </button>
            <a
              href="https://www.upwork.com/freelancers/~016193c56808f69e07"
              target="_blank"
              className="w-[120px] bg-white hover:bg-purple-200 duration-300 grid place-items-center px-3 rounded-md"
            >
              <img src={Upwork} alt="" />
            </a>
          </div>
          <div className="flex pt-6 gap-4 text-xl">
            <a
              className="text-white hover:text-purple-600 duration-200"
              href="https://wa.me/+8801750352163"
              target="_blank"
            >
              <BsWhatsapp />
            </a>
            <a
              className="text-white hover:text-purple-600 duration-200 text-2xl -mt-[2px]"
              href="https://share.streak.com/BlBBkOevxGmgGuobOXUGxI"
              target="_blank"
            >
              <HiMail />
            </a>
            <a
              className="text-white hover:text-purple-600 duration-200"
              href="https://t.me/iampritom"
              target="_blank"
            >
              <BsTelegram />
            </a>
          </div>
          <div className="flex mt-10 xl:mt-[50px] justify-start">
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
        <div className="mt-[4rem] md:pt-0">
          <img
            className="w-full max-w-[500px] border-2 border-purple-500 p-4 rounded-xl mb-4 md:mb-0"
            src={HeroImage}
            alt="space_hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
