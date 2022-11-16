import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668619891/ciclek/slide1_dmeufd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668619892/ciclek/slide3_uof3jz.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1668619891/ciclek/slide1_dmeufd.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
