import React from 'react'
import { FaGithub, FaLinkedin, FaHashnode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

function Footer() {
  return (
    <div className=' py-12 bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className="flex justify-center items-center gap-8 p-4 my-4 bg-gradient from-black to-gray-800">

<div className=" p-3 hover:bg-gray-500 rounded-md text-white duration-200 hover:scale-110">
    <button 
    onClick={() => {
      window.open("https://www.linkedin.com/in/utkarsh-krishna-3bab41240/", "_blank");
    }}>
      
      <FaLinkedin size={30}/>
    </button>
</div>

<div className="p-3 hover:bg-gray-500 rounded-md text-white duration-200 hover:scale-110 ">
    <button 
    onClick={() => {
      window.open("https://github.com/utkarshkrishna2004", "_blank");
    }}>
      
      <FaGithub size={30}/>
    </button>
</div>

<div className="p-3 hover:bg-gray-500 rounded-md text-white duration-200 hover:scale-110">
    <button 
    onClick={() => {
      window.open("https://utkarshkrishna.hashnode.dev/", "_blank");
    }}>
      
      <SiHashnode size={30}/>
    </button>
</div>

<div className=" p-3 hover:bg-gray-500 rounded-md text-white duration-200 hover:scale-110">
    <button 
    onClick={() => {
      window.open("mailto:utkarshmark14@gmail.com", "_blank");
    }}>
      
      <HiOutlineMail size={30}/>
    </button>
</div>

<div className="p-3 hover:bg-gray-500 rounded-md text-white duration-200 hover:scale-110">
    <button 
    onClick={() => {
      window.open("/resume.pdf",);
    }}>
      
      <BsFillPersonLinesFill size={30}/>
    </button>
</div>


</div>
    </div>
  )
}

export default Footer