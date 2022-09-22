import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="container text-center py-12" id="projects">
      <h2 className="text-white mb-1">Our Projects</h2>
      <p className="text-orange-500">See what we have done so far!</p>
      <div className="py-10 grid md:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
