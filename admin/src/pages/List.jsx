import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { backendUrl, currency } from "../App";
import {toast} from 'react-toastify';
import {RiDeleteBin7Line} from '@remixicon/react'


const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.payload)
      }else{
        toast.error(response.data.message);
      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/product/remove", {data : {id}, headers : {token}});
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return <>
    <p className="mb-2">All Products List</p>
    <div className="flex flex-col gap-2">
      {/* ------List Table Title------- */}

      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* ------Product List------- */}
      {list.map((item, idx) => (
        <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={item._id}>
          <img className="w-12" src={item.image[0]} alt="product image" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency} {item.price}</p>
          <p onClick={() => removeProduct(item._id)} className="text-center cursor-pointer mx-auto"><RiDeleteBin7Line /></p>
        </div>
      ))}

    </div>
  </>;
};

export default List;