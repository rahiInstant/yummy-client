import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [open, isOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <nav className="  h-[60px] bg-slate-500 z-20 flex justify-between items-center px-4">
        <div className="flex items-center gap-3 ">
          {/* <input className="hidden" type="checkbox" id="sidebar-active" /> */}
          <label
            onClick={() => isOpen(!open)}
            htmlFor="sidebar-active"
            className="lg:hidden block cursor-pointer p-2 text-xl bg-slate-400"
          >
            <RxHamburgerMenu />
          </label>

          <div>Recipe Net</div>
        </div>
        <div
          className={`${
            open ? "left-[0%]" : "-left-[50%]"
          }  duration-500  lg:flex shadow-[5px_0_5px_#00000040] lg:shadow-none w-[250px] lg:bg-transparent bg-slate-200  h-full z-50 fixed lg:static l top-0  lg:w-auto flex-col  lg:flex-row  `}
        >
          <div className="flex justify-end">
            <label
              onClick={() => isOpen(!open)}
              htmlFor="sidebar-active"
              className=" m-3 p-2 flex w-fit justify-end  text-xl bg-slate-400 cursor-pointer lg:hidden"
            >
              <RxCross1 />
            </label>
          </div>
          <a
            className=" items-center justify-between  px-7 lg:border-none border-t  border-slate-100 lg:h-full flex w-full lg:w-auto hover:bg-slate-400 lg:items-center py-5 "
            href="#"
          >
            <div className=""> Home</div>
            <div className="text-xl lg:hidden">
              <IoIosArrowForward />
            </div>
          </a>
          <a
            className=" items-center justify-between  px-7 lg:border-none border-t  border-slate-100 lg:h-full flex w-full lg:w-auto hover:bg-slate-400 lg:items-center py-5 "
            href="#"
          >
            <div className="">About </div>
            <div className="text-xl lg:hidden">
              <IoIosArrowForward />
            </div>
          </a>
          <a
            className=" items-center justify-between  px-7 lg:border-none border-t  border-slate-100 lg:h-full flex w-full lg:w-auto hover:bg-slate-400 lg:items-center py-5 "
            href="#"
          >
            <div className="">Blog </div>
            <div className="text-xl lg:hidden">
              <IoIosArrowForward />
            </div>
          </a>
          <a
            className=" items-center justify-between  px-7 lg:border-none border-t  border-slate-100 lg:h-full flex w-full lg:w-auto hover:bg-slate-400 lg:items-center py-5 "
            href="#"
          >
            <div className=""> Order</div>
            <div className="text-xl lg:hidden">
              <IoIosArrowForward />
            </div>
          </a>
          <a
            className=" items-center justify-between  px-7 lg:border-none border-t  border-b  border-slate-100 lg:h-full flex w-full lg:w-auto hover:bg-slate-400 lg:items-center py-5 "
            href="#"
          >
            <div className="">Profile </div>
            <div className="text-xl lg:hidden">
              <IoIosArrowForward />
            </div>
          </a>
        </div>
        <div>
          <div className="h-10 w-10 rounded-full bg-white"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
