"use client"
import React from 'react'
import {NextStudio} from 'next-sanity/studio'  
import { config } from '../../../../sanity.config'
import Image from 'next/image'
const StudioPage = () => {
  return (
    <div className='w-full h-3/4 '>
               <div className='relative w-full h-full  '>
                       <NextStudio config={config} />
                      </div> 
          
    
   </div>
  )
}

export default StudioPage