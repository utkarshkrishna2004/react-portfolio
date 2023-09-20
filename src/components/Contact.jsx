import React from "react";
import { FaGithub, FaLinkedin, FaHashnode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ae49576b-7b5b-444b-bf01-3f68bf6f70e4"
            method="POST"
            className="flex flex-col w-full md:w-1/2 p-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        
        <div className="flex justify-center items-center gap-8 p-4 my-4">

        <div className=" p-3 hover:bg-gray-500 rounded-md duration-200 hover:scale-110">
            <button 
            onClick={() => {
              window.open("https://www.linkedin.com/in/utkarsh-krishna-3bab41240/", "_blank");
            }}>
              
              <FaLinkedin size={30}/>
            </button>
        </div>

        <div className=" p-3 hover:bg-gray-500 rounded-md duration-200 hover:scale-110">
            <button 
            onClick={() => {
              window.open("https://github.com/utkarshkrishna2004", "_blank");
            }}>
              
              <FaGithub size={30}/>
            </button>
        </div>

        <div className=" p-3 hover:bg-gray-500 rounded-md duration-200 hover:scale-110">
            <button 
            onClick={() => {
              window.open("https://utkarshkrishna.hashnode.dev/", "_blank");
            }}>
              
              <SiHashnode size={30}/>
            </button>
        </div>

        <div className=" p-3 hover:bg-gray-500 rounded-md duration-200 hover:scale-110">
            <button 
            onClick={() => {
              window.open("mailto:utkarshmark14@gmail.com", "_blank");
            }}>
              
              <HiOutlineMail size={30}/>
            </button>
        </div>

        <div className=" p-3 hover:bg-gray-500 rounded-md duration-200 hover:scale-110">
            <button 
            onClick={() => {
              window.open("/resume.pdf",);
            }}>
              
              <BsFillPersonLinesFill size={30}/>
            </button>
        </div>
        

        </div>

      </div>
    </div>
  );
};

export default Contact;
