import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

const Purchase = () => {
  const {user} = useContext(AuthContext)
  function handlePurchase(e) {
    e.preventDefault();
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
                    autoFocus
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
                  <tr>
                    <td>Special Spicy Chicken</td>
                    <td className="text-center">BDT 600</td>
                    <td className="text-center">6</td>
                  </tr>
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
