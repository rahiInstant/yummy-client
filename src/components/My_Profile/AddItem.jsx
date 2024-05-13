import { Helmet } from "react-helmet-async";
import { BsEmojiGrin } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const AddItem = () => {
  return (
    <div className="">
      <Helmet>
        <title>Arohi | Add Spot</title>
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
          <form className="  flex flex-col gap-4">
            {/* part 01 */}

            <div className="flex gap-5 w-full items-end  flex-col sm:flex-row">
              <div className="relative h-fit  border rounded-md w-full">
                <select
                  name="country"
                  required
                  className=" py-4 px-5 text-lg   appearance-none font-semibold rounded-lg outline-none w-full"
                >
                  <option className="hidden" value="">
                    -- Country --
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-xl font-semibold  " htmlFor="spot">
                  Spot
                </label>

                <input
                  required
                  id="spot"
                  name="spot"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  placeholder="Pataia"
                  type="text"
                />
              </div>
            </div>
            {/* Part 02 */}
            <div className="flex gap-5 w-full flex-col sm:flex-row">
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
              <div className="w-full">
                <label
                  className="block text-xl font-semibold  "
                  htmlFor="location"
                >
                  Location
                </label>

                <input
                  required
                  id="location"
                  name="location"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  type="text"
                  placeholder="sub-location,main-location"
                />
              </div>
            </div>
            {/* part 03 */}
            <div className="flex gap-5 items-end flex-col sm:flex-row">
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
            </div>
            {/* part 04 */}
            <div className="flex gap-5 w-full flex-col sm:flex-row">
              <div className="w-full">
                <label className="block text-xl   font-semibold" htmlFor="time">
                  Travel Time
                </label>
                <input
                  required
                  className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none border "
                  type="number"
                  name="time"
                  id="time"
                  placeholder="12"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-xl   font-semibold"
                  htmlFor="visitor"
                >
                  Total Visitor per Year
                </label>

                <input
                  required
                  name="visitor"
                  id="visitor"
                  className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none border "
                  type="number"
                  placeholder="10000"
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
