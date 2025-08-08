import React from 'react'
import { motion } from 'framer-motion'
import {ChevronRight} from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen w-[75%]'>
        <div className='flex justify-center items-center'>1</div>
        <div className='flex justify-center items-center'>2</div>
        <div className='flex justify-center items-center'>3</div>

          <div className='col-span-1 md:col-span-2 lg:col-span-3'>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full'>
            <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col justify-center items-center h-full px-20'>
            <div className='max-w-2xl '>
              <div className='font-family-secondary flex justify-right items-start text-4xl font-bold  pt-20'>
                <TypeAnimation 
                  sequence={[
                    'Hello There !,',2000,'こんにちは !,',2000, 'नमस्ते !,',2000
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
                <motion.h1  animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.6 }} className='font-family-secondary text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 justify-right pt-2'>I'm <span className=''>Bhuwan Kumar</span></motion.h1>
                <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.8 }} className='font-family-secondary text-xl text-white  pt-5'>As an engineer, I bring relentless enthusiasm for solving complex problems with innovative solutions.</motion.p>
                <motion.button className='flex items-center justify-center gap-2 px-6 py-3 mt-10 text-white bg-blue-600 rounded-full  hover:scale-110 overflow-hidden '><motion.span initial={{x:0}} whileTap={{x:100}}><ChevronRight /></motion.span> Know more</motion.button>
            </div></motion.div>
            <div className='flex justify-center items-center'>5</div>
          </div>
          </div>
        

        <div className='flex justify-center items-center'>6</div>
        <div className='flex justify-center items-center'>7</div>
        <div className='flex justify-center items-center'>8</div>
      </div>
   
  )
}
export default Hero;
