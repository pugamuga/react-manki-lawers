import React from "react";
import { testimotionals } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../TestimotionalsSlider.css";
import { Autoplay, Pagination } from "swiper";

const TestimotionalsSlider = () => {
  return (
    <>
      <Swiper pagination={{ dynamicBullets: true, clickable: true }}></Swiper>
    </>
  );
};

export default TestimotionalsSlider;
