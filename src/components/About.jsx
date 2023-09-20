import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hey there, I'm Utkarsh, a Front-End Dev geeking out over web stuff. Armed with HTML, CSS, JavaScript, TypeScript, and React.js, I'm on a mission to create pixel-perfect, user-friendly interfaces.
        </p>

        <br />

        <p className="text-xl py-4">
        I've got a secret sauce called Tailwind CSS for making designs pop and Git/GitHub for keeping my code game strong. When I'm not lost in code, I'm probably exploring new tech, geeking out on open-source projects, or writing some blogs on Hashnode.
        </p>
        
        <br />

        <p className="text-xl">
        Let's team up and turn your web dreams into reality. Drop me a line, and let's start the coding adventure!
        </p>
      </div>
    </div>
  );
};

export default About;