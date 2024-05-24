import moment from "moment";
import { IoCalendarOutline } from "react-icons/io5";

const LatestNews = () => {
  const card = (
    <>
      <div className="border  rounded-lg">
        <div className="p-4">
          <img
            className="h-[300px] w-full rounded-lg "
            src="/card_02.jpg"
            alt=""
          />
        </div>
        <div className="px-6 pb-4 ">
          <h1 className="flex items-center gap-1">
            <IoCalendarOutline />
            {moment().format("DD MMMM, YYYY")}
          </h1>
          <h1 className="text-xl font-bold mt-1">Special Shrimp Soup</h1>
          <p className="mt-4 text-justify">
            Delicious shrimp soup, brimming with flavor, perfect for any
            occasion, a true culinary delight{" "}
            <span className="text-lg font-medium italic text-orange-600">
              see more...
            </span>
          </p>
        </div>
      </div>
    </>
  );
  return (
    <div className="mt-16 md:mt-24 lg:mt-32  max-w-7xl mx-auto">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[35px] md:text-[40] lg:text-[48px] font-black text-[#302f2f]">
          <span className="text-[#e28030]">L</span>atest{" "}
          <span className="text-[#e28030]">R</span>cipe{" "}
          {/* <span className="text-[#e28030]">U</span>pdate */}
        </h1>
        <p className="md:text-lg text-[#12132D99] mx-4 mt-5 w-[90%]">
          These crowd-pleasers are meticulously prepared with premium
          ingredients, ensuring every bite is an unforgettable culinary
          experience. Order now and taste the perfection!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {card}
        {card}
        {card}
        {card}
      </div>
    </div>
  );
};

export default LatestNews;
