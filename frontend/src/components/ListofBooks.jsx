import React from 'react'
import List from '../assets/list.json'

const ListofBooks = () => {

  return (
    <div className='py-16'>

      {/* Heading */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Our <span className='text-pink-500'>Books Collection</span>
        </h1>
        <p className='mt-4 text-gray-600'>
          Explore all available books below.
        </p>
      </div>

      {/* Books Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {List.map((book) => (
          <div 
            key={book.id}
            className='border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 bg-white'
          >

            <img
              src={book.image}
              alt={book.name}
              className='w-full h-48 object-cover rounded-md mb-4'
            />

            <h2 className='text-lg font-semibold mb-2 text-amber-500'>
              {book.name}
            </h2>

            <p className='text-sm text-gray-600 mb-3 line-clamp-3'>
              {book.description}
            </p>

            <div className='flex justify-between items-center'>
              <span className='font-bold text-green-600'>
                ₹{book.price}
              </span>

              <span className={`text-xs px-2 py-1 rounded ${
                book.category === "Free"
                  ? "bg-green-100 text-green-600"
                  : "bg-pink-100 text-pink-600"
              }`}>
                {book.category}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default ListofBooks
