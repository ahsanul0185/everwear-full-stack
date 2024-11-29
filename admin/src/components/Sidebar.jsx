import React from "react";
import { NavLink } from "react-router-dom";
import { RiAddCircleLine, RiListUnordered, RiListCheck3 } from "@remixicon/react";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink to="/add" className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <RiAddCircleLine className="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink to="/list" className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <RiListUnordered className="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink to="/orders" className="flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
          <RiListCheck3 className="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
