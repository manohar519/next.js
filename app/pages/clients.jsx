import React from 'react';
import { FaShopify, FaDropbox, FaPinterest, FaGitlab, FaFigma, FaAtlassian, FaTrello, FaSketch } from 'react-icons/fa';
import { SiTwilio, SiAsana, SiHeroku, SiMicrosoft, SiNotion, SiAirtable, SiClickup, SiDeliveroo, SiGithub ,SiUdemy} from 'react-icons/si';
import { FiSunrise } from 'react-icons/fi';
import { SiMailchimp } from "react-icons/si";
import { TbBrandMonday } from "react-icons/tb";

const ClientsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
         <title>Happy Clients</title>
         {/* <link rel="icon" href="/favicon.ico" /> */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Happy Clients</h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-700">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
          <FaShopify className="text-5xl text-green-500" />
          <FaDropbox className="text-5xl text-blue-600" />
          <FaPinterest className="text-5xl text-red-600" />
          <FaGitlab className="text-5xl text-orange-600" />
          <FaFigma className="text-5xl text-purple-500" />
          <FaAtlassian className="text-5xl text-blue-500" />
          <FaTrello className="text-5xl text-blue-400" />
          <FaSketch className="text-5xl text-yellow-400" />
          <SiTwilio className="text-5xl text-red-500" />
          <SiAsana className="text-5xl text-pink-500" />
          <SiHeroku className="text-5xl text-purple-600" />
          <SiMicrosoft className="text-5xl text-blue-600" />
          <SiNotion className="text-5xl text-black" />
          <SiAirtable className="text-5xl text-blue-500" />
          <SiClickup className="text-5xl text-pink-500" />
          <SiDeliveroo className="text-5xl text-green-500" />
          <SiGithub className="text-5xl text-gray-800" />
          <TbBrandMonday className="text-5xl text-red-500" />
          <FiSunrise className="text-5xl text-yellow-500" />
          <SiUdemy className= "text-5xl text-blue-500"/>
          <SiMailchimp className="text-5xl text-black-400" />
        </div>
        <div className="mt-8">
          <a href="#" className="text-blue-500 hover:underline">Show more &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
