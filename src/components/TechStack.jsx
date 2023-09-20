import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import git from "../assets/git.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    
    
    // {
    //   id: 7,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="TechStack"
      className=" pt-28 bg-gradient-to-b from-gray-800 to-black w-full h-screen tech-stack-section "
    >
      <div className="py-3 max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stack
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 text-center py-4 sm:py-8 px-4 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 p-4 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
