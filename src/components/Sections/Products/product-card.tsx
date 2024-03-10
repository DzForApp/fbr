import React from "react"
import { Card } from "../../ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type ProductProps = {
    _id:string,
    name:string,
    category: string,
    ImageUrl:string[]
}
function Product({_id, name, category, ImageUrl }:  ProductProps) {
  return (
    <div className="transition hover:scale-125  duration-1000" >
        <Card className="flex flex-col  m-2 md:m-4 justify-normal items-center  rounded-sm  border-none md:border-spacing-1   w-[18vh] md:w-[35vh] h-[20vh] md:h-[35vh]  ">
          
            <div className="relative   w-full h-2/3 top-0  ">
             
              <Image 
                  src={
                      ImageUrl && ImageUrl.length > 0 ? ImageUrl[0] : ""
                  } 
                  fill
                  alt={"noImg"} 
                  />
              
            </div>
            <div className="flex flex-col w-full h-1/3 md:px-4  py-2 text-center space-y-2 md:space-y-4">
              <span>{name}</span>
              <Button className="w-full bg-fbr hover:bg-incomBg   ">Découvrir</Button>
            </div>
             
          <div> 
          </div>
        </Card>
        
    </div>
  )
}

export default Product