// components/HeroSection.js
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { MdNotStarted } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#f0e9bd] via-[#FFF0DC]/67 to-[#EDF6FF]/70 py-16 px-8">
      <div className="absolute top-4 left-4 flex items-center">
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <span className="ml-2 font-medium text-gray-600">Google Rating</span>
        <div className="ml-2 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            Your trusted partner for compliance business needs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and other
            legal matters.
          </p>
          <div className="mt-8 flex space-x-8">
            <div className="flex items-center space-x-2">
              <RxDashboard style={{ height: "70px", width: "70px" }} />
              <div className="flex flex-col text-gradient">
                <span className="text-2xl font-semibold text-gray-800">
                  {" "}
                  4.5+
                </span>
                <span className="text-gray-600 text">CustomerRating</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gradient">
              <HiOutlineUserGroup style={{ height: "70px", width: "70px" }} />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-gray-800">
                  20,000+
                </span>
                <span className="text-gray-600">Clients</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gradient">
              <FaRegHandshake style={{ height: "70px", width: "70px" }} />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-gray-800">
                  99.8%
                </span>
                <span className="text-gray-600">FinancialStability</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex space-x-4 items-center">
            <button className="bg-sky-800 text-white px-3 py-3 rounded-md">
              Talk An Expert
            </button>
            <MdNotStarted
              color="red"
              style={{ height: "30px", width: "30px" }}
            />
            <p className="font-medium">See how it works</p>
          </div>
        </div>
        {/* <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/path/to/your/image.png"
            alt="Illustration"
            width={500}
            height={500}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
