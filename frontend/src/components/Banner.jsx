import React from 'react'
import HeroSection from '../assets/HeroSection.jpg'
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row space-y-8 md:space-y-0'>
                
                {/* Left Section */}
                <div className='order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12'>
                    
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold'>
                            Good To See You Come Here To Learn Something 
                            <span className='text-pink-500'> new everyday</span>
                        </h1>

                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores sapiente laboriosam ducimus nostrum inventore vero expedita laborum ipsam quo itaque amet error accusamus facere. Perferendis obcaecati voluptatum dolor assumenda.
                        </p>
                    </div>

                    <div className='mt-8 w-full'>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            
                            <input 
                                type="email" 
                                placeholder="krishna@gmail.com"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />

                            <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                                Join
                            </button>

                        </div>
                    </div>

                </div>

                <div className=' order-1 md:order-2 w-full md:w-1/2 md:m-20'>
                    <img src={HeroSection} className='w-140 h-92'></img>
                </div>

            </div>
        </>
    )
}

export default Banner
