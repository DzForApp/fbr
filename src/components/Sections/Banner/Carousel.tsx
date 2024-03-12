import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"
import { Card, CardContent } from "../../ui/card"
import Autoplay from "embla-carousel-autoplay"
import { plugin } from "postcss"
import { MailIcon } from "lucide-react"
import { Button } from "../../ui/button"

const images =[
   /* "/images/f1.jpg",
   /* "/images/f2.jpg",
    /*"/images/f3.jpg",
    /*"/images/f4.jpg",
    /*"images/f5.jpg",*/
    "/images/f6.jpg",
    "/images/f4.jpg",
    "/images/f8.jpg",
    "/images/f9.jpg",
]
function Karousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
      )
      const getRandomImageUrl = () => {
        const randomImageWidth = Math.floor(Math.random() * 800) + 400; // Random width between 400 and 1200
        const randomImageHeight = Math.floor(Math.random() * 800) + 400; // Random height between 400 and 1200
        return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
      };
    

  return (
    <div className="relative p-0 w-full h-screen    ">
        <Carousel
      plugins={[plugin.current]}
      className="h-full w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
        
      <CarouselContent>
           
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
              
            <div className="p-0 ">
              <Card className="w-full h-screen ">
              <CardContent className="absolute flex w-full h-full aspect-square items-start justify-center p-0">
                  <Image
                    src={images[index+1]}
                    alt={`Random Image ${index + 1}`}
                    className="w-screen text-ring h-auto object-cover transition-transform duration-100 ease-in-out  transform"
                    fill
                    priority={true}
                  /> 
                   
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

export default Karousel