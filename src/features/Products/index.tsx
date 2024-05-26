"use client"
import React from "react"
  import { SimplifiedProduct, Category } from "@/app/interface" 
import ProductCard from "./product-card"

//const filters = ["car", "trucks", "engins"]



interface AllProdSectionProps {
  ps: SimplifiedProduct[] 
}
  
function Products({ ps}: AllProdSectionProps) {
  
  return (
    <section className= " relative  ">
      <div className=" flex flex-col  md:mt-0 md:flex-col list-none min-h-screen space-y-4  font-sans text-black  w-full h-auto   scroll-my-24 items-center">
            {/* <span>____________________________________</span> */}
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4    md:flex-wrap">
        {ps?.map((p, key) => (
          <li key={key}   >
            <ProductCard product={p} />
          </li>
        ))}
      </div>
      </div>
      
    </section>
  )
}

export {Products}