import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      src: arrayDestruct,
      visitLink: "https://google.com",
      codeLink: "https://facebook.com",
    },
    {
      id: 2,
      src: arrayDestruct,
      visitLink: "https://twitter.com",
      codeLink: "https://linkedin.com",
    },
    
    
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-5 projects-section"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
  {myProjects.map(({ id, src, visitLink, codeLink }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-4">
      <img
        src={src}
        alt=""
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center mt-2">
        <button
          className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:bg-gray-500 rounded-md"
          onClick={() => {
            window.open(visitLink, "_blank");
          }}
        >
          Visit
        </button>
        <button
          className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:bg-gray-500 rounded-md"
          onClick={() => {
            window.open(codeLink, "_blank");
          }}
        >
          Code
        </button>
      </div>
    </div>
  ))}
</div>
    
    
      </div>
    </div>
  );
};

export default Projects;
