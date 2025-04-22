import React, { useState } from 'react'
import { descriptions, images } from './data'
import { ArrowLeft, ArrowRight } from 'lucide-react';

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

const Slider = () => {

    const [firstImage, setFirstImage] = useState(0);

    return (
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from=[#1a0526] via-purple-400 to-[#1a0526]'>
            {/* slider */}
            <div className='flex gap-x-20 lg:items-start items-center lg:flex-row flex-col'>
                {/* images  */}
                <div className='sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-700 ${index === firstImage ? "activeImage" : "inactiveImage"}`}
                            style={{transform: `rotate(${firstImage === index ? 0 : getRandomNumber()}deg)`}}
                        />
                    ))}</div>
                {/* description */}
                <div className='relative sm:w-[400px] w-[320px] mt-22 lg:mt-5'>{descriptions.map((desc, index) => (
                    <p
                        key={index}
                        className={`text-center sm:text-xl text-gray-400 absolute transition-all duration-400 ${index === firstImage ? "activeDesc" : "inactiveDesc"}`}
                    >{desc}</p>
                ))}</div>
            </div>
            {/* controls */}
            <div className='absolute bottom-0 lg:bottom-26 left-1/2 -translate-1/2 flex gap-x-5'>
                <button
                    className='bg-gray-200 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-300 transition-colors'
                    onClick={() => setFirstImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                >
                    <ArrowLeft size={12} />
                </button>
                <button
                    className='bg-gray-200 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-300 transition-colors'
                    onClick={() => setFirstImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                >
                    <ArrowRight size={12} />
                </button>
            </div>
        </div>
    )
}

export default Slider