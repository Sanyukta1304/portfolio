import { assets, infoList, toolsData } from '@/assets/assets';

import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, dealay: 0.3}}
      className='text-center  text-lg font-Ovo'>More Than Just a Name</motion.h4>
      
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, dealay: 0.5}}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center 
        gap-20 my-10'>
          
          <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl ' /> 
          </motion.div>
          
          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, dealay: 0.8}}
          className='flex-1'>
            <p className=' max-w-2xl font-Ovo'
            >Hey there!
            I'm a curious learner diving into the world of development—still 
            figuring things out, but loving every "Aha!" moment along the way. 
            Right now, I’m learning how to make websites look good and how to make
             buttons actually do things (without breaking everything else). Most of my time goes into experimenting, 
             debugging, and yes—Googling the errors I caused.I believe in writing better code each day, 
             asking questions (even the obvious ones), and the magic of "just one more try." 
             I'm not a pro yet—but I'm getting there, one line of code at a time.</p>

            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6
             max-w-2xl my-2'>
              {infoList.map(({icon,iconDark,title,description},
               index)=>(
                
                <motion.li
                whileHover={{scale: 1.05}}
                
                className='border-[0.5px] border-gray-400
                my-3
                rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-10 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50' 
                 key={index}>
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                  <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
              ))}
            
            </motion.ul>

            <motion.h4
            initial={{ y: 20, opacity: 0}}
            whileInView={{ y: 0, opacity: 1}}
            transition={{duration: 1.3, delay: 0.5}} 

            className='my-3 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ delay: 1.5, duration: 0.3}} 
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                
                <motion.li 
                whileHover={{ scale: 1.1 }} 
                className='flex items-center justify-center 
                w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg  cursor-pointer hover:-translate-y-1 
                duration-500' 
                  key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </motion.ul>


          </motion.div>
        </motion.div>

    </motion.div>
   )
}

export default About

