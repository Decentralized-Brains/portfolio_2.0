import { MemberesData } from "./Data";
import TeamCard from "./TeamCard";
import "../App.css";

const Team = () => {
  return (
    <div className="TeamSection" id="team">
      <div className="container text-center py-12 mt-10">
        <p className="text-orange-500">TEAM</p>
        <h2 className="text-white mb-1">Meet Our Team</h2>
        <p className="text-gray-400 mt-2 mb-12">
          We are a young and energetic team of enthusiastic professionals who
          believe in innovattion!
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-4 place-items-center">
          {MemberesData.map((data) => (
            <TeamCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
