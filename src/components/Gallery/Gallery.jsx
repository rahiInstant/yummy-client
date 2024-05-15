import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../../auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../CutomHook/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const MySwal = withReactContent(Swal);
  const [feed, setFeed] = useState([]);
  const [updateGallery, setUpdateGallery] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);
  // const errorMsg = (msg) => toast.error(msg);
  const location = useLocation()
  useEffect(() => {
    axiosSecure.get("/gallery").then((res) => {
      setFeed(res.data);
      console.log(res.data);
    });
  }, [axiosSecure, updateGallery]);

  const handleUserFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const comment = form.comment.value;
    const photoURL = form.photo.value;
    const userObj = { name, comment, photoURL };
    axiosSecure.post("/feedback", userObj).then((res) => {
      setUpdateGallery(!updateGallery);
      successMsg("Thank you for adding review.");

      console.log(res.data);
    });
    // console.log(userObj);
  };

  const showSwal = () => {
    if (!user) {
      navigate("/login", { state: location.pathname });
      return;
    }
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
              placeholder={user.displayName}
              disabled
              className="px-4 py-3 rounded-lg w-full border"
              type="text"
              name="name"
            />
            <textarea
              required
              className="px-4 py-3 rounded-lg w-full border outline-none focus:border-orange-500"
              name="comment"
              id=""
            ></textarea>
            <input
              required
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

  return (
    <div>
      <Helmet>
        <title>Yummy | Gallery</title>
      </Helmet>
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
              onClick={() => {
                showSwal();
              }}
              className="p-3 rounded-lg border-2 border-orange-500 font-medium text-lg hover:bg-orange-500 hover:text-white duration-150"
            >
              Add Your Emotion
            </button>
          </div>
          <div className="mt-6 h-6 border-t-2 border-orange-500 rounded-[12px]"></div>
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mx-4 lg:mx-8 w-fit">
              {feed?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="h-[300px] relative overflow-hidden "
                  >
                    <img
                      className="h-full rounded-[12px]"
                      src={item.photoURL}
                      alt=""
                    />
                    <div className="absolute bg-[#ffffffb9] opacity-0  hover:opacity-100 h-full w-full duration-300 p-4 text-center top-0 flex flex-col items-center justify-center">
                      <h1 className="text-2xl mb-2 font-semibold">
                        {item.name}
                      </h1>
                      <p className="italic font-medium">{item.comment}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
