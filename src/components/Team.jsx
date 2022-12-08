import { MemberesData } from "./Data";
import TeamCard from "./TeamCard";
import "../App.css";

const Team = () => {
  return (
    <div className="TeamSection" id="team">
      <div className="hidden opacity-70 items-center justify-center px-16 lg:flex">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-[700px] -left-[400px] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[700px] -right-[200px] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-[300px] -left-[0px] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
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
