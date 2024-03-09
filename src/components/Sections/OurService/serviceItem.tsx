import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type ProductProps = {
    _id:string,
    name:string,
    icon: LucideIcon,
    desc:string[],
    className?:string,
    children?:ReactNode
}
function ServiceItem({_id, name, icon:Icon, desc,className, children}:  ProductProps) {
  return (
    <div
    className={`${className} hover:scale-105  hover:mx-4 md:ease-in-out duration-700 hover:bg-incomBg hover:text-white text-incomBg flex flex-grow-1 
    basis-full md:basis-1/3 xl:basis-1/4 flex-col m-2  space-y-2 w-32 h-52 bg-white shadow-xl rounded-xl  p-4`}
  >
   
      <h1 className="self-center text-gray text-lg p-y-4 font-semibold">{name}</h1>
      <Icon className='w-full p-6 h-1/2 text-fbr  ' />
      <p className="text-gray flex-grow">{desc}</p>
  </div> 
  )
}

export default ServiceItem