"use client"
import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"
import { Card, CardContent } from "../../ui/card"
import Autoplay from "embla-carousel-autoplay" 
import TestItem from "./TestItem"

const images =[
  
    "/images/f6.jpg",
    "/images/f4.jpg",
    "/images/f8.jpg",
    "/images/f9.jpg",
]
const TestItemData = [ {
  name:"Ahmed",
  imageUrl :"/images/f4.jpg",
  rate:5,
  comment:"no comment"
},
{
  name:"SONACOM",
  imageUrl :"/images/f6.jpg",
  rate:5,
  comment:"no comment- text to display 1"
},
{
  name:"ALG-AUTO",
  imageUrl :"/images/f8.jpg",
  rate:4,
  comment:"no comment text to display 2"
},
{
  name:"CEFAO",
  imageUrl :"/images/f9.jpg",
  rate:3,
  comment:"no comment text to display  3"
},

]
function TestKarousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
      )
      const getRandomImageUrl = () => {
        const randomImageWidth = Math.floor(Math.random() * 800) + 200; // Random width between 400 and 1200
        const randomImageHeight = Math.floor(Math.random() * 800) + 200; // Random height between 400 and 1200
        return `https://via.placeholder.com/${randomImageWidth}x${randomImageHeight}`;
      };
    

  return (
    <div className="relative w-full  md:w-1/3 h-full px-4 md:py-4    ">
        <Carousel
      plugins={[plugin.current]}
      className="relative items-center flex h-full w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
        
      <CarouselContent>
           
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
              
            <div className="relative p-0 flex   ">
              <Card className=" relative flex  w-full h-32 ">
                <CardContent className=" flex w-full  aspect-square items-start justify-center p-0">
                    

                    <TestItem name={TestItemData[index+1].name} imageUrl={TestItemData[index+1].imageUrl} rate={TestItemData[index+1].rate} comment={TestItemData[index+1].comment}/>
                    
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

export default TestKarousel