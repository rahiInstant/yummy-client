import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="h-[60px] bg-slate-500 flex justify-between items-center px-4">
      <div>Recipe Net</div>
      <div>
        <input className="hidden" type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="hidden">
          <RxHamburgerMenu />
        </label>
        <div className="flex flex-row items-center">
          <label htmlFor="sidebar-active" className="hidden">
            <RxCross1 />
          </label>
          <a className="px-5 flex items-center" href="#">Home</a>
          <a className="px-5 flex items-center" href="#">About</a>
          <a className="px-5 flex items-center" href="#">Blog</a>
          <a className="px-5 flex items-center" href="#">Order</a>
          <a className="px-5 flex items-center" href="#">Profile</a>
        </div>
      </div>
      <div>
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </nav>
  );
};

export default Navbar;
