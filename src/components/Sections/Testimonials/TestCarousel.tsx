"use client"
import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel"
import { Card, CardContent } from "../../ui/card"
import Autoplay from "embla-carousel-autoplay" 
import TestItem from "./TestItem"

const images =[
  
    "/images/backgrounds/f6.jpg",
    "/images/backgrounds/f4.jpg",
    "/images/backgrounds/f8.jpg",
    "/images/backgrounds/f9.jpg",
]
const TestItemData = [ {
  name:"Rachid Ziani - RMC",
  imageUrl :"/images/backgrounds/f4.jpg",
  rate:5,
  comment:"Depuis l'utilisation des radiateurs FBR, les problèmes de surchauffe ont disparu. Service après-vente exceptionnel.t"
},
{
  name:"Sofiane Belkacem, T.T.A",
  imageUrl :"/images/backgrounds/f6.jpg",
  rate:5,
  comment:"Les radiateurs FBR ont transformé notre flotte. Performants et fiables, nous les recommandons vivement"
},
{
  name:"Khadidja Hamidi, AAS",
  imageUrl :"/images/backgrounds/f8.jpg",
  rate:4,
  comment:"FBR offre des radiateurs durables et efficaces. Nos clients sont très satisfaits."
},
{
  name:"CEFAO",
  imageUrl :"/images/backgrounds/f9.jpg",
  rate:3,
  comment:"FBR offre des radiateurs durables et efficaces"
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