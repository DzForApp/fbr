import React, { useEffect, useRef } from "react" 

import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {  motion, useScroll} from "framer-motion"
 
 
function About() {
 
  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "0.73 1"],
  })

  return (
    <section
        
    id="A_Propos" className=" relative py-12    md:mt-4  font-sans text-black  w-full h-screen  md:h-screen  scroll-my-40 items-start md:items-center ">
       <div className="relative w-full   text-center  md:w-full h-auto space-y-8  md:space-y-4">
          <div  className="flex flex-col  space-y-4 md:flex-row w-full h-auto md:h-full justify-center items-center" >
            <motion.section 
              // initial={{opacity: 0}}
              // whileInView={{opacity: 1}}
              // viewport={{ once: true }}
              // animate={{ x: 0, y: 20 }}
                        // transition={{duration: 0.9, delay: 0.4 , ease: "easeInOut"}}
                        ref ={ref}
                        style={{
                          scale:scrollYProgress,
                          opacity:scrollYProgress,
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}   
                        transition={{duration: 0.6, delay: (0.7) , ease: "easeOut"}}
              
              className="relative md:w-1/2 space-y-8 md:py-4 items-center"
            >
              <h1 className="relative md:mb-4 uppercase font-semibold text-2xl text-fbr">à Propos FBR</h1>
              <p className="w-full text-3xl px-4  md:text-5xl font-semibold">  Construits pour l&apos;endurance,<br/> refroidis pour l&apos;efficacité</p>
              <p className=" md:flex text-lg md:w-full  px-6 py-6  lg:text-2xl md:text-gray-700   md:px-24">
                FBR est une conmapnie reconnu dans l&apos;industrie de la fabrication de radiateurs automobiles, 
                offrant des solutions de refroidissement de haute qualité pour une large gamme de véhicules. 
               </p>
               <a href="#Services">
                <Button className="space-x-2 h-auto bg-fbr hover:bg-incomBg">
                    <span className="text-xl">Nos Services</span>
                    <ArrowDownIcon className="text-white w-8 h-8" />
                </Button>
              
              </a>
            </motion.section>
           
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
                 className="container relative md:w-1/2 space-y-8 md:py-2 items-center" >
                    <Image  src="/images/backgrounds/r6-3d.png" width={550} height={550} alt="About Image"/>
            </motion.section>
       
            </div>
            
        </div>
   
       
        

    </section>
  )
}

export default About
 
 