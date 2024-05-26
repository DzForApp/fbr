import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"
import React from "react"  
import BrandCarousel from "./BrandCarousel"


const images =[
    
     "/images/f1.jpg",
     "/images/f7.jpg",
 ]
 

function Partners() {
  return (
    <section id="Testimonial"
      className="flex flex-col space-y-0  scroll-my-2  md:space-y-4 w-full   lg:justify-center items-center lg:py-0 "
    >
                    <div className="flex  w-full h-full"> 
                    
                        <div className="container felx flex-col w-full justify-center h-full md:p-y-2">
                            <h1 className="relative w-full h-auto text-center p-2 text-fbr font-semibold uppercase">Nos Partenaires</h1>
                            <h1 className="relative w-full h-auto text-6xl  font-sans text-center"></h1>
                            <div className="relative flex flex-row justify-center opacity-90   w-full h-full mt-8  rounded-lg ">
                              {/* <PartnerCarousel/>   */}
                              <BrandCarousel /> 
                            </div>
                            
                        </div>

                    </div>
              
         
</section>

  )
}

export default Partners