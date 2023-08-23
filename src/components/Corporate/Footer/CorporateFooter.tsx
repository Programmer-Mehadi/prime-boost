import corporateWhiteLogo from "../../../assets/logo/corporate-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CorporateFooter = () => {
  return (
    <footer className="py-16 px-8 bg-MidNight text-white">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[2fr,3fr] gap-y-16 gap-x-10 font-NunitoSans">
        {/* left */}
        <div>
          <img src={corporateWhiteLogo} alt="" />
          <p className="text-[#FDFDFD] text-[20px] max-w-[341px] mt-6 font-NunitoSans">
            2021 Award winning Vaccination and Lorem ipsum dolor sit amet
          </p>
          <div className="mt-6 flex gap-3">
            <div className="bg-ReddishOrange cursor-pointer h-[40px] w-[40px] p-1 py-2 rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-full h-full" icon={faFacebookF} />
            </div>
            <div className="bg-ReddishOrange cursor-pointer h-[40px] w-[40px] p-1 py-2 rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-full h-full" icon={faTwitter} />
            </div>
            <div className="bg-ReddishOrange cursor-pointer h-[40px] w-[40px] p-1 py-2 rounded-full flex justify-center items-center">
              <FontAwesomeIcon className="w-full h-full" icon={faInstagram} />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="grid gap-4">
            <span className=" text-white text-[20px] font-[700] mb-2">
              Location
            </span>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              America
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Asia
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Europe
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Africa
            </a>
          </div>
          <div className="grid gap-4">
            <span className=" text-white text-[20px] font-[700] mb-2">
              Contact
            </span>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              About Us
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Teams
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Profile
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              FAQ
            </a>
          </div>
          <div className="grid gap-4">
            <span className=" text-white text-[20px] font-[700] mb-2">
              Legals
            </span>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Privacy
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Disclaimer
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Terms
            </a>
            <a className="link link-hover text-lg leading-[180%] font-NunitoSans">
              Company
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
