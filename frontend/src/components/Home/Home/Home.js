import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import OurLatestWork from '../OurLatestWork/OurLatestWork'
import ContactUs from '../ContactUsSection/ContactUs'



const Home = () => {
  return (
    <div>
    <Banner/>
    <OurLatestWork/>
    <ContactUs/>
    </div>
  )
}

export default Home
