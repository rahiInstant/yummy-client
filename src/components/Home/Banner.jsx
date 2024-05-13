import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const Banner = () => {
  const Slider = (image, title, description) => {
    return (
      <div
        className={`h-[800px] flex items-end lg:items-center justify-center lg:justify-start  w-full text-green-900  relative ${image} bg-cover bg-center font-Poppins`}
      >
        <div className="lg:text-start text-center bg-[#1d1c1c7e] p-4 pb-12 sm:p-8 sm:pb-12 md:p-10 lg:p-12 lg:w-[700px] xl:w-[900px] flex flex-col items-center lg:items-start lg:ml-24 mt-10 text-white ">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[75px] font-black">
            {title}
          </h1>
          <p className="font-medium sm:font-semibold sm:text-lg  mt-3 md:mt-4">
            {description}
          </p>
          <Link to="/all-food">
          <button className="px-6 py-4 mt-5 sm:mt-7 rounded-lg border-2 text-lg hover:text-[#1f1e1e] font-semibold border-[#d3d3d3] hover:bg-[#ececec93] duration-150">
            See All Yummy
          </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className=" -z-50 ">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        loop={true}
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        <SwiperSlide>
          {Slider(
            "bg-[url('/slide_05.jpg')]",
            "Special Chicken Biriyani",
            `Indulge in our Special Chicken Biryani, a fragrant blend of spices,
            tender chicken, and aromatic Basmati rice, cooked to perfection. A
            culinary delight that satisfies cravings with every flavorful bite.`
          )}
        </SwiperSlide>
        <SwiperSlide>
          {Slider(
            "bg-[url('/slide_02.jpg')]",
            "Juicy grilled chicken",
            `Juicy grilled chicken nestled in warm, freshly baked bread. A delightful 
            fusion of flavors and textures that satisfies with every bite. Perfect for a 
            quick and satisfying meal on the go.`
          )}
        </SwiperSlide>
        <SwiperSlide>
          {Slider(
            "bg-[url('/slide_09.jpg')]",
            "Lemon Garlic Shrimp",
            `Indulge in zesty lemon garlic shrimp—a burst of flavors in every bite. 
            Succulent shrimp marinated in tangy lemon and aromatic garlic, a tantalizing 
            dish that promises to awaken your taste buds.`
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
