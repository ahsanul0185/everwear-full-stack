import React from 'react'
import Title from '../utils/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Slider from '../utils/Slider';

const reviews = [
    {
      name: "Emma Thompson",
      description: "Absolutely in love with my new dress! The fabric feels luxurious, and the fit is perfect. I've already received so many compliments. Can't wait to shop here again!"
    },
    {
      name: "Liam Carter",
      description: "I was hesitant to buy online, but the quality exceeded my expectations. The customer service team was super helpful in guiding me through sizing. Highly recommend!"
    },
    {
      name: "Sophia Martinez",
      description: "The collection is fantastic! Found exactly what I needed for a formal event. The design and details are stunning, and the shipping was fast. Thank you!"
    },
    {
      name: "Olivia Brown",
      description: "Finally found a brand that combines comfort and style! Every piece I've bought has been top-notch quality. I’m definitely a fan for life."
    },
    {
      name: "Noah Wilson",
      description: "Excellent customer experience! The website was easy to navigate, and my order arrived on time. The clothes fit perfectly and are true to the photos online."
    },
    {
      name: "Ava Johnson",
      description: "I’m obsessed with the collection! The styles are trendy yet timeless. My latest purchase has become my go-to outfit. Already looking forward to my next buy."
    },
    {
      name: "Ethan Davis",
      description: "Great quality, and the prices are reasonable for what you get. The shirt I bought feels durable and looks fantastic. I will be buying more items soon!"
    },
    {
      name: "Mia Gonzalez",
      description: "Beautiful craftsmanship! The dress I ordered is flawless and fits me like a glove. Highly satisfied with both the quality and service."
    }
  ];
  

const HappyCustomers = () => {
  return (
    <div className='section-padding'>
      <div className="text-center py-8 text-3xl">
        <Title text1="HAPPY" text2="CUSTOMERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        See what our customers say about us</p>
      </div> 
        {/* slider */}
        <Slider reviews={reviews} />
    </div>
  )
}

export default HappyCustomers
