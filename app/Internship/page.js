"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials";
import { assets } from '@/assets/assets';
import { IconArrowLeft } from '@tabler/icons-react';
 const testimonials = [
    {
      quote:
        "This certificate represents my internship experience at EBTS, where I worked on a Machine Learning project centered around real-world data and end-to-end model building. Throughout the internship, I applied core ML concepts such as data preprocessing, model training, and performance evaluation, while gaining practical exposure to selecting suitable algorithms, fine-tuning models, and interpreting results using key metrics in a professional setting.",
      name: " Intern Mode: Activated",
      designation: "Machine Learning Intern | EBTS",
      src: assets.intern,
    },
 
  ];
const page = () => {
  return (
    <div>
     <Link href={"/#services"} >
      <button
              
              className="group/button flex h-7 w-28 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 m-7">
              <IconArrowLeft
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400 mr-2" /> Back
                
            </button>
            
      </Link>
      {/* 
      
      heyyy  okayyy naaaa ..????? //ahh wait
      edit madtha idhini 

      chang idheeee
      nodu once
      */} 
     
        <AnimatedTestimonials testimonials={testimonials} />;
    </div>
  )
}

export default page





 