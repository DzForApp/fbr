import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type ProCardProps = {
    _id:string, 
    name:string,
    icon: LucideIcon,
    desc:string[],
    className?:string,
    children?:ReactNode
}
function ProCard({_id, name, icon:Icon, desc,className, children}:  ProCardProps) {
  return (
    <div
    className={`${className} hover:scale-90 md:ease-in-out duration-700 hover:shadow-lg  text-incomBg flex flex-grow-1 
     flex-col m-2 p-4 space-y-2 w-full h-full items-center  bg-white shadow-xl rounded-2xl mx-2  `}
  >
        <span className='bg-fbr w-16 h-16 text-4xl font-semibold text-center rounded-full  text-white self-center'>{_id}</span>
      <h1 className="  text-gray text-4xl     text-center  font-semibold">{name}</h1>
      <Icon className='w-24 h-24 items-center  text-fbr  ' />
      <p className="text-gray flex-grow text-center">{desc}</p>
  </div> 
  )
}

export default ProCard