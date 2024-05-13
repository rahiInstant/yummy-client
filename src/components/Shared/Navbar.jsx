import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
// import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  // console.log(open);
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
        {/* <a className={navClassName} href="#"></a>
        <a className={navClassName} href="#">
          <div className="">About </div>
          <div className="text-xl lg:hidden">
            <IoIosArrowForward />
          </div>
        </a>
        <a className={navClassName} href="#">
          <div className="">Blog </div>
          <div className="text-xl lg:hidden">
            <IoIosArrowForward />
          </div>
        </a>
        <a className={navClassName} href="#">
          <div className=""> Order</div>
          <div className="text-xl lg:hidden">
            <IoIosArrowForward />
          </div>
        </a>
        <a className={navClassName} href="#">
          <div className="">Profile </div>
          <div className="text-xl lg:hidden">
            <IoIosArrowForward />
          </div>
        </a> */}
      </div>
      <div>
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </nav>
  );
};

export default Navbar;
