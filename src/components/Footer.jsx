import React from "react";
import Logo from "../assets/img/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const NavLinks = [
    {
      id: 1,
      text: "Home",
      url: "/#",
    },
    {
      id: 2,
      text: "About",
      url: "/#about",
    },
    {
      id: 3,
      text: "Projects",
      url: "/#projects",
    },
    {
      id: 4,
      text: "Services",
      url: "/#servies",
    },
    {
      id: 5,
      text: "Team",
      url: "/#team",
    },
    {
      id: 6,
      text: "Contact",
      url: "/#contact",
    },
  ];
  return (
    <div className=" bg-black bg-opacity-20" id="contact">
      <div
        className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row justify-around items-center py-10 border-b
       border-opacity-50 border-white"
      >
        <a href="/#">
          <img src={Logo} alt="Logo" className="w-[200px]" />
        </a>
        <div>
          <ul className="flex flex-row justify-center md:flex-col gap-2 text-white flex-wrap">
            <p className="border-b font-bold">Links</p>
            {NavLinks.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="text-white text-base hover:text-purple-500 hover:border-b duration-300">
                  {data.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-white">Newsletter</p>
          <div className="relative">
            <form action="">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[300px] bg-transparent py-2 border-b boder-white outline-none text-white"
              />
            </form>
            <AiOutlineArrowRight className="text-white absolute top-[30%] left-[90%] cursor-pointer hover:translate-x-1" />
          </div>
          <p className="font-bold text-white py-2">Contact with us</p>
          <div className="flex gap-4 text-xl">
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
        </div>
      </div>
      <div className="flex justify-center items-center py-8 text-white">
        <p>Copyright © Decentralized Brains | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
