
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-32 px-6 lg:px-[100px] py-[60px] bg-[#f38021] relative">
      <div className="bg-white rounded-3xl w-72 lg:w-80 h-28 lg:h-32 absolute -top-16 left-1/2 -translate-x-1/2 flex items-end justify-center font-super">
        <div
          //   style={{ textShadow: "2px 2px 15px #302f2f" }}via-[#cc0579]
          className="text-[40px] lg:text-[50px] text-[#f79a30] font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          Yummy Net
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 lg:mt-8">
        <p className="lg:text-lg  lg:w-[75%] text-center text-[rgb(241,241,241)]">
          Elevate your dining experience with our exquisite selection of gourmet
          delights. Indulge in heavenly pizzas, succulent burgers, fresh sushi,
          and comforting pasta dishes. Taste perfection with every order.
          Satisfaction guaranteed. Order now!
        </p>
        <div className="mt-7">
            <div className="w-16 h-16  bg-gradient-to-r from-[#e46330] to-[#cc2305] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
