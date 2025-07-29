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
        "This certificate marks my official entry into the world of cloud and data — courtesy of Microsoft and a whole lot of late-night study sessions. The Azure Data Fundamentals certification wasn't just about ticking boxes; it taught me how data flows, stores, and scales in the cloud (and how to pronounce “SQL” without starting a debate).It may look simple on paper, but behind it were video lectures, practice tests, and a small existential crisis during the exam. Now I can proudly say: I’ve got the fundamentals covered",
      name: " Cloud, Calm & Certified",
      designation: "Microsoft Certified | Azure Data Fundamentals",
      src: assets.azure_certificate_1,
    },
    {
      quote:
        "During this workshop, I explored the fundamentals of data analytics — learning how to organize, clean, and analyze messy datasets. It gave me hands-on experience with tools, techniques, and a much deeper respect for pivot tables.",
      name: "Excel-lent Adventure",
      designation: "Data Analytics Basics | Certified (and Survived)",
      src: assets.azure_certificate_2,
      
    },
    {
      quote:
      "The badge that says: “Yes, I understand the cloud — and no, I don’t mean the one in the sky.” This official Microsoft Certified emblem might be small, but behind it are hours of studying, cloud concepts, data diagrams, and the soul-searching moment of clicking “Submit Exam.” Now I wear it like armor — certified to handle Azure (and humble enough to admit I still Google things).",
      name: "Microsoft Approved™",
      designation: "Microsoft Certified Badge | Azure Data Fundamentals",
      src: assets.azure_certificate_3,
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





 