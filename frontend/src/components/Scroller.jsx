import React, { Fragment } from "react";
import { brands } from "../assets/assets";

const Scroller = () => {
  return (
    <div className="py-6 overflow-x-clip border-b border-t border-gray-500">
      <div className="inline-flex pl-20 gap-20 animate-scrollLeft w-max">
        {[
          ...new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {brands.map((brand, idx) => {
                return (
                  <div key={idx}>
                    <img
                    src={brand}
                    className="w-36 h-10 shrink-0 text-white text-2xl "
                  />
                  </div>
                );
              })}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
};

export default Scroller;
