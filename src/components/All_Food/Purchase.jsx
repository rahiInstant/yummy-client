import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { getData } from "./FoodContext";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import toast from "react-hot-toast";

const Purchase = () => {
  const { user } = useContext(AuthContext);
  const param = useParams();
  const order = getData();
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);
  const navigate = useNavigate();
  function handlePurchase(e) {
    e.preventDefault();
    const address = e.target.address.value;
    const name = user.displayName;
    const email = user.email;
    const date = now();
    const id = param.id;
    const orderInfo = { address, name, email, date, id, ...order };
    axiosSecure.post("/purchase", orderInfo).then((res) => {
      if (res.data.insertedId) {
        successMsg("Your order placed successfully.");
        axiosSecure
          .patch(`/update-food/${param.id}`, { itemCount: order.itemCount })
          .then((res) => console.log(res.data));
        // setTimeout(() => {
        //   navigate("/all-food");
        // }, 1000);
      }
      console.log(res.data);
    });
    console.log(orderInfo);
  }
  function now() {
    const date = new Date();
    return date.toLocaleString();
  }

  return (
    <div>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Let's Enjoy Yummy
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | Checkout section |
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-12 ">
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-8 gap-8">
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-xl mb-3 font-semibold">Billing Details</h1>
            <hr />
            <div className="mt-5">
              <form onSubmit={handlePurchase} className="flex gap-5 flex-col">
                <div className="flex flex-col sm:flex-row gap-5 w-full">
                  <input
                    className="px-4 py-3 rounded-lg w-full border"
                    type="text"
                    disabled
                    placeholder={user.displayName}
                  />
                  <input
                    className="px-4 py-3 rounded-lg w-full border"
                    type="text"
                    disabled
                    placeholder={user.email}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-5 w-full">
                  <input
                    className="px-4 py-3 rounded-lg w-full border"
                    type="text"
                    disabled
                    placeholder={now()}
                  />
                  <input
                    required
                    autoFocus
                    name="address"
                    className="px-4 py-3 rounded-lg w-full border outline-none focus:border-orange-500"
                    type="text"
                    placeholder="Your address here"
                  />
                </div>
                <button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]"
                  type="submit"
                >
                  Enjoy Yummy
                </button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-xl mb-3 font-semibold">Your Order</h1>
            <hr />
            <div className="mt-5">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Food Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order ? (
                    <tr>
                      <td>{order.name}</td>
                      <td className="text-center">${order.price}</td>
                      <td className="text-center">{order.itemCount}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
