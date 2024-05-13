import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const All_Food = () => {
  const [open, setOpen] = useState(false);
  const card = (
    <>
      <div className=" h-auto shadow-md  rounded-lg ">
        <div className="relative">
          <img
            className="h-[300px] w-full rounded-xl p-2"
            src="/card_01.jpg"
            alt=""
          />
          <div className=" backdrop-blur-xl text-white font-bold absolute bottom-4 right-4 py-2 px-4 border-2  rounded-md mt-5 w-fit">
            Stock : 200
          </div>
        </div>
        <div className="p-3">
          <div className="ml-5 pl-2 border-[#ffad5075] border-l-4">
            <h1 className="text-2xl font-bold text-[#2b2a2a] mt-2">
              Special Chicken kacci
            </h1>
            <h1 className="text-xl font-semibold mt-2.5">Price: $29</h1>
            <h1 className="mt-1 italic text-lg">Category : Biriyani </h1>
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
  console.log(open);
  return (
    <div className="relative">
      <div
        className={`${
          open ? "right-[0%]" : "-right-[100%]"
        } duration-700 fixed top-0 w-[250px] md:w-[400px] h-[3000px] bg-[#d3641b] z-30 `}
      >
        <button
          onClick={() => setOpen(!open)}
          className="text-white h-8 w-8 flex justify-center items-center bg-[#fa761e] mt-4 ml-4"
        >
          <RxCross1 />
        </button>
      </div>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Yummy Gather Here
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | All food section |
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-24">
        <div className=" border-b-2 border-b-orange-500 pb-6 mx-4 ">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex  items-center gap-2 w-full md:w-auto ">
              <button
                onClick={() => setOpen(!open)}
                className="py-4 px-5 font-medium bg-[#eb8c21] rounded-lg w-fit text-[#ffffff]"
              >
                Filter
              </button>
              <div className="relative border rounded-lg md:w-auto w-full">
                <select
                  name=""
                  id="select"
                  className="py-3.5 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full md:w-auto"
                >
                  <option value="" className="hidden">
                    Sort by--
                  </option>
                  <option className="bg-white text-lg font-semibold" value="1">
                    Price:High to Low
                  </option>
                  <option className="bg-white text-lg font-semibold" value="2">
                    Price:Low to High
                  </option>
                  <option className="bg-white text-lg font-semibold" value="3">
                    Number of Purchase
                  </option>
                  <option className="bg-white text-lg font-semibold" value="3">
                    Rating
                  </option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
            </div>

            <input
              className="outline-none  px-5 py-4 rounded-lg border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mx-4 ">
          {card}
          {card}
          {card}
          {card}
          {card}
        </div>
      </div>
    </div>
  );
};

export default All_Food;
