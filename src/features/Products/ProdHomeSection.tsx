"use client"
import React, { ReactElement, useState } from "react"
import { Button } from "@/components/ui/button" 
import Product from "./product-card"
import { SimplifiedProduct, Category } from "@/app/interface" 

//const filters = ["car", "trucks", "engins"]



interface ProdSectionProps {
  data: SimplifiedProduct[]
  categoryList: Category[]
}
  
function ProductsHomeSection({ data, categoryList}: ProdSectionProps) {
 //category list management 
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  //console.log(category)
  const addCategory = (category:string) => {
    if(!selectedCategories.includes(category)){
        setSelectedCategories(prev => ([...prev, category]))
    }     
  }
  const removeCategory = (category:string) => {
    if(selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }
//Filter Products Management
  
  const filteredProducts = selectedCategories.length === 0 ? data : data.filter((product) =>selectedCategories.includes( product.category))
   //console.log(filteredProducts)
  return (
    <section id="Produits" className= " relative  ">
      <div className=" flex flex-col  md:mt-0 md:flex-col list-none min-h-screen space-y-4  font-sans text-black  w-full h-auto   scroll-my-24 items-center">
      <div className="text-black text-4xl md:mt-4 font-semibold font-sans ">Nos Produits</div> 
      <div className="flex space-x-4 ">
        {categoryList.map((category) => (
          
          <Button key={category._id} variant={selectedCategories.includes(category.name)? "selected": "ghost"}
           className="text-black text-xl font-thin  "
           onClick={() => {
            if(selectedCategories.includes(category.name)){
                  removeCategory(category.name) 
               }
            else
                addCategory(category.name)
               // removeCategory("Tout")
           
            }
            
            }>
            {category.name}
          </Button>
        ))}
      </div>
      {/* <span>____________________________________</span> */}
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4    md:flex-wrap">
        {filteredProducts.map((product, key) => (
          <li key={key}   >
            <Product product={product} />
          </li>
        ))}
      </div>
      </div>
      
    </section>
  )
}

//export {Products}