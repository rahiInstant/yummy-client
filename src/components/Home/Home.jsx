import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Customer from "./Customer";
import LatestNews from "./LatestNews";
import TopFood from "./TopFood";

const Home = () => {
  return (
    <div className="  ">
      <Helmet>
        <title>Yummy | Home</title>
      </Helmet>
      <Banner />
      <TopFood />
      <LatestNews />
      <Customer />
    </div>
  );
};

export default Home;
