"use client"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowRight } from 'lucide-react'
import Image from "next/image"
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen mt-16 bg-white   text-black shadow-lg text-6xl items-center top-36'>
      <div className="relative w-full   text-center  md:w-full h-auto space-y-8  md:space-y-4">
          <div  className="flex flex-col  space-y-4 md:flex-row w-full h-auto md:h-full justify-center items-center" >
            <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{ once: true }}
              animate={{ x: 60, y: 20 }}
              transition={{duration: 0.9, delay: 0.4 , ease: "easeInOut"}}
              className="relative md:w-1/2 space-y-8 md:py-4 items-center"
            >
              <h1 className="relative md:mb-4 uppercase font-semibold text-2xl text-fbr">à Propos FBR</h1>
              <p className="w-full text-3xl px-4  md:text-5xl font-semibold">  Construits pour l&apos;endurance,<br/> refroidis pour l&apos;efficacité</p>
              <p className=" md:flex text-lg md:w-full  px-6 py-6  lg:text-2xl md:text-gray-700   md:px-24">
                FBR est une conmapnie reconnu dans l&apos;industrie de la fabrication de radiateurs automobiles, 
                offrant des solutions de refroidissement de haute qualité pour une large gamme de véhicules. 
               </p>
               <a href="/products">
                <Button className="space-x-2 h-auto bg-fbr hover:bg-incomBg">
                    <span className="text-xl">Nos Produits</span>
                    <ArrowRight className="text-white w-8 h-8" />
                </Button>
              
              </a>
            </motion.div>
           
            <div   className="container relative md:w-1/2 space-y-8 md:py-2 items-center" >
            
                      <motion.div 
                          initial={{opacity: 0}}
                          whileInView={{opacity: 1}}
                          viewport={{ once: true }}
                          animate={{ x: -10, scale: 0.9 }}
                           transition={{duration: 1.9, delay: 0.1 , ease: "easeOut"}}
                           exit={{ x: 0 , scale: 1}}
                          
                                    
                        className="relative item"
                      >
                      <Image  src="/images/backgrounds/fbr1.png" width={550} height={550} alt="About Image"/>

                  </motion.div>
            </div>
       
            </div>
            
        </div>
    </div>

  )
}

export default page