import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebooks from '../components/Freebooks'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      {/* Main Content */}
      <div className="grow">
        <Banner />
      </div>
      <Freebooks/>
      <Footer />

    </div>
  )
}

export default Home
