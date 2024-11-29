import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../utils/Title';
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    // const [state, setState] = useState([]);

    // useEffect(() => {
    //     const bestProduct = products.filter((item) => (item.bestseller));
    //     setBestSeller(prev => [...prev, ...BestSeller.bestProduct.slice(0, 5)]);
    //     console.log(bestSeller) 
    // }, []);
    useEffect(() => {
        const bestProduct = products.filter(item => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])
    
  return (
    <div className='my-10 section-padding'>
      <div className='text-center text-3xl py-8'>
        <Title text1="BEST" text2="SELLERS"/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> Browse through our Best Sellers, the most popular styles loved by our community.</p>
      </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, idx) => (
                    <ProductItem key={idx} name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller
