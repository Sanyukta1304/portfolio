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
      "This moment captured the heart of the hackathon — our team standing confidently (and slightly sleep-deprived), presenting our prototype to the panel of judges. While one of us handled the technical explanation, the others backed it up with visuals, flow, and real-world use cases. Despite the time crunch, we communicated our idea with clarity and teamwork, answering every judge’s question with confidence.It wasn’t just about code — it was about telling the story behind it.",
      name: " Finalist Story – Atria Hackathon",
      designation: "8-Hour AI/ML Hackathon | Atria Institute of Technology",
      src: assets.atria_1,
    },
    {
      quote:
      "From confused sign detection to real-time recognition — we spent 8 hours turning hand movements into meaning. This photo was taken just after our pitch, where we presented a project designed to bridge communication gaps for the speech and hearing impaired. And yes, we smiled like we slept.Our effort didn’t just work — it spoke volumes. We were proud to be selected as finalists among all the teams, proving that even in a short sprint, tech can make a real impact.",
      name: "Finalists with Fingers",
      designation: "Talking Hands, Typing Fingers – Atria Hackathon 2024",
      src: assets.atria_2,
      
    },
    {
      quote:
      "Ah yes, the legendary “you tried” award — but make it techy. This certificate may not come with confetti, but it’s packed with 8 hours of intense coding, caffeine crashes, and last-minute “wait, is it working?!” panic.We didn’t win the hackathon… but we did survive it — and honestly, that’s a flex too.",
      name: "Certificate of Controlled Chaos",
      designation: "8 Hours of Hustle | Atria Hackathon 2024",
      src: assets.atria_certificate,
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





 