import React from "react";
import "../App.css";
import ServiceCard from "./ServiceCard";
import ServiceImg from "../assets/img/service.png";

import { servicesData } from "./Data";

const Services = () => {
  return (
    <div className="container py-20 service" id="servies">
      <p className="text-orange-500">What We Do</p>
      <h2 className="text-white mb-1">Our Core Services</h2>
      <div className="md:flex gap-8">
        <div className="grid justify-items-center md:grid-cols-2 gap-4 mt-8">
          {servicesData.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
        </div>
        <div className="hidden md:block">
          <img className="max-w-[400px]" src={ServiceImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
