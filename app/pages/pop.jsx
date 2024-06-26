import React from 'react';
import { FaStar } from 'react-icons/fa';

const PdfContent = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="text-gray-700">Google Rating | 1</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Your Trusted Partner for Compliance Business Needs
      </h1>
      <p className="text-gray-600 mb-4">
        An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
      </p>
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-4">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">4.5+</span>
        </div>
        <div className="flex items-center mr-4">
          <span className="text-gray-700">20,000+</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700">99.8% Customer Rating</span>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Talk to an Expert
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 ml-4 rounded">
          See How It Works
        </button>
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="w-1/2 px-2 mb-2">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Annual Compliance</h2>
          <p className="text-gray-600">Ensure your business stays compliant year-round.</p>
        </div>
        <div className="w-1/2 px-2 mb-2">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Payroll Services</h2>
          <p className="text-gray-600">Simplify your payroll process with our platform.</p>
        </div>
        <div className="w-1/2 px-2 mb-2">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Company Formation</h2>
          <p className="text-gray-600">Get your business off the ground with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default PdfContent;