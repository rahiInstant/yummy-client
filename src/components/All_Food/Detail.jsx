import { Link, useLocation, useParams } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import { setData } from "./FoodContext";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../auth/AuthContext";
import BeatLoader from "react-spinners/BeatLoader";
const Detail = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [img, setImg] = useState("/slide_08.jpg");
  const [itemCount, setItemCount] = useState(1);
  // const { order, setOrder } = useContext(FoodContext);
  const axiosSecure = useAxiosSecure();
  const param = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["single-food"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/get-food-detail/${param.id}`);
      return result.data;
    },
  });
  useEffect(() => {
    setImg(data?.photo);
  }, [data]);
  if (isPending) {
    return (
      <div className="text-2xl font-bold text-red-500 h-screen flex justify-center items-center">
        <BeatLoader color="#d3641b" size={25} loading={true} />
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Yummy | Food Details</title>
      </Helmet>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px]  font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Yummy Details Here
        </h1>
        <h1 className="text-xl md:text-2xl uppercase text-center text-[#d6d6d6]">
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
              onClick={() => setImg(data?.photo)}
              className="h-20 w-20 rounded-md cursor-pointer"
              src={data?.photo}
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
        <div className="lg:w-1/2 mx-5 lg:mx-0 lg:mr-8 xl:mr-0 mt-0">
          <h1 className="text-[30px] sm:text-[40px] font-bold text-[#2b2a2a]">
            {data?.name}
          </h1>
          <p className="mt-3 text-[#222224e8]">{data?.comment}</p>
          <div className="mb-5 mt-2 uppercase font-semibold px-2 py-0.5 bg-[#a0fc8e9f] w-fit">
            {data?.quantity} items in stock
          </div>
          <div className="mt-4  flex gap-2 items-center">
            <span className="text-xl font-semibold">$</span>
            <span className="line-through text-red-500 text-lg sm:text-xl">
              {data?.price}
            </span>
            <span className="text-2xl sm:text-[30px] font-semibold ">
              {data?.price - data?.discount}
            </span>
            <span className="text-base font-medium bg-red-100 p-2 rounded-full">
              {Math.floor((data?.discount / data?.price) * 100)}% OFF
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
                  if (itemCount < data?.quantity) {
                    let newCount = itemCount + 1;
                    setItemCount(newCount);
                  }
                }}
                className="w-10 h-10 cursor-pointer rounded-full bg-slate-200 text-lg font-medium flex items-center justify-center"
              >
                +
              </div>
            </div>
            <Link
              state={location.pathname}
              to={`${
                user
                  ? data?.email !== user?.email
                    ? `/purchase/${data?._id}`
                    : ""
                  : "/login"
              }`}
            >
              <div
                onClick={() =>
                  setData({
                    name: data?.name,
                    price: data?.price-data?.discount,
                    itemCount,
                    ownerMail: data?.email,
                  })
                }
                className={`px-5 py-3 rounded-full ${
                  user
                    ? data?.quantity > 0 && data?.email !== user?.email
                      ? "bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403]"
                      : "bg-slate-400"
                    : "bg-slate-400"
                }  font-medium text-[#f8f8f8]`}
              >
                Purchase Yummy
              </div>
            </Link>
          </div>
          <p className="italic text-red-500 font-medium">
            {data?.quantity <= 0 ? "Product Out of Stock" : ""}
            {data?.email === user?.email
              ? "You add this product so you cannot buy it."
              : ""}
          </p>
          <div className="space-y-2 mt-5 font-medium">
            <h1 className="flex items-center gap-2">
              <TbCategory />
              Category: {data?.category}
            </h1>
            <h1 className="flex items-center gap-2">
              <BsPeopleFill />
              Made by: {data?.username}
            </h1>
            <h1 className="flex items-center gap-2">
              <FaGlobeAmericas />
              Origin: {data?.origin}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
