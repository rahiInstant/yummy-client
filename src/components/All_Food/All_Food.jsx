import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const All_Food = () => {
  const [food, setFood] = useState([]);
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { data, isPending } = useQuery({
    queryKey: ["food"],
    queryFn: async () => {
      const result = await axiosSecure.get("/get-food");
      return result.data;
    },
  });
  useEffect(() => {
    setFood(data);
  }, [data]);
  if (isPending) {
    return <div className="text-2xl font-bold text-red-500">Loading...</div>;
  }
  // console.log(data)
  // const card = (
  //   <>
  //     <div className=" h-auto shadow-md  rounded-lg ">
  //       <div className="relative">
  //         <img
  //           className="h-[300px] w-full rounded-xl p-2"
  //           src="/card_01.jpg"
  //           alt=""
  //         />
  //         <div className=" backdrop-blur-xl text-white font-bold absolute bottom-4 right-4 py-2 px-4 border-2  rounded-md mt-5 w-fit">
  //           Stock : 200
  //         </div>
  //       </div>
  //       <div className="p-3">
  //         <div className="ml-5 pl-2 border-[#ffad5075] border-l-4">
  //           <h1 className="text-2xl font-bold text-[#2b2a2a] mt-2">
  //             Special Chicken kacci
  //           </h1>
  //           <h1 className="text-xl font-semibold mt-2.5">Price: $29</h1>
  //           <h1 className="mt-1 italic text-lg">Category : Biriyani </h1>
  //         </div>
  //         <Link to="/detail/3254546adf">
  //           <button className=" mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]">
  //             Yummy Details
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   </>
  // );
  // console.log(open);

  function handleSearch(e) {
    e.preventDefault();
    // console.log(e.target.search.value);

    axiosSecure
      .post("/handle-search", { search: e.target.search.value })
      .then((res) => {
        setFood(res.data);
        // console.log(res.data);
      });
  }
  function handleSort(e) {
    // console.log(e.target.value)
    axiosSecure.post("/all-food-sort", { key: e.target.value }).then((res) => {
      setFood(res.data);
      console.log(res.data);
    });
  }

  return (
    <div className="relative">
      <Helmet>
        <title>Yummy | All food</title>
      </Helmet>
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
            <div className="flex  items-center gap-2 w-full ">
              <button
                onClick={() => setOpen(!open)}
                className="py-4 px-5 font-medium bg-[#eb8c21] rounded-lg w-fit text-[#ffffff]"
              >
                Filter
              </button>
              <div className="relative border rounded-lg  w-full">
                <select
                  onChange={handleSort}
                  name=""
                  id="select"
                  className="py-3.5 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
                >
                  <option value="" className="hidden">
                    Sort by--
                  </option>
                  <option
                    className="bg-white text-lg font-medium"
                    value="priceHL"
                  >
                    Price:High to Low
                  </option>
                  <option
                    className="bg-white text-lg font-medium"
                    value="priceLH"
                  >
                    Price:Low to High
                  </option>
                  <option
                    className="bg-white text-lg font-medium"
                    value="purchaseHL"
                  >
                    Purchase: High to Low
                  </option>
                  <option
                    className="bg-white text-lg font-medium"
                    value="purchaseLH"
                  >
                    Purchase:Low to High
                  </option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
            </div>

            <form onSubmit={handleSearch} className="relative w-full">
              <input
                className="outline-none  px-5 py-4 rounded-lg border w-full"
                type="text"
                name="search"
                id=""
                placeholder="Search Here..."
              />
              <button
                type="submit"
                className="absolute flex items-center justify-center right-0 rounded-lg duration-150 cursor-pointer top-1/2 -translate-y-1/2 text-xl w-16 h-full bg-slate-200"
              >
                <IoSearchSharp />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mx-4 ">
          {food?.map((item, idx) => {
            // console.log(item.discount)
            return (
              <div key={idx} className=" h-auto shadow-md  rounded-lg ">
                <div className="relative">
                  <img
                    className="h-[300px] w-full rounded-xl p-2"
                    src={item.photo}
                    alt=""
                  />
                  <div
                    className={`${
                      item?.discount == 0 || typeof item?.discount !== "number"
                        ? "hidden"
                        : ""
                    } backdrop-blur-xl text-white font-bold absolute top-4 left-4 py-2 px-4 border-2  rounded-md  w-fit`}
                  >
                    {Math.floor((item?.discount / item?.price) * 100)}% OFF
                  </div>
                  {/* <div className="  bg-[#e44c1e] font-bold absolute top-4 left-4 py-2 px-4 border-2  rounded-full mt-5 w-fit">
                  {Math.floor((item?.discount / item?.price) * 100)}% OFF
                  </div> */}
                </div>
                <div className="p-3  flex flex-col ">
                  <div className="ml-5 pl-2 border-[#ffad5075] border-l-4 ">
                    <h1 className="text-2xl font-bold text-[#2b2a2a] mt-2">
                      {item.name}
                    </h1>
                    <h1 className="text-xl font-semibold mt-2.5">
                      Price: ${item.price - item.discount}
                    </h1>
                    <h1 className="mt-1 italic text-lg">
                      Category : {item.category}
                    </h1>
                    <h1 className="mt-1 italic text-lg">
                      Purchase : {item.count}
                    </h1>
                    <h1 className="mt-1 italic text-lg">
                      Stock : {item.quantity}
                    </h1>
                  </div>
                  <Link  to={`/detail/${item._id}`}>
                    <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]">
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
      </div>
    </div>
  );
};

export default All_Food;
