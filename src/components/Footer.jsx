import "../App.css";

const Footer = () => {
  return (
    <div id="contact" className="px-4 md:px-0">
      <div className="h-[100px]"></div>
      <div className="container bg-gradient-to-r from-[#4307e7] to-[#ab17df] p-20 rounded-xl footer">
        <p className="text-orange-400">NEWSLETTER</p>
        <h2 className="text-white">Join Our Newsletter</h2>
        <p className="text-gray-300 pt-2 pb-4">Get all updates of our site.</p>
        <div className="md:flex gap-2">
          <input
            type="text"
            placeholder="Email address"
            className="rounded-md px-3 focus:outline-none"
          />
          &nbsp; <button className="shadow-xl mt-4 md:mt-0">Subscribe</button>
        </div>
      </div>
      <div className="container py-10">
        <p className="text-gray-400">
          Copyright © Decentralized Brains | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
