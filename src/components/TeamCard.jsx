const TeamCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div className="max-w-[400px] text-center">
      <img
        className="w-[200px] h-[200px] rounded-full object-cover mx-auto mb-4"
        src={img}
        alt=""
      />
      <h3 className="text-white text-xl">{name}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default TeamCard;
