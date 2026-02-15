import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ListofBooks from './ListofBooks'

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className='pt-24 flex-grow container mx-auto max-w-screen-2xl px-4 md:px-20'>
        <ListofBooks/>
      </div>

      <Footer />
    </div>
  )
}


export default Book
