import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"
import React from "react" 
import TestKarousel from "./TestCarousel"
import Partners from "../Partners/Partners"


const images =[
    
     "/images/backgrounds/f1.jpg",
     "/images/backgrounds/f7.jpg",
 ]
 

function Testimonials() {
  return (
    <section id="Testimonial"
      className="flex flex-col space-y-0  scroll-my-16  md:space-y-4 w-full   lg:justify-center items-center lg:py-0 "
    >
        <div className="w-full h-screen  items-center justify-center">
                <div className="w-full h-1/2">
                    <div className=" relative w-full h-full bg-transparent">
                        <Image src={images[0]} fill alt={""} />
                        <div className="absolute w-full h-full bg-incomBg opacity-60"></div>
                    <div className="w-full h-full text-center">
                    
                        <div className="container felx flex-col w-full justify-center h-full md:p-y-2">
                            <h1 className="relative w-full h-auto p-2 text-fbr font-semibold uppercase">Feedback Clients</h1>
                            <h1 className="relative w-full h-auto text-6xl  font-sans text-center">Testimonials</h1>
                            <div className="relative flex flex-row items-start opacity-90  justify-center w-full h-1/2 mt-8  rounded-lg bg-fbr">
                              <TestKarousel/>   
                            </div>
                            
                        </div>

                    </div>
                </div>   
                <div className="h1/2">
                     <Partners/>
                </div>
        </div>
    </div>
</section>

  )
}

export default Testimonials