import Image from "next/image";
// import teamImage from '../public/image.png' // Place the uploaded image in the public folder with this name
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import team from "/public/images/team.png";
import curve from "/public/images/curve.png";
import dots from "/public/images/dots.png";
export default function About() {
  return (
    <div className="min-h-screen items-center justify-center bg-gray-50">
      <div className="flex justify-around">
        <div className="w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4 text-center">
            About Register Karo
          </h1>
          <p className="text-gray-700 mb-6">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
          </p>
          <p className="text-gray-700 mb-6">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>

          <div className="flex justify-center">
            <button className="bg-[#2e1e78] flex items-center gap-2 text-white px-6 py-3 rounded-md">
              <p>Learn More</p> <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <Image
          className="relative top-0 left-0"
            src={team}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div>
            <Image
            className="relative top-0 left-0"
              src={curve}
              width={30}
              height={300}
              alt="Picture of the author"
              
            />
            <Image
            // className=" absolute"
             className="absolute "
              src={dots}
              width={100}
              height={100}
              alt="Picture of the author"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}
