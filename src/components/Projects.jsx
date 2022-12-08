import React from "react";
import Card from "./Card";
import { ProjectData } from "./Data";

const Projects = () => {
  return (
    <div className="container text-center py-12" id="projects">
      <h2 className="text-white mb-1">Our Projects</h2>
      <p className="text-orange-500">See what we have done so far!</p>
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        {ProjectData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
