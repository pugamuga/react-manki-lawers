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
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimotionals.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" relative lg:mt-[34px] before:content-quote p-8">
                <div>
                  <p>{item.text}</p>
                  <div className="flex items-center mt-[18px] mb-8">
                    <img
                      src={item.image}
                      alt="img"
                      className="object-cover h-16 w-16 rounded-full"
                    />
                    <div className="ml-4">
                      <h6 className="font-bold">{item.name}</h6>
                      <p className="text-xs">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimotionalsSlider;
