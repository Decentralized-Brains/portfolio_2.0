import React, { useState } from "react";

const MyModal = ({ visible, onClose, modalData }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center overflow-auto"
    >
      <div className=" bg-black bg-opacity-70  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mt-12">
        <div className="mx-auto max-w-md">
          <video
            className="w-full rounded-lg"
            src={modalData.thumbnail}
            autoPlay
            loop
            muted
          />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-4 text-xl font-bold leading-7 text-gray-300">
              {modalData.title}
            </div>
            <div className="space-y-6 py-4 text-base leading-7 text-white">
              <p>{modalData.description}</p>
            </div>
            <div className=" py-4 text-start text-base font-bold leading-7 text-gray-300">
              {modalData?.figma && <p>Design : {modalData.figma}</p>}
              {modalData?.develop && (
                <p>Frontend Development : {modalData.develop}</p>
              )}
              {modalData?.backend && <p>Backend : {modalData.backend}</p>}
              {modalData?.smartContract && (
                <p>Smart Contract : {modalData.smartContract}</p>
              )}
            </div>

            <div className="pt-4 text-base font-semibold leading-7 flex justify-between">
              <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a href={modalData.url} target="_blank">
                    Live Demo
                  </a>
                </span>
              </button>

              <button
                onClick={onClose}
                className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Close
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
