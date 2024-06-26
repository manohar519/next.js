import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import logo from "/public/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import HeroSection from "./heroSection";
const Header = () => {
  return (
    <div>
      <div class=" bg-[#1C4670] h-11 w-full  flex flex-wrap justify-end items-center grid-cols-3 divide-x divide-gray-400 ">
        <div className="flex flex-wrap justify-end items-center">
          {" "}
          <IoMdMail color="white" />
          <p className="text-white p-2">www.registerkaro.in</p>
        </div>
        <div className="flex flex-wrap justify-end items-center">
          {" "}
          <FaPhone color="white" />{" "}
          <p className="text-white p-2">+ 9908816733</p>
        </div>
        <div className="flex flex-wrap justify-end items-center gap-2">
          <IoLogoInstagram color="white" />
          <MdFacebook color="white" />
          <FaTwitter color="white" />
          <FaPinterest color="white" />
        </div>
      </div>
      {/* <div className="bg-[#1C4670] h-11 w-full flex justify-end items-center  gap-2">
       
      </div> */}
      <div className="flex flex-wrap justify-between items-center py-3">
        <Image src={logo} width={150} height={100} alt="Logo" />
        <div className="flex flex-wrap justify-around gap-6">
          <p>Home</p>
          <p>Our Services</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <CiSearch style={{ height: "30px", width: "50px" }} />
          <button className="h-8 w-32 bg-orange-400 text-white">
            Talk An Expert
          </button>
        </div>
      </div>
      <div>
        <HeroSection />
      </div>
    </div>
    // style="background: linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%);"
  );
};

export default Header;
