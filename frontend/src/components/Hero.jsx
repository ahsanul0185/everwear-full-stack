import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1] pt-5">
     <div className="section-padding flex flex-col md:flex-row items-center">
         {/* Hero left side */}
      <div className="md:w-1/2 order-2 md:order-1 pb-5">
        <h2 className="text-4xl mt-5 lg:text-5xl  philosopher-bold">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h2>
        <p className="text-gray-500 my-5">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="py-2 px-4 bg-black text-white">Shop Now</button>

        <div className="flex items-start md:items-center gap-8 mt-8 flex-wrap sm:hidden lg:flex">
          <div>
            <h3 className="text-3xl md:text-2xl lg:text-4xl font-medium">200+</h3>
            <p className="text-gray-500 whitespace-nowrap mt-1">International Brands</p>
          </div>
          <span className="hidden lg:block w-[1.5px] h-20 bg-gray-300"></span>
          <div>
            <h3 className="text-3xl md:text-2xl lg:text-4xl font-medium">2,000+</h3>
            <p className="text-gray-500 whitespace-nowrap mt-1">High-Quality Products</p>
          </div>
          <span className="hidden lg:block w-[1.5px] h-20 bg-gray-300"></span>

          <div>
            <h3 className="text-3xl md:text-2xl lg:text-4xl font-medium">30,000+</h3>
            <p className="text-gray-500 whitespace-nowrap mt-1">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="relative md:shrink-0  md:basis-1/2 h-1/2 md:h-[60vh] lg:h-[80vh] overflow-clip order-1 md:order-2">
        <img src={assets.hero_img} alt="fashion image" className="w-11/12 sm:w-full lg:w-11/12 md:absolute right-0 bottom-0"/>
      </div>
     </div>
    </div>
  );
};

export default Hero;
