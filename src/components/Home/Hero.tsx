"use client"
import React, { useState } from 'react'
import ImageHero from "@/data/hero.json"
import Image from 'next/image';
import {Button} from "@heroui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function HeroHome() {
    const [currentSlide , setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % ImageHero.length);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + ImageHero.length) % ImageHero.length);
    };
    
    return (
        <div className='w-full h-full'>
            {/* Carousel Section */}
            <div className="relative">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <Image 
                        src={ImageHero[currentSlide].img} 
                        alt="Featured Product" 
                        width={90000}
                        height={90000} 
                        className="object-bottom w-full h-[70vh] "
                        unoptimized={true}
                    />
                </div>
                <div className="absolute inset-0 flex justify-between items-center ">
                    <Button 
                        
                        onPress={prevSlide} 
                        className="text-pink-500 p-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full"
                    >
                        <FaArrowLeft size={24} />
                    </Button>

                    {/* Right Button */}
                    <Button 
                        
                        onPress={nextSlide} 
                        className="text-pink-500 p-2 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full"
                    >
                         <FaArrowRight size={24} />
                    </Button>
                </div>
                <div className="text-center mt-5 absolute top-40 right-36">
                    <h2 className="text-3xl font-bold text-gray-900">{ImageHero[currentSlide].title}</h2>
                </div>
            </div>
           
        </div>
    );
}
