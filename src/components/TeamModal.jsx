import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

const TeamModal = ({ visible, onClose, teamData }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-y-scroll"
    >
      <div className="bg-black bg-opacity-70 mt-[300px] md:mt-20 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:p-6 border-2 border-blue-400 overflow-auto">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 justify-around ">
          <div className="w-full md:w-1/2">
            <div>
              <img
                src={teamData.img}
                className="h-full w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-justify flex flex-col justify-between gap-y-4 md:gap-y-0">
            <p className="text-blue-400 text-sm md:text-base">
              {teamData.description}
            </p>

            <div className="text-purple-400 gap-x-2 font-bold">
              Current Role: <span>{teamData.role}</span>
            </div>
            <div className="text-yellow-400">
              Skills:
              <div className="grid grid-cols-2 justify-between grid-flow-row gap-x-3 text-sm md:text-base">
                {teamData?.s1 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s1}
                  </div>
                )}
                {teamData?.s2 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s2}
                  </div>
                )}
                {teamData?.s3 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s3}
                  </div>
                )}
                {teamData?.s4 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s4}
                  </div>
                )}
                {teamData?.s5 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s5}
                  </div>
                )}
                {teamData?.s6 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s6}
                  </div>
                )}
                {teamData?.s7 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s7}
                  </div>
                )}
                {teamData?.s8 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s8}
                  </div>
                )}
                {teamData?.s9 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s9}
                  </div>
                )}
                {teamData?.s10 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s10}
                  </div>
                )}
                {teamData?.s11 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s11}
                  </div>
                )}
                {teamData?.s12 && (
                  <div className="flex justify-start items-center gap-x-2">
                    {<RiCheckboxCircleLine />}
                    {teamData.s12}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex justify-center items-center "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
