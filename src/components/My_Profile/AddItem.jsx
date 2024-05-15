import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../auth/AuthContext";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import toast from "react-hot-toast";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);

  function handleAddItem(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const comment = form.comment.value;
    const email = user?.email;
    const username = user?.displayName;
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
      email,
      username,
      count: 0,
    };
    axiosSecure.post("/add-food", itemInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        successMsg("Your food added to the collection.");
      }
    });
    // console.log(itemInfo);
  }
  return (
    <div className="">
      <Helmet>
        <title>Yummy | Add Food </title>
      </Helmet>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Add new Yummy
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | add items |
        </h1>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <div className="rounded-2xl lg:p-10  p-5 border w-full sm:w-[500px] lg:w-[800px] mx-5">
          <form onSubmit={handleAddItem} className="  flex flex-col gap-4">
            {/* Part 01 */}
            <div className="flex gap-5 w-full flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="name">
                  Food name
                </label>

                <input
                  required
                  id="name"
                  name="name"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  type="text"
                  placeholder="write food name here"
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
                  placeholder="https://photourl.com"
                />
              </div>
            </div>
            {/* part 01 */}

            <div className="flex gap-5 w-full items-end  flex-col sm:flex-row">
              <div className="relative h-fit  border rounded-md w-full">
                <select
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
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
              <div className="relative h-fit  border rounded-md w-full">
                <select
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
                  placeholder="write food price here"
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
                  placeholder="write available quantity."
                />
              </div>
            </div>
            <div className="flex gap-5 w-full flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="user">
                  Add By
                </label>
                <input
                  disabled
                  id="user"
                  name="user"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  type="text"
                  placeholder={user?.displayName}
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
                  id="discount"
                  name="discount"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  type="number"
                  // placeholder="Discount in dollar."
                  defaultValue={0}
                />
              </div>
            </div>
            {/* <div className="flex gap-5 items-end flex-col sm:flex-row">
              <div className="w-full gap-5">
                <label className="block text-xl font-semibold  " htmlFor="cost">
                  Average Cost
                </label>
                <input
                  required
                  className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none border "
                  type="number"
                  name="cost"
                  id="cost"
                  placeholder="100000"
                />
              </div>
              <div className="relative h-fit  border rounded-md w-full">
                <select
                  name="season"
                  required
                  className=" py-4 px-5 text-lg  appearance-none font-semibold rounded-lg outline-none w-full"
                >
                  <option className="hidden" value="">
                    -- Season --
                  </option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Rainy">Rainy</option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
            </div> */}
            <textarea
              required
              className="outline-none border rounded-md py-4 px-5"
              name="comment"
              id=""
              cols="30"
              rows="5"
              maxLength={250}
              minLength={150}
              placeholder="write something about this spot withing 150-250 words."
            ></textarea>
            <button
              className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403]"
              type="submit"
            >
              Add Yummy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
