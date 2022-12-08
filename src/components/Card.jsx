import { AiOutlineArrowRight } from "react-icons/ai";
import MyModal from "./MyModal";
import React, { useState } from "react";
import { modal } from "./Data.jsx";

const Card = ({ data }) => {
  const [showMyModal, setShowMyModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const setData = (id) => {
    let obj = modal.filter((data) => data.id === id).pop();
    setModalData(obj);
  };

  //scroll lock when modal is open
  showMyModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handleOnClose = () => setShowMyModal(false);

  const { alt, thumbnail, title, id } = data;
  return (
    <div className="max-w-[400px] bg-gradient-to-l from-[#4e10ff] to-[#ab17df] p-[1.2px] rounded-xl">
      <div className=" h-full bg-[#191525] rounded-xl p-5">
        {/* <img className="w-full rounded-lg" src={CardImg} alt="" /> */}
        <img
          className="w-full rounded-lg h-[180px]"
          src={thumbnail}
          alt={alt}
        />

        <h3 className="mt-2 text-white text-2xl">{title}</h3>
        <div key={id}>
          <button
            onClick={() => {
              setShowMyModal(true);
              setData(id);
            }}
            className="mt-4 mx-auto"
          >
            Show details <AiOutlineArrowRight />
          </button>
        </div>

        <MyModal
          onClose={handleOnClose}
          visible={showMyModal}
          modalData={modalData}
        />
      </div>
    </div>
  );
};

export default Card;
