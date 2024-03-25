import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {  motion, useScroll } from 'framer-motion'
import { LucideIcon, Scale } from 'lucide-react'
import Image from 'next/image'
import React, { ReactNode, useRef } from 'react'

type ProCardProps = {
    _id:number, 
    name:string,
    icon: LucideIcon,
    desc:string[],
    className?:string,
    children?:ReactNode,
   
}
function ProCard({_id, name, icon:Icon, desc,className  , children}:  ProCardProps) {
  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "0.33 1"],
  })
  
  return (
 
    <motion.section
        ref ={ref}
        style={{
          scale:scrollYProgress,
          opacity:scrollYProgress,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}   
        transition={{duration: 0.6, delay: (0.2) , ease: "easeOut"}}
    className={`${className} hover:scale-105   duration-700   hover:bg-incomBg  hover:text-white   
    hover:mx-8 md:ease-in-out   hover:shadow-lg  text-incomBg flex flex-grow-1 
    basis-full md:basis-1/3 xl:basis-1/4  flex-col m-2 p-6 space-y-8 justify-between 
    md:space-y-8 w-full h-full items-center  bg-white shadow-xl rounded-2xl mx-2  `}
  >
        <span className='bg-fbr w-16 h-16 text-4xl font-semibold text-center rounded-full  text-white self-center'>{_id}</span>
      <h1 className="  text-gray text-4xl     text-center  font-semibold">{name}</h1>

     
            
        <Icon className='w-24 h-24   items-center  text-fbr  ' />

   


      <p className="text-gray flex-grow text-xl text-center">{desc}</p>
  </motion.section>  
  )
}

export default ProCard