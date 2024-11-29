import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Review from "./Review";

const slides = [
  { id: 1, color: "#845ec2", text: "Slide 1" },
  { id: 2, color: "#0081cf", text: "Slide 2" },
  { id: 3, color: "#4b4453", text: "Slide 3" },
  { id: 4, color: "#008b74", text: "Slide 4" },
];

const Slider = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        mousewheel={true}
        // slidesPerView={3}
        spaceBetween={10}
        loop={true}
        onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide
            key={idx}
            // style={{ height: "50vh" }}
            className="px-1"
          >
            <Review name={review.name} description={review.description} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center py-8">
        <div className="flex gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`size-2.5 rounded-full ${
                idx === activeIndex
                  ? "bg-gray-700 border border-slate-700"
                  : "border border-slate-400"
              }`}
              onClick={() => {
                setActiveIndex(idx);
                swiperRef.current.swiper.slideToLoop(idx);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
