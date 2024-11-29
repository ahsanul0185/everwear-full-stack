import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { RiArrowLeftSLine, RiMenuLine, RiSearchLine, RiShoppingBagLine, RiUserLine } from "@remixicon/react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const {search, setSearch, showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

  const handleLogout = () => {
      localStorage.removeItem('token');
      setToken('');
      setCartItems({});
      navigate("/login");
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium section-padding z-[999]">
      <Link to={'/'}>
      <img src={assets.logo} alt="logo" className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div onClick={() => navigate("/collection")} className={`relative ${showSearch ? "hidden lg:block" : "block"}`}>
     
          <RiSearchLine onClick={() => setShowSearch(true)} className="text-gray-500 static lg:absolute lg:left-1.5 lg:top-1/2 lg:-translate-y-1/2 size-5 cursor-pointer"/>
   
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="hidden lg:block py-1 pl-8 pr-1 outline-none border focus:border  border-gray-400 text-gray-700" />
        </div>
        <div className="group relative">
          <div onClick={() => token ? null : navigate("/login")} className="text-gray-700 cursor-pointer mt-1">
            {token ? <RiUserLine /> : <button className="bg-black text-white px-3 py-1">Login</button>}
          </div>

          {
            token && <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-8 -translate-y-5  z-[999]">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={handleLogout} className="cursor-pointer hover:text-black"> Logout</p>
            </div>
          </div>
          }
        </div>

        <Link to="/cart" className="relative">
          <RiShoppingBagLine className="text-gray-700" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

          <RiMenuLine onClick={() => setVisible(true)} className="text-gray-700 cursor-pointer sm:hidden"/>
      </div>

      {/* Sidebar menu for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 z-[999] overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div  onClick={() => setVisible(false)} className="flex items-center gap-1 p-3 cursor-pointer" >
              <RiArrowLeftSLine className="mt-[1.5px]" />
              <p>Back</p>
            </div>  
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
