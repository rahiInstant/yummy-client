import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=" -z-50 ">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[800px] w-full text-green-900  relative bg-[url('/slide_04.jpg')] bg-cover bg-center font-Poppins`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[800px] w-full text-green-900   relative bg-[url('/slide_02.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[800px] w-full text-green-900   relative bg-[url('/slide_07.jpg')] bg-cover bg-center`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
