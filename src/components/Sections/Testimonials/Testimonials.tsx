import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"
import React from "react"
import Karousel from "../Banner/Carousel"


const images =[
    
     "/images/f1.jpg",
     "/images/f7.jpg",
 ]

function Testimonials() {
  return (
    <section id="Testimonial"
      className="flex flex-col space-y-0  scroll-my-2  md:space-y-4 w-full   lg:justify-center items-center lg:py-0 "
    >
        <div className="w-full h-screen  items-center justify-center">
                <div className="w-full h-1/2">
                    <div className=" relative w-full h-full bg-transparent">
                        <Image src={images[0]} fill alt={""} />
                        <div className="absolute w-full h-full bg-incomBg opacity-60"></div>
                    <div className="w-full h-full text-center">
                    
                        <div className="container felx flex-col w-full justify-center h-full p-y-2">
                            <h1 className="relative w-full h-auto p-2 text-fbr font-semibold uppercase">Feedback Clients</h1>
                            <h1 className="relative w-full h-auto text-6xl  font-sans text-center">Testimonials</h1>
                            <div className="relative flex flex-row items-center justify-center w-full h-1/2 mt-8 p-2 rounded-lg bg-fbr">
                               
                            </div>
                        </div>

                    </div>
                </div>   
        </div>
    </div>
</section>

  )
}

export default Testimonials