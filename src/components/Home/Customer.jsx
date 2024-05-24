const Customer = () => {
  const card = (
    <>
      <div className="border-2 rounded-2xl">
        <div className="flex items-center justify-center flex-col border-b-[3px] border-orange-500 p-6 rounded-3xl">
          <img
            className="w-24 h-24 rounded-full border p-1"
            src="/customer_01.jpg"
            alt=""
          />
          <h1 className="text-2xl font-semibold mt-3 text-[#19191ada]">
            John Doe
          </h1>
          <h1 className=" mt-1 font-medium text-[#2222248f]">
            Nutritionist, Punki Medical
          </h1>
        </div>
        <div className="p-6">
          <p className="italic font-medium text-[#222224e8]">
            "Absolutely divine! The pizza was heavenly, the burgers juicy, sushi
            fresh, and pasta simply comforting. A culinary delight!"
          </p>
        </div>
      </div>
    </>
  );
  return (
    <div className="mt-16 md:mt-24 lg:mt-32 max-w-7xl mx-auto">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-[35px] md:text-[40] lg:text-[48px]  font-black text-[#302f2f]">
          <span className="text-[#e28030]">E</span>xpert{"   "}
          <span className="text-[#e28030]">S</span>ays
        </h1>
        <p className="md:text-lg text-[#12132D99] mt-5 w-[90%]">
          Listen to the joyous chorus of satisfied customers praising our
          top-selling delights: heavenly pizzas, juicy burgers, fresh sushi
          rolls, and comforting pasta dishes. Taste the happiness today!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mx-4">
        {card}
        {card}
        {card}
      </div>
    </div>
  );
};

export default Customer;
