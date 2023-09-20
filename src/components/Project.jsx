import React from "react";


import projectportfolio2 from "../assets/portfolio/projectportfolio2.png";
import currency from "../assets/portfolio/currency.png";
import passgenerator from "../assets/portfolio/passgenerator.png";
import counter from "../assets/portfolio/counter.png";
import solstice from "../assets/portfolio/solstice.png";
import amazon from "../assets/portfolio/amazon.png";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      src: projectportfolio2,
      visitLink: "https://utkarsh-krishna-portfolio.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/react-portfolio",
    },
    {
      id: 2,
      src: currency,
      visitLink: "https://react-currency-converter-six.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/Learning-React/tree/main/06currencyconverter",
    },
    {
      id: 3,
      src: passgenerator,
      visitLink: "https://react-password-generator-dun.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/Learning-React/tree/main/05passwordgenerator",
    },
    {
      id: 4,
      src: solstice,
      visitLink: "https://utkarshkrishna2004.github.io/Solstice-Academy/",
      codeLink: "https://github.com/utkarshkrishna2004/Solstice-Academy",
    },
    
    {
      id: 5,
      src: counter,
      visitLink: "https://learning-react-project01.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/Learning-React/tree/main/02counter",
    },
    
    {
      id: 6,
      src: amazon,
      visitLink: "https://utkarshkrishna2004.github.io/Amazon-Landing-Page-Clone/",
      codeLink: "https://github.com/utkarshkrishna2004/Amazon-Landing-Page-Clone",
    },
    
    
  ];

  return (
    <div
      name="Projects"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-5 projects-section"
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
          className="w-1/2 px-6 py-3 m-2 duration-200 border hover:scale-105 hover:bg-gray-500 rounded-md"
          onClick={() => {
            window.open(visitLink, "_blank");
          }}
        >
          Visit
        </button>
        <button
          className="w-1/2 px-6 py-3 m-2 duration-200 border hover:scale-105 hover:bg-gray-500 rounded-md"
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
