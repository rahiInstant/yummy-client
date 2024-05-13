import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Gallery = () => {
  const MySwal = withReactContent(Swal);

  const handleUserFeedback = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const comment = form.comment.value
    const photoURL = form.photo.value
    const userObj = {name,comment,photoURL}
    console.log(userObj)
  };

  const showSwal = () => {
    MySwal.fire({
      showConfirmButton: false,
      width: "36rem",
      html: (
        <div>
          <h1 className="text-2xl font-semibold text-center uppercase">
            Share your emotion
          </h1>
          <form
            onSubmit={handleUserFeedback}
            className="mt-6 flex flex-col gap-4"
          >
            <input
              placeholder="Abdur Rahaman Rahi"
              disabled
              className="px-4 py-3 rounded-lg w-full border"
              type="text"
              name="name"
            />
            <textarea
              className="px-4 py-3 rounded-lg w-full border outline-none focus:border-orange-500"
              name="comment"
              id=""
            ></textarea>
            <input
              placeholder="https://url.com"
              className="px-4 py-3 rounded-lg w-full border outline-none focus:border-orange-500"
              type="text"
              name="photo"
            />
            <button
            onClick={() => Swal.close()}
              className="w-full py-3 rounded-lg  bg-gradient-to-r from-[#E8751A] via-[#e76d09] to-[#FDA403] font-semibold text-xl text-[#f8f8f8]"
              type="submit"
            >
              Share
            </button>
          </form>
        </div>
      ),
    });
  };
  const card = (
    <>
      <div className="h-[300px] relative overflow-hidden ">
        <img className="h-full rounded-[12px]" src="/slide_02.jpg" alt="" />
        <div className="absolute bg-[#ffffffb9] opacity-0  hover:opacity-100 h-full duration-300 p-4 text-center top-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-2 font-semibold">Abdur Rahaman</h1>
          <p className="italic font-medium">
            "Tender marinated chicken infused with aromatic spices, slow-cooked
            to perfection. A delectable culinary delight awaits!"
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="h-[400px] w-full bg-[url('/sub_01.svg')] flex-col flex items-center justify-center ">
        <h1 className="text-[50px] font-bold uppercase text-[#c2c2c2] mt-12 text-center">
          Experience with Yummy
        </h1>
        <h1 className="text-2xl uppercase text-center text-[#d6d6d6]">
          | Feedback Gallery |
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        <div>
          <div className="flex justify-center ">
            <button
              onClick={() => showSwal()}
              className="p-3 rounded-lg border-2 border-orange-500 font-medium text-lg hover:bg-orange-500 hover:text-white duration-150"
            >
              Add Your Emotion
            </button>
          </div>
          <div className="mt-6 h-6 border-t-2 border-orange-500 rounded-[12px]"></div>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mx-4 lg:mx-8 w-fit">
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
