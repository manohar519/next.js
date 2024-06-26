"use client";
import { useState } from "react";
import { TbDeviceDesktopCancel } from "react-icons/tb";
import { MdLightbulbCircle } from "react-icons/md";
import women from "/public/images/women.png";
import Image from "next/image";
import background from "/public/images/background.png";
import { IoLogoYoutube } from "react-icons/io";
export default function Video() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-4">
      <div className="max-w-6xl w-full p-4 rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Our Video Introductions
          </h2>
          <p className="text-gray-300 mb-6">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="flex items-start mb-4">
            <MdLightbulbCircle className="text-6xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-white text-xl font-semibold">
                Explore ideas together
              </h3>
              <p className="text-gray-300">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <TbDeviceDesktopCancel className="text-6xl text-yellow-500 mr-4" />
            <div>
              <h3 className="text-white text-xl font-semibold">
                Bring those ideas to life
              </h3>
              <p className="text-gray-300">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-64 md:h-auto">
            <div
              className="relative w-full max-w-md mx-auto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
                 <Image className="p-10" src={background} alt="Workplace" width="600" />
                 <Image className="cursor-pointer absolute top-0 left-0  hover:shadow-outline" src={women} width="600" />
              
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <IoLogoYoutube className="text-5xl text-red-500"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
