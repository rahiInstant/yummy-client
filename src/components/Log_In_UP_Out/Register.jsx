import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../auth/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const [show, setShow] = useState(false);
  const [passFieldType, setPassFieldType] = useState("password");
  const [title, setTitle] = useState("Yummy | Register");
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, updateProfileData } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  function handleRegister(e) {
    e.preventDefault();
    const email = e.target.mail.value;
    const password = e.target.pass.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    if (!/^.{6,}$/.test(password)) {
      errorMsg("Password must be greater than or equal 6 word.");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      errorMsg("Password must contain at least one uppercase letter.");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      errorMsg("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateProfileData({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            successMsg("Register complete successfully!!");
            setTitle("Redirecting...");
            setTimeout(() => {
              toast.dismiss()
              navigate(location.state ? location.state : "/");
            }, 2000);
          })
          .catch((error) => {
            const Msg = error.message;
            const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
            errorMsg(actualMsg);
          });
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }
  return (
    <div className=" flex items-center justify-center select-none  mt-36">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="w-full sm:w-fit mx-4 border-slate-400 border  rounded-2xl flex flex-col  items-end relative">
        <div className="min-h-[320px]"></div>
        <div
          //   style={{
          //     background: 'url("/public/slide_02.jpg"),',
          //     backgroundRepeat: 'no-repeat',
          //     backgroundSize:'cover'
          //   }}
          className="w-full h-[50%] sm:h-[70%] lg:h-[65%] absolute top-0 rounded-2xl card-header   z-0 flex justify-center "
        >
          <h1 className="text-3xl sm:text-4xl font-bold mt-24  text-white text-center px-5">
            Please register, Its <br />{" "}
            <div className="text-5xl sm:text-6xl -rotate-6 text-[#ff7c2b]">
              Easy!!
            </div>
          </h1>
        </div>

        <div className=" p-5 rounded-2xl w-full sm:w-[500px] lg:w-[800px] z-10 bg-white">
          <form onSubmit={handleRegister}>
            <div className="flex flex-col sm:flex-row sm:gap-5 items-center w-full">
              <div className="w-full">
                <label htmlFor="mail" className="block text-xl font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="w-full  outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-xl font-semibold mt-6 sm:mt-0"
                  htmlFor="pass"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="https//:your-photo-link"
                  className="w-full outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-5 items-center sm:mt-6 w-full">
              <div className="w-full mt-6 sm:mt-0">
                <label htmlFor="mail" className="block text-xl font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="mail"
                  placeholder="your@mail.com"
                  className="w-full  outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
                />
              </div>
              <div className="w-full mt-6 sm:mt-0">
                <label className="block text-xl font-semibold " htmlFor="pass">
                  Password <span className="text-red-600">*</span>
                </label>
                <div className="h-fit mt-4 relative">
                  <input
                    required
                    type={passFieldType}
                    name="pass"
                    placeholder="S/tR-o*N-g"
                    className="w-full outline-none bg-[#F3F3F3] rounded-md p-3 "
                  />
                  <FaRegEye
                    className={`absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer ${
                      show ? "hidden" : ""
                    }`}
                    onClick={() => {
                      setShow(true);
                      setPassFieldType("text");
                    }}
                  />
                  <FaRegEyeSlash
                    className={`absolute top-1/2 -translate-y-1/2 right-3 text-xl cursor-pointer ${
                      show ? "" : "hidden"
                    }`}
                    onClick={() => {
                      setShow(false);
                      setPassFieldType("password");
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              className="block w-full mt-7 py-3 border rounded-lg border-green-700 text-xl font-medium hover:bg-green-700 hover:text-white duration-150"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-center font-medium">
            Already an account?{" "}
            <Link className="text-[#F75B5F] font-semibold" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
