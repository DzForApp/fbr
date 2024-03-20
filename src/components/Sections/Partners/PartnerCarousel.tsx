"use client"
import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"
import { Card, CardContent } from "../../ui/card"
import Autoplay from "embla-carousel-autoplay" 
import TestItem from "./PartnerItem"

const BrandLogos = [
"/images/brands/audi.png", 
"/images/brands/fiat.png",
"/images/brands/toy.png",
"/images/brands/volks.png",
"/images/brands/nissan.png",
"/images/brands/volvo.png",
"/images/brands/mazda.png",
"/images/brands/peugeot.png",

] 
function PartnerCarousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
      const getRandomImageUrl = () => {
        const randomImageWidth = Math.floor(Math.random() * 800) + 200; // Random width between 400 and 1200
        const randomImageHeight = Math.floor(Math.random() * 800) + 200; // Random height between 400 and 1200
        return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
      };
    

  return (
    <div className="relative w-full  md:w-full   h-full px-4 md:py-4    ">
        <Carousel
      plugins={[plugin.current]}
      className="relative items-center flex h-full w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
        
      <CarouselContent>
           
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/4">
              
            <div className="relative p-0 flex  justify-center ">
              <Card className=" relative flex  w-64 h-64 md:w-40 md:h-40 ">
                <CardContent className=" flex w-full  aspect-square space-x-8 items-start justify-center p-0">
                    
                  <TestItem  imageUrl={BrandLogos[index]}  />
                    
                  </CardContent>
              </Card>
              
            </div>
          </CarouselItem>
          
          
        ))}
          
      </CarouselContent>
          
   
    </Carousel>
    </div>
  )
}

export default PartnerCarousel