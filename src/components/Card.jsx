import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ data }) => {
  const { description, url, thumbnail, title } = data;
  return (
    <div className="max-w-[400px] bg-[#191525] p-4 rounded-xl">
      {/* <img className="w-full rounded-lg" src={CardImg} alt="" /> */}
      <video
        className="w-full rounded-lg"
        src={thumbnail}
        autoPlay
        loop
        muted
      />

      <h3 className="mt-2 text-white text-2xl">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <a href={url} target="_blank">
        <button className="mt-2 mx-auto">
          Live Preview <AiOutlineArrowRight />
        </button>
      </a>
    </div>
  );
};

export default Card;
