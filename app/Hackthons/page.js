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
      "More than just a competition, the hackathon turned into a celebration with all my amazing friends cheering us on. Their visit made the experience even more memorable and fun!",
      name: "The Real MVPs – Moral Support Team",
      designation: "Support Squad | amBITion24 – AI/ML Hackathon",
      src: assets.bit_1,
    },
    {
      quote:
      "Meet our team: united not just by code, but by the eternal struggle of missing semicolons. Vishal was our logic whisperer, Aditya tackled APIs like a beast, Kavana kept the energy (and snacks) going, and Sanyukta balanced brainstorming with sneakily timed power naps — but still nailed it when the judges came around with questions.We wrote more code than we thought we could, found bugs we didn’t know existed, and somehow held it all together with caffeine, chaos, and just enough brain cells to finish strong.",
      name: "Team: MAVRICKS!!!",
      designation: "Built on Logic, Laughter & Last-Minute Fixes",
      src: assets.bit_2,
      
    },
    {
      quote:
      "This piece of paper may look calm, but behind it was 24 hours of pure brain-frying madness. It’s not just a certificate — it’s proof we showed up, stayed up, and shipped something (eventually).",
      name: "Certificate of Survival",
      designation: "amBITion24 Hackathon | AI/ML Track – BIT, Bengaluru",
      src: assets.bit_certificate,
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
     
        <AnimatedTestimonials testimonials={testimonials} />;
    </div>
  )
}

export default page





 