import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AnimatePresence, easeIn, easeInOut, motion, useTransform, useViewportScroll } from 'framer-motion'
import { LucideIcon, Scale } from 'lucide-react'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type ProCardProps = {
    _id:number, 
    name:string,
    icon: LucideIcon,
    desc:string[],
    className?:string,
    children?:ReactNode,
    Yinit:number,
    Yanimate: number,
}
function ProCard({_id, name, icon:Icon, desc,className, Yinit,Yanimate , children}:  ProCardProps) {
 
  
  return (

  <AnimatePresence>
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{ once: true }}
     transition={{duration: 0.7, delay: (_id * 0.4) , ease: "easeOut"}}
 

    className={`${className} hover:scale-90 md:ease-in-out duration-700 hover:shadow-lg  text-incomBg flex flex-grow-1 
    basis-full md:basis-1/2   flex-col m-2 p-6 space-y-8 justify-between md:space-y-8 w-full h-full items-center  bg-white shadow-xl rounded-2xl mx-2  `}
  >
        <span className='bg-fbr w-16 h-16 text-4xl font-semibold text-center rounded-full  text-white self-center'>{_id}</span>
      <h1 className="  text-gray text-4xl     text-center  font-semibold">{name}</h1>

     
            
        <Icon className='w-24 h-24   items-center  text-fbr  ' />

   


      <p className="text-gray flex-grow text-xl text-center">{desc}</p>
  </motion.div> 
  </AnimatePresence>
  )
}

export default ProCard