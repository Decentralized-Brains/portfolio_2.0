const TeamCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div className="max-w-[400px] text-center relative overflow-hidden group">
      <img
        className="w-[200px] h-[200px] rounded-full object-cover mx-auto mb-4"
        src={img}
        alt=""
      />
      <h3 className="text-white text-xl">{name}</h3>
      <p className="text-gray-400">{title}</p>
      <div className="w-full  absolute bottom-0 translate-y-[150%] group-hover:translate-y-0 duration-300">
        <div className="bg-black/80 backdrop-blur-lg p-2 rounded-lg border border-gray-400/20">
          <h3 className="text-gray-200">{name}</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            ratione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
