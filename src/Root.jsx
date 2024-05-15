import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const Root = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
