import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from "react-icons/fa";

export default function Choose() {
  return (
    <div className="flex flex-col bg-gray-50 p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <h2 className="text-orange-500 text-lg font-semibold">
            WHY REGISTERKARO.IN
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Register Karo
          </h1>
          <p className="text-gray-600 mb-12">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="bg-[#FEF3EF]  p-6  rounded-lg shadow-md flex flex-col items-center text-center">
          <FaShieldAlt className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Confidential & Safe</h3>
          <p className="text-gray-600">
            All your private information is safe with us
          </p>
        </div>
        <div className="bg-[#F1FBF3] p-6 w-72 h-52 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaCheckCircle className="text-4xl text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Hidden Fee</h3>
          <p className="text-gray-600">
            Everything is put before you with no hidden charges or conditions
          </p>
        </div>
        <div></div>
        <div className="bg-[#edf3ff] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaSmile className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Guaranteed Satisfaction
          </h3>
          <p className="text-gray-600">
            We ensure that you stay 100% satisfied with our offered services
          </p>
        </div>
        <div className="bg-[#fbf1fb] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaUserTie className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Expert CA/CS Assistance
          </h3>
          <p className="text-gray-600">
            Prompt support from our in-house expert professionals
          </p>
        </div>
        <div className="bg-[#f7fcf9] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FaShieldAlt className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Confidential & Safe</h3>
          <p className="text-gray-600">
            All your private information is safe with us
          </p>
        </div>
      </div>
    </div>
  );
}
