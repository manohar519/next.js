// components/ExploreServices.js
import ServiceCard from "./serviceCard";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "CompanyFormation",
  },
  {
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "CompanySecretarialServices",
  },
  {
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: "VirtualOfficeAddress",
  },
  {
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
    icon: "AnnualComplianceServices",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: "PayrollServices",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Steering user behaviours with creative design, data insights & technology.",
    icon: "BookkeepingServices",
  },
];

const ExploreServices = () => {
  return (
    <div className="py-16 px-8">
      <p className="text-yellow-400 text-center">WELCOME TO REGISTERKARO.IN</p>
      <h2 className="text-center text-3xl font-bold text-black">
        Explore Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-[#2e1e78] text-white px-6 py-3 rounded-md">
          See All Services
        </button>
      </div>
    </div>
  );
};
export default ExploreServices;
