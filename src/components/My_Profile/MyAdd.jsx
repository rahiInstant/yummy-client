import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { RxCross1, RxCrossCircled } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { IoIosArrowDown } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HashLoader from "react-spinners/HashLoader";
import toast from "react-hot-toast";

const MyAdd = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const param = useParams();
  const axiosSecure = useAxiosSecure();
  const MySwal = withReactContent(Swal);
  const successMsg = (msg) => toast.success(msg);

  const { data, isPending, refetch } = useQuery({
    queryKey: ["my-add"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/my-item/${param?.email}`);
      return result.data;
    },
  });
  if (isPending) {
    return (
      <div className="text-2xl font-bold text-red-500 h-screen flex justify-center items-center">
        <HashLoader color="#d3641b" size={50} loading={true} />
      </div>
    );
  }

  function handleDeleteBtn(id) {
    Swal.fire({
      title: "Ary sure to delete this spot?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, I want to Delete.",
      denyButtonText: "Cancel",
    })
      .then((response) => {
        // console.log(response);
        if (response.isConfirmed) {
          return axiosSecure.delete(`/remove-my-food/${id}`);
        } else if (response.isDismissed) {
          return new Promise((res, rej) => "");
        }
      })
      .then((result) => {
        console.log(result.data);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Spot deleted successfully!!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "spot can't deleted",
          icon: "error",
        });
      });
  }

  function updateServerData(e, id) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const comment = form.comment.value;
    const discount = form.discount.value;
    const itemInfo = {
      name,
      photo,
      category,
      origin,
      price: parseInt(price),
      quantity: parseInt(quantity),
      comment,
      discount: parseInt(discount),
    };
    axiosSecure.patch(`/update-item/${id}`, itemInfo).then((res) => {
      refetch();
      successMsg("Update Successfully.");
      console.log(res.data);
    });
    console.log(itemInfo);
    console.log(id);
  }

  function handleUpdateBtn(id) {
    // console.log(id);
    axiosSecure.get(`/get-food-detail/${id}`).then((res) => {
      const item = res.data;
      MySwal.fire({
        showConfirmButton: false,
        width: "36rem",
        html: (
          <div className="relative">
            <div className="  h-8 "></div>
            <RxCrossCircled
              onClick={() => Swal.close()}
              className="absolute right-0 top-0 cursor-pointer font-bold text-[30px] text-red-600"
            />
            <form
              onSubmit={(e) => updateServerData(e, id)}
              className="  flex flex-col gap-4"
            >
              {/* Part 01 */}
              <div className="flex gap-5 w-full flex-col sm:flex-row">
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="name"
                  >
                    Food name
                  </label>

                  <input
                    required
                    id="name"
                    name="name"
                    className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                    type="text"
                    defaultValue={item?.name}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="photo"
                  >
                    Photo URL
                  </label>
                  <input
                    required
                    className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none border "
                    type="url"
                    name="photo"
                    id="photo"
                    defaultValue={item?.photo}
                  />
                </div>
              </div>
              {/* part 01 */}

              <div className="flex gap-5 w-full items-end  flex-col sm:flex-row">
                <div className="relative h-fit  border rounded-md w-full">
                  <select
                    defaultValue={item?.origin}
                    name="origin"
                    required
                    className=" py-4 px-5 text-lg   appearance-none font-semibold rounded-lg outline-none w-full"
                  >
                    <option className="hidden" value="">
                      -- Origin --
                    </option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="Gana">Gana</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Indonesia">Indonesia</option>
                  </select>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="text-2xl" />
                  </div>
                </div>
                <div className="relative h-fit  border rounded-md w-full">
                  <select
                    defaultValue={item?.category}
                    name="category"
                    required
                    className=" py-4 px-5 text-lg   appearance-none font-semibold rounded-lg outline-none w-full"
                  >
                    <option className="hidden" value="">
                      -- Category --
                    </option>
                    <option value="Bangladesh">Biriyani</option>
                    <option value="Thailand">Kacci</option>
                    <option value="Vietnam">Kebab</option>
                    <option value="Indonesia">Fry</option>
                    <option value="Indonesia">Gem</option>
                  </select>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown className="text-2xl" />
                  </div>
                </div>
              </div>
              {/* Part 02 */}
              <div className="flex gap-5 w-full flex-col sm:flex-row">
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <input
                    required
                    id="price"
                    name="price"
                    className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                    type="number"
                    defaultValue={item?.price}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="quantity"
                  >
                    Quantity
                  </label>

                  <input
                    required
                    id="quantity"
                    name="quantity"
                    className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                    type="number"
                    defaultValue={item?.quantity}
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full flex-col sm:flex-row">
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="user"
                  >
                    Add By
                  </label>
                  <input
                    disabled
                    id="user"
                    name="user"
                    className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                    type="text"
                    placeholder={item.username}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="block text-xl font-semibold  "
                    htmlFor="discount"
                  >
                    Discount
                  </label>

                  <input
                    required
                    id="discount"
                    name="discount"
                    className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                    type="number"
                    defaultValue={item?.discount}
                  />
                </div>
              </div>
              <textarea
                required
                className="outline-none border rounded-md py-4 px-5"
                name="comment"
                id=""
                cols="30"
                rows="5"
                maxLength={250}
                minLength={150}
                defaultValue={item?.comment}
              ></textarea>
              <button
                onClick={() => Swal.close()}
                className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403]"
                type="submit"
              >
                Add Yummy
              </button>
            </form>
          </div>
        ),
      });
    });
  }

  return (
    <div>
      <Helmet>
        <title>Yummy | My Added Item</title>
      </Helmet>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[30px] md:text-[40px] lg:text-[50px]  font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          My Yummy List
        </h1>
        <h1 className="text-xl md:text-2xl uppercase text-center text-[#d6d6d6]">
          | user items |
        </h1>
      </div>
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
      <div className="max-w-7xl mx-auto mt-12">
        <div className=" border-b-2 border-b-orange-500 pb-6 mx-4 ">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex  items-center gap-2 w-full">
              <button
                onClick={() => setOpen(!open)}
                className="py-4 px-5 font-medium bg-[#eb8c21] rounded-lg w-fit text-[#ffffff]"
              >
                Filter
              </button>
              <div className="relative border rounded-lg w-full">
                <select
                  name=""
                  id="select"
                  className="py-3.5 pl-5 pr-12 text-lg appearance-none font-medium rounded-lg outline-none w-full "
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
                    Purchase: High to Low
                  </option>
                  <option className="bg-white text-lg font-semibold" value="3">
                    Purchase:Low to High
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
        {/* mt-10 overflow-x-auto  gap-5 mx-5 md:mx-10 dark:text-slate-300 */}
          <table className=" w-full table-auto">
            <thead>
              <tr>
                <th>SN.</th>
                <th>food name</th>
                <th>price</th>
                <th>Stock</th>
                <th>sell</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="text-center ">{idx + 1}</td>
                    <td className="text-left">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td
                      className={`text-center ${
                        item.quantity < 20
                          ? item.quantity < 10
                            ? "bg-red-300"
                            : "bg-yellow-300"
                          : ""
                      }`}
                    >
                      {item.quantity}
                    </td>
                    <td className="text-center">{item.count}</td>
                    <td>
                      {/* <Link to={`/update/${item._id}`}>
                        <div className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto">
                          <GrDocumentUpdate />
                        </div>
                      </Link> */}
                      <div
                        onClick={() => handleUpdateBtn(item._id)}
                        className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto"
                      >
                        <GrDocumentUpdate />
                      </div>
                    </td>

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
              })}

              {/* {} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAdd;
