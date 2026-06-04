import React from 'react'
import Hero from './Hero'
import BookingBar from './BookingBar'
import Facilities from './Facilities'
import Rooms from './Rooms'
import AboutSection from './AboutSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <BookingBar/>
      <Facilities/>
      <Rooms/>
      <AboutSection/>
    </div>
  )
}

export default Home