import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
// import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  const navLinks = [
    { navText: "Home", path: "/", id: 1 },
    { navText: "All Food", path: "/all-food", id: 2 },
    { navText: "Gallery", path: "/gallery", id: 3 },
  ];
  const navClassName = `
  lg:h-full  items-center cursor-pointer justify-between 
  lg:justify-center px-7 lg:border-t-0  border-t  border-[#d18937] 
  flex w-full lg:w-auto hover:bg-[#d18937] lg:hover:bg-[#ffffff31] 
  duration-200 lg:items-center  py-5 lg:py-0
  `;
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  function handleLogout() {
    logOut()
      .then(() => {
        successMsg("Logout successfully!!");
      })
      .catch((error) => {
        errorMsg("failed to logout!!");
        console.log(error);
      });
  }
  console.log(drop);
  return (
    <nav className="  h-[85px] backdrop-blur-xl bg-[#63626257] fixed top-0 left-0  w-full z-20 flex justify-between items-center px-4 lg:px-10 ">
      <div className="flex items-center gap-3 ">
        {/* <input className="hidden" type="checkbox" id="sidebar-active left-1/2  -translate-x-1/2" /> */}
        <label
          onClick={() => isOpen(!open)}
          htmlFor="sidebar-active"
          className="lg:hidden block cursor-pointer p-2 text-xl bg-[#d6801d] text-[#f1f1f1]"
        >
          <RxHamburgerMenu />
        </label>
        {/* <span className="text-[#e9812c]">R</span>ecipe#ff820e <span className="text-[#e9812c]">N</span>et #302f2f*/}
        <div
          style={{ textShadow: "2px 2px 15px #302f2f" }}
          className="text-[40px] font-bold text-[#ff9f30] font-super space-x-1 px-3 py-1 "
        >
          Yummy Net
        </div>
      </div>
      <div
        className={`${
          open ? "left-[0%]" : "-left-[100%]"
        }  duration-700 items-center lg:flex lg:h-full shadow-[5px_0_5px_#00000040] text-[#181717] text-lg font-medium lg:shadow-none w-[250px] lg:bg-transparent bg-[#b66d1a]  h-screen  z-50 fixed lg:static top-0  lg:w-auto flex-col  lg:flex-row  `}
      >
        <div className="lg:hidden flex"></div>
        <div className="flex justify-end">
          <label
            onClick={() => isOpen(!open)}
            htmlFor="sidebar-active"
            className=" m-3 p-2 flex w-fit justify-end  text-xl bg-[#e48921]  cursor-pointer lg:hidden text-[#383636]"
          >
            <RxCross1 />
          </label>
        </div>
        {navLinks.map((item, id) => {
          return (
            <NavLink className="h-full" to={item.path} key={id}>
              <div className={navClassName}>
                <div className="">{item.navText}</div>
                <div className="text-xl lg:hidden">
                  <IoIosArrowForward />
                </div>
              </div>
            </NavLink>
          );
        })}
        <div className="block lg:hidden mx-4 mt-4 text-center">
          {user ? (
            <div
              onClick={handleLogout}
              className="text-xl  text-white font-medium py-2 px-5  hover:bg-[#3b3b3b59]   border border-white rounded-lg  duration-200"
            >
              Log out
            </div>
          ) : (
            <Link to="/login">
              <div className="text-xl  text-white font-medium py-2 px-5  hover:bg-[#3b3b3b59]  border border-white rounded-lg  duration-200 ">
                Log in
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute ${
            drop
              ? "opacity-100 top-[75px] pointer-events-auto"
              : "opacity-0 top-[90px] pointer-events-none"
          }  w-[200px] border-2 duration-300  right-5  rounded-md bg-[#ffffff] text-[#1a1919]`}
        >
          <Link to={`/my-added-items/${user?.email}`}>
            <div className="p-3 hover:bg-[#b3b3b344] border-b border-[#bebebe] cursor-pointer">
              My Items
            </div>
          </Link>
          <Link to={`/my-ordered-items/${user?.email}`}>
            <div className="p-3 hover:bg-[#b3b3b344] border-b border-[#bebebe] cursor-pointer">
              My Order
            </div>
          </Link>
          <Link to="/add-item">
            <div className="p-3 hover:bg-[#b3b3b344]  cursor-pointer">
              Add Item
            </div>
          </Link>
        </div>
        {user ? (
          <div className=" items-center gap-5 flex ">
            <div className="">
              <img
                onClick={() => setDrop(!drop)}
                src={user.photoURL}
                className="rounded-full border-2 w-10 h-10 cursor-pointer"
                alt=""
              />
            </div>
            <div
              onClick={handleLogout}
              className="text-xl cursor-pointer  text-white font-medium py-2 px-5  hover:bg-[#3b3b3b59] hidden lg:flex  border border-white rounded-lg  duration-200"
            >
              Log out
            </div>
          </div>
        ) : (
          <div className=" items-center gap-5 hidden lg:flex">
            <Link to="/login">
              <div className="text-xl  text-white font-medium py-2 px-5  hover:bg-[#3b3b3b59]  border border-white rounded-lg  duration-200 ">
                Log in
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
