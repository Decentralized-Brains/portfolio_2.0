import { IoMdArrowDropright } from "react-icons/io";
import TeamModal from "./TeamModal";
import React, { useState } from "react";
import { TeamModalData } from "./Data.jsx";

const TeamCard = ({ data }) => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [teamData, setTeamModalData] = useState({});

  //scroll lock when modal is open
  showTeamModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const setData = (id) => {
    let obj = TeamModalData.filter((data) => data.id === id).pop();
    setTeamModalData(obj);
  };

  const handleOnCloseTeam = () => setShowTeamModal(false);

  const { img, name, alt, title, id } = data;
  return (
    <div className="max-w-[400px] text-center relative overflow-hidden group">
      <img
        className="w-[200px] h-[200px] rounded-full object-cover mx-auto mb-4"
        src={img}
        alt={alt}
      />
      <h3 className="text-white text-xl">{name}</h3>
      <p className="text-gray-200">{title}</p>

      <div
        key={id}
        onClick={() => {
          setShowTeamModal(true);
          setData(id);
        }}
        className="flex cursor-pointer justify-center items-center text-gray-400 hover:text-blue-400"
      >
        <p>Show details</p>
        <div className="text-center h-full text-[1.5rem]">
          <IoMdArrowDropright />
        </div>
      </div>
      <TeamModal
        onClose={handleOnCloseTeam}
        visible={showTeamModal}
        teamData={teamData}
      />
    </div>
  );
};

export default TeamCard;
