import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImGoogle3 } from "react-icons/im";
const Footer = () => {
  const socialClass = `
  w-10 h-10 lg:w-12 lg:h-12 text-[#f1f1f1] text-2xl lg:text-3xl   
  rounded-full flex items-center justify-center
  `;
  return (
    <div className="mt-32 px-6 lg:px-[100px] pt-[60px] pb-[20px] lg:pt-[60px] bg-[#d8711d] relative">
      <div className="bg-white rounded-3xl w-72 lg:w-80 h-28 lg:h-32 absolute -top-16 left-1/2 -translate-x-1/2 flex items-end justify-center font-super">
        <div
          //   style={{ textShadow: "2px 2px 15px #302f2f" }}via-[#cc0579]
          className="text-[40px] lg:text-[50px] text-[#f79a30] font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          Yummy Net
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 lg:mt-8">
        <p className="lg:text-lg  lg:w-[75%] text-center text-[#f1f1f1]">
          Elevate your dining experience with our exquisite selection of gourmet
          delights. Indulge in heavenly pizzas, succulent burgers, fresh sushi,
          and comforting pasta dishes. Taste perfection with every order.
          Satisfaction guaranteed. Order now!
        </p>
        <div className="mt-7 flex gap-4">
          <div
            className={`bg-gradient-to-r from-[#e430e4] to-[#055bcc] ${socialClass}`}
          >
            <FaFacebook className="opacity-80" />
          </div>
          <div
            className={`bg-gradient-to-r from-[#2834a5] to-[#0583cc] ${socialClass}`}
          >
            <FaXTwitter className="opacity-80" />
          </div>
          <div
            className={`bg-gradient-to-r from-[#791d91] via-[#cc0579]  to-[#cc2305] ${socialClass}`}
          >
            <FaInstagram className="opacity-80" />
          </div>
        </div>
        <h1 className="mt-8 text-[#f1f1f1] ">@Copyright.Yummy corp, 2024.</h1>
      </div>
    </div>
  );
};

export default Footer;
