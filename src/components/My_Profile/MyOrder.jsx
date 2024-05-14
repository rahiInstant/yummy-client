import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GrDocumentUpdate } from "react-icons/gr";
import toast from "react-hot-toast";

const MyOrder = () => {
  // const {} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);
  const param = useParams();
  const { data, isPending, refetch } = useQuery({
    queryKey: ["user-order"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/user-order/${param?.email}`);
      return result.data;
    },
  });

  function handleDeleteBtn(id) {
    // axiosSecure.delete(`/user-order-delete/${id}`).then((res) => {
    //   refetch()
    //   successMsg('Order deleted successfully!!')
    //   console.log(res.data);
    // });
  }
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Yummy | My Ordered Item</title>
      </Helmet>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Yummy Already enjoyed
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | user order |
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <div className=" border-b-2 border-b-orange-500 pb-6 mx-4 ">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex  items-center gap-2 w-full  ">
              <div className="relative border rounded-lg  w-full">
                <select
                  name=""
                  id="select"
                  className="py-3.5 px-5 text-lg appearance-none font-medium rounded-lg outline-none w-full "
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
              placeholder="Search Here..."
            />
          </div>
        </div>
        <div className="mt-10 overflow-x-auto  gap-5 mx-5 md:mx-10  text-[#131212] ">
          <table className=" w-full table-auto">
            <thead>
              <tr>
                <th>SN.</th>
                <th>Food name</th>
                <th>Price</th>
                <th>itemCount</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isPending ? (
                <div className="text-2xl font-bold text-red-500   flex justify-center items-center">
                  Loading...
                </div>
              ) : (
                data.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="text-center ">{idx + 1}</td>
                      <td className="text-left">{item.name}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">{item.itemCount}</td>
                      <td className="text-center">{item.date}</td>
                      <td>
                        <div
                          onClick={() => handleDeleteBtn(item._id)}
                          className="p-2 cursor-pointer bg-red-700 rounded-md w-fit text-white text-xl mx-auto"
                        >
                          <RxCrossCircled />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
              {/* {data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="text-center ">{idx + 1}</td>
                    <td className="text-left">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">{item.itemCount}</td>
                    <td className="text-center">{item.date}</td>
                    <td>
                      <div
                        onClick={() => handleDeleteBtn(item._id)}
                        className="p-2 cursor-pointer bg-red-700 rounded-md w-fit text-white text-xl mx-auto"
                      >
                        <RxCrossCircled />
                      </div>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
