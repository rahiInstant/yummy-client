import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../auth/AuthContext";
import toast from "react-hot-toast";


const Login = () => {
  const [show, setShow] = useState(false);
  const [passFieldType, setPassFieldType] = useState("password");
  const [title, setTitle] = useState("Nest | login");
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  function handleSignIn(e) {
    e.preventDefault();
    const email = e.target.mail.value;
    const password = e.target.pass.value;

    signInUser(email, password)
      .then(() => {
        successMsg("Successfully sign in!!. Redirecting...");
        setTitle("Redirecting...");
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  function handleGoogleSignIn() {
    googleSignIn()
      .then(() => {
        successMsg("Successfully sign in with Google!!");
        setTitle("Redirecting...");
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  function handleGithubSignIn() {
    githubSignIn()
      .then(() => {
        successMsg("Successfully sign in with Github!!");
        setTitle("Redirecting...");
        setTimeout(() => {
          toast.dismiss();
          navigate(location.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }
  return (
    <div className="  flex items-center justify-center h-full  select-none mt-36">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="w-full sm:w-fit mx-4 border-slate-400 border  rounded-2xl flex flex-col  items-end relative">
        <div className="min-h-[320px]"></div>
        <div className="w-full h-[55%] sm:h-[70%] lg:h-[65%] absolute top-0 rounded-2xl card-header   z-0 flex justify-center ">
          <h1 className="text-5xl sm:text-6xl font-bold mt-24 text-[#ff7c2b]  text-center px-5">
            Welcome
            <br />{" "}
            <div className="text-4xl sm:text-5xl -rotate-6 text-white">
              Back!!
            </div>
          </h1>
        </div>

        <div className=" p-5 rounded-2xl h-[55%] w-full sm:w-[500px] lg:w-[800px] z-10 bg-white">
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col sm:flex-row sm:gap-5 items-center sm:mt-6 w-full">
              <div className="w-full">
                <label htmlFor="mail" className="block text-xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="mail"
                  placeholder="your@mail.com"
                  className="w-full  outline-none bg-[#F3F3F3] rounded-md p-3 mt-4"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-xl font-semibold mt-6 sm:mt-0"
                  htmlFor="pass"
                >
                  Password
                </label>
                <div className="h-fit mt-4 relative">
                  <input
                    type={passFieldType}
                    name="pass"
                    placeholder="P/ass*wor-d"
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
              className="block text-xl w-full mt-7 py-3 border rounded-lg border-green-700  font-medium hover:bg-green-700 hover:text-white duration-150"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <div className="flex flex-row gap-5 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className=" w-full flex text-xl items-center justify-center gap-2 py-3 border rounded-lg border-green-700  font-medium hover:bg-green-700 hover:text-white duration-150"
              type="submit"
            >
              <IoLogoGoogle className="text-3xl" />
              Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="flex  items-center justify-center gap-2 w-full  py-3 border rounded-lg border-green-700 text-xl font-medium hover:bg-green-700 hover:text-white duration-150"
              type="submit"
            >
              <FaGithub className="text-3xl" />
              Github
            </button>
          </div>
          <p className="mt-4 text-center font-medium">
            Haven't any account?{" "}
            <Link className="text-[#F75B5F] font-semibold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
