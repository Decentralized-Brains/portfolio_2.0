import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const NavLinks = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/#about",
    },
    {
      id: 3,
      text: "Skills",
      url: "/#skills",
    },
    {
      id: 4,
      text: "Projects",
      url: "/#projects",
    },
    {
      id: 5,
      text: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[80px] z-[100] shadow-lg bg-black/70 border-b border-gray-300/30  backdrop-blur-xl"
          : "fixed w-full h-[90px] z-[100]"
      }
    >
      <div className="container mx-auto flex w-full h-full justify-between items-center">
        {/* <h2 className="text-white text-2xl lg:text-3xl">
          Decentralized
          <span className="text-Emerald-600 dark:text-purple-500"> Brains</span>
        </h2> */}
        <img src={Logo} className="w-[200px]" alt="" />

        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-4 xl:gap-8">
            {NavLinks.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="text-white text-lg font-semibold hover:text-purple-500 hover:border-b duration-300">
                  {data.text}
                </li>
              </a>
            ))}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#18064e] left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className=" dark:text-white text-3xl">
                Decentralized
                <span className="text-purple-600 dark:text-purple-400">
                  {" "}
                  Brains
                </span>
              </h2>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul className="uppercase">
              {NavLinks.map((data) => (
                <a href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-100">
                    {data.text}
                  </li>
                </a>
              ))}
            </ul>
            <div>
              <p className="uppercase font-bold tracking-widest text-sky-400">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 max-w-[250px]">
                <div className="text-purple-500">
                  <FaLinkedinIn />
                </div>
                <div className="text-purple-500">
                  <FaGithub />
                </div>
                <div className="text-purple-500">
                  <AiOutlineMail />
                </div>
                <div className="text-purple-500">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
