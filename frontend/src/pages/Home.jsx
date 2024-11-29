import React from 'react'
import Hero from '../components/Hero'
import Scroller from '../components/Scroller'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import HappyCustomers from '../components/HappyCustomers'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Scroller />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <HappyCustomers />
      <NewsletterBox />
    </div>
  )
}

export default Home
