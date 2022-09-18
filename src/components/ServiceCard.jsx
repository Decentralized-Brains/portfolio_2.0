import React from "react";

const ServiceCard = ({ data }) => {
  const { id, title, description } = data;
  return (
    <div className="max-w-[400px] bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h3 className="pb-4 text-2xl text-white">
        <span className="text-orange-400 pr-2 border-r border-gray-300/50 mr-3">
          {id}
        </span>
        {title}
      </h3>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
