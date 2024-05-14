import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../CutomHook/useAxiosSecure";

const TopFood = () => {
  const axiosSecure = useAxiosSecure();
  const [topFood, setTopFood] = useState([]);
  useEffect(() => {
    axiosSecure.get("/top-food").then((res) => {
      setTopFood(res.data);
      console.log(res.data);
    });
  });
  const card = (
    <>
      <div className=" h-auto shadow-md  rounded-lg ">
        <div>
          <img
            className="h-[300px] w-full rounded-xl p-2"
            src="/card_01.jpg"
            alt=""
          />
        </div>
        <div className="p-3">
          <div className="ml-5 pl-2 border-[#ffad5075] border-l-4">
            <h1 className="text-2xl font-bold text-[#2b2a2a] mt-2">
              Special Chicken kacci
            </h1>
            <h1 className="text-xl font-semibold mt-2.5">Price: $29</h1>
            <h1 className="mt-1 italic text-lg">Category : Biriyani</h1>
          </div>
          <Link to="/detail/3254546adf">
            <button className=" mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]">
              Yummy Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[48px] font-black text-[#302f2f]">
          <span className="text-[#e28030]">T</span>op{" "}
          <span className="text-[#e28030]">S</span>elling{" "}
          <span className="text-[#e28030]">F</span>ood
        </h1>
        <p className="text-lg text-[#12132D99] mt-5 w-[90%]">
          These crowd-pleasers are meticulously prepared with premium
          ingredients, ensuring every bite is an unforgettable culinary
          experience. Order now and taste the perfection!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mx-4 lg:mx-0">
        {topFood?.map((item, idx) => {
          return (
            <div key={idx} className=" h-auto shadow-md  rounded-lg ">
              <div>
                <img
                  className="h-[300px] w-full rounded-xl p-2"
                  src={item.photo}
                  alt=""
                />
              </div>
              <div className="p-3">
                <div className="ml-5 pl-2 border-[#ffad5075] border-l-4">
                  <h1 className="text-2xl font-bold text-[#2b2a2a] mt-2">
                    {item.name}
                  </h1>
                  <h1 className="text-xl font-semibold mt-2.5">Price: ${item.price-item.discount}</h1>
                  <h1 className="mt-1 italic text-lg">Category : {item.category}</h1>
                </div>
                <Link to="/detail/3254546adf">
                  <button className=" mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]">
                    Yummy Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
        {/* {card}
        {card}
        {card}
        {card}
        {card} */}
      </div>
      <div className="mt-16 flex justify-center">
        <Link to="/all-food">
          <button className="px-6 py-4 rounded-lg border text-lg font-semibold border-[#a75d21] hover:bg-[#ff9e4f49] duration-150">
            See All Yummy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
