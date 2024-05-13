import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const card = [];
  return (
    <div>
      <Helmet>
        <title>Arohi | My List</title>
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
            <div className="flex  items-center gap-2 w-full md:w-auto ">
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
        <div className="mt-10 overflow-x-auto  gap-5 mx-5 md:mx-10  text-[#131212] ">
          <table className=" w-full table-auto">
            <thead>
              <tr>
                <th>SN.</th>
                <th>Country</th>
                <th>Spot</th>
                <th>Location</th>
                <th>Average Cost</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td className="text-center ">{idx + 1}</td>
                    <td className="text-center">{item.country}</td>
                    <td>{item.spot}</td>
                    <td>{item.location}</td>
                    <td className="text-center">{item.cost}</td>
                    <td>
                      <Link to={`/update/${item._id}`}>
                        <div className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto">
                          <GrDocumentUpdate />
                        </div>
                      </Link>
                      {/* <div
                          onClick={() => handleUpdateBtn(item._id)}
                          className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto"
                        >
                          <GrDocumentUpdate />
                        </div> */}
                    </td>

                    <td>
                      <div
                        // onClick={() => handleDeleteBtn(item._id)}
                        className="p-2 cursor-pointer bg-red-700 rounded-md w-fit text-white text-xl mx-auto"
                      >
                        <RxCrossCircled />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
