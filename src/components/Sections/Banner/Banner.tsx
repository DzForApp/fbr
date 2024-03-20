"use client"
import { CarIcon, InfoIcon, MailIcon, PlayIcon, Projector } from "lucide-react"
import React from "react"
import { Button } from "../../ui/button"
import Image from "next/image"
import Karousel from "./Carousel" 
import { motion, useTransform, useViewportScroll } from "framer-motion"

function Banner() {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  
      
  return (
    <section id="Acceuil"
      className="flex flex-col space-y-0  scroll-my-24  md:space-y-4 w-full  lg:h-[100vh] lg:justify-center items-center lg:py-0 "
    >
          <div className="absolute top-0 -z-10  left-0 md:h-screen w-full">
                 
              <Karousel />  
          </div>

 
          <motion.div  className="p-0 w-full  flex items-center justify-center "
          initial={{opacity: 0, x:0}}
          whileInView={{opacity: 1}}
          viewport={{ once: true }}
          animate={{scale: 0.9 }}
          transition={{duration: 0.9, delay: 0.1 , ease: "easeOut"}}
         
           >
              <div  
                  
                className="   relative flex space-y-16 w-full h-screen text-center md:w-1/2 flex-col text-shadow-xl  items-center justify-center md:space-y-4 lg:text-center text-fbr ">
                  <h1 className="hover:scale-125  transition duration-500 cursor-pointer w-full text-5xl    uppercase md:text-7xl font-bold">
                      Frères Bouali <br/> Radiateurs
                  </h1>
                  <p className="w-full text-white  text-3xl px-4 text-shadow-md md:max-w-lg lg:max-w-2xl lg:text-2xl">
                  L&apos;ingénierie du confort, <br/>le pouvoir du refroidissement
                  </p>
                  <a href="/products">
                  <div className="flex space-x-3">
                      <Button className="bannerButton bg-fbr h-12 text-lg hover:bg-white text-black ">
                       Découvrir Nos Produits
                      </Button>
                  
                  </div>
                  </a>
              </div>
              </motion.div>
          <div className="md:absolute md:-bottom-16 w-full space-y-4 text-center px-2 lg:w-2/3 h-[18vh] md:h-[15vh]   md:rounded-t-2xl p-2 md:p-2 justify-center items-center bg-fbr">
               <a href="#A_Propos">
               <h1 className="text-2xl" >PourQuoi FBR  </h1>
               </a>
                
                <p className="font-semibold items-center text-3xl ">OUR AMBITION IS OUR WEAPON !</p>
          
          </div>
      
      
    </section>  
  )
}

export default Banner

 