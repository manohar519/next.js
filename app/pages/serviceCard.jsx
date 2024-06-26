// components/ServiceCard.js
import { MdOutlineSettingsBrightness } from "react-icons/md";
import { TbDeviceImacSearch } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { TbShoppingCartDollar } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const icons = {
  CompanyFormation: MdOutlineSettingsBrightness,
  CompanySecretarialServices: TbDeviceImacSearch,
  VirtualOfficeAddress: TbUsersGroup,
  AnnualComplianceServices: GrServices,
  PayrollServices: TbShoppingCartDollar,
   BookkeepingServices: GrAnnounce,
};

const ServiceCard = ({ title, description, icon }) => {
  const IconComponent = icons[icon];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <IconComponent className="text-yellow-500 w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-black-500 hover:underline flex items-center gap-2 font-bold">
        Learn more <FaRegArrowAltCircleRight/>
      </a>
    </div>
  );
};

export default ServiceCard;
