import React from "react" 

import Image from "next/image"
import { ArrowDownIcon, MailCheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
 
function About() {
  return (
    <section id="A_Propos" className=" relative py-12    md:mt-4  font-sans text-black  w-full h-screen   scroll-my-16 items-start md:items-center ">
       <div className="relative w-full   text-center  md:w-full h-auto space-y-8  md:space-y-4">
          <div className="flex flex-col  space-y-4 md:flex-row w-full h-auto md:h-full justify-center items-center" >
            <div className="relative md:w-1/2 space-y-8 md:py-4 items-center  ">
              <h1 className="relative md:mb-4 uppercase font-semibold text-2xl text-fbr">à Propos FBR</h1>
              <p className="w-full text-3xl px-4  md:text-5xl font-semibold">  Construits pour l"endurance,<br/> refroidis pour l"efficacité</p>
              <p className=" md:flex text-lg md:w-full  px-6 py-6  lg:text-2xl md:text-gray-700   md:px-24">
                FBR est une conmapnie reconnu dans l"industrie de la fabrication de radiateurs automobiles, 
                offrant des solutions de refroidissement de haute qualité pour une large gamme de véhicules. 
               </p>
               <a href="#Services">
                <Button className="space-x-2 h-auto bg-fbr hover:bg-incomBg">
                    <span className="text-xl">Nos Services</span>
                    <ArrowDownIcon className="text-white w-8 h-8" />
                </Button>
              
              </a>
            </div>
            <div className="relative flex w-[35vh] h-[30vh] md:w-1/2 md:h-[75vh]   md:py-4 items-center justify-center ">
             
                <Image  src="/images/r6-3d.png" fill alt="About Image"/>
              
            </div>
            </div>
            
        </div>
   
       
        

    </section>
  )
}

export default About