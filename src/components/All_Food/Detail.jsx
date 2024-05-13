import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { useState } from "react";
const Detail = () => {
  const [img, setImg] = useState("/slide_08.jpg");
  const [itemCount, setItemCount] = useState(1);
  return (
    <div>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Yummy Details Here
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | food Details section |
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 mx-5 lg:mx-0 lg:ml-8 xl:ml-0">
          <div>
            <img className="rounded-lg h-[450px] w-full" src={img} alt="" />
          </div>
          <div className="flex gap-4 mt-4 items-center justify-center">
            <img
              onClick={() => setImg("/slide_08.jpg")}
              className="h-20 w-20 rounded-md cursor-pointer"
              src="/slide_08.jpg"
              alt=""
            />
            <img
              onClick={() => setImg("/slide_02.jpg")}
              className="h-20 w-20 rounded-md cursor-pointer"
              src="/slide_02.jpg"
              alt=""
            />
            <img
              onClick={() => setImg("/slide_03.jpg")}
              className="h-20 w-20 rounded-md cursor-pointer hidden md:block"
              src="/slide_03.jpg"
              alt=""
            />
            <img
              onClick={() => setImg("/slide_07.jpg")}
              className="h-20 w-20 rounded-md cursor-pointer "
              src="/slide_07.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2 mx-5 lg:mx-0 lg:mr-8 xl:mr-0">
          <h1 className="text-[30px] sm:text-[40px] font-bold text-[#2b2a2a]">
            Special Chicken kacci
          </h1>
          <p className="mt-3 text-[#222224e8]">
            Indulge in our succulent Special Chicken Kacci, a symphony of
            flavors wrapped in tender marinated chicken and fragrant spices,
            slow-cooked to perfection. Savor every bite of this culinary
            delight, a testament to our commitment to exquisite taste.
          </p>
          <div className="mt-4  flex gap-2 items-center">
            <span className="font-semibold">BDT</span>
            <span className="line-through text-red-500 text-lg sm:text-xl">700 </span>
            <span className="text-2xl sm:text-[30px] font-semibold ">600</span>
            <span className="text-base font-medium bg-red-100 p-2 rounded-full">
              21% OFF
            </span>
          </div>

          <div className="mb-7 mt-5 flex gap-4 items-center select-none">
            <div className="flex items-center gap-3 w-[130px]">
              <div
                onClick={() => {
                  if (itemCount > 1) {
                    let newCount = itemCount - 1;
                    setItemCount(newCount);
                  }
                }}
                className="w-10 h-10 cursor-pointer rounded-full bg-slate-200 text-lg font-medium flex items-center justify-center"
              >
                -
              </div>
              <div>{itemCount}</div>
              <div
                onClick={() => {
                  let newCount = itemCount + 1;
                  setItemCount(newCount);
                }}
                className="w-10 h-10 cursor-pointer rounded-full bg-slate-200 text-lg font-medium flex items-center justify-center"
              >
                +
              </div>
            </div>
            <Link to="/purchase/52749695dfghfh">
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-medium text-[#f8f8f8]">
                Purchase Yummy
              </button>
            </Link>
          </div>
          <div className="space-y-2 mt-5 font-medium">
            <h1 className="flex items-center gap-2">
              <TbCategory />
              Category: Biriyani
            </h1>
            <h1 className="flex items-center gap-2">
              <BsPeopleFill />
              Made by: Chanku Akhter
            </h1>
            <h1 className="flex items-center gap-2">
              <FaGlobeAmericas />
              Origin: Noakhali
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
