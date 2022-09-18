import CardImg from "../assets/img/card.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = () => {
  return (
    <div className="max-w-[400px] bg-[#191525] p-4 rounded-xl">
      <img className="w-full rounded-lg" src={CardImg} alt="" />
      <h3 className="mt-2 text-white text-2xl">DoRac</h3>
      <p className="text-gray-300">
        DoRac is a metaverse space crypto play-to-earn game that will offer a
        few ways on how you as a player or just a visitor can participate in the
        metaverse.
      </p>
      <button className="mt-2 mx-auto">
        Live Preview <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Card;
