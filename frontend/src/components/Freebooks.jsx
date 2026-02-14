import React from 'react'
import Slider from "react-slick"
import List from '../assets/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Freebooks = () => {

  const filterData = List.filter((data) => data.category === "Free")

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-16'>

      {/* Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Take a Look at our <span className='text-pink-500'>Free Books</span>
        </h1>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {filterData.map((book) => (
          <div key={book.id} className='px-3'>
            <div className='border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 bg-white'>
              
              <img 
                src={book.image} 
                alt={book.name}
                className='w-full h-48 object-cover rounded-md mb-4'
              />


              <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
                {book.description}
              </p>
              <h2 className='text-xl font-bold mb-2 text-red-500'>{book.name}</h2>

              <div className='flex justify-between items-center'>
                <span className='text-green-600 font-bold'>₹{book.price}</span>
                <span className='bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded'>
                  {book.category}
                </span>
              </div>

            </div>
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default Freebooks
