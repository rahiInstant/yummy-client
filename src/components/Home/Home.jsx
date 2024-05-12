import Banner from "./Banner";
import Customer from "./Customer";
import LatestNews from "./LatestNews";
import TopFood from "./TopFood";

const Home = () => {
    return (
        <div className="  ">
            <Banner/>
            <TopFood/>
            <LatestNews/>
            <Customer/>
        </div>
    );
};

export default Home;