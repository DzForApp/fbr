"use client"
import React from 'react'
import {NextStudio} from 'next-sanity/studio'  
import { config } from '../../../../sanity.config'
import Image from 'next/image'
const StudioPage = () => {
  return (
    <div className='w-full h-3/4 '>
                <div className='relative flex w-full h-3/4 '>
                      <div className='relative w-2/3 h-full    bg-red-500 '>
                       <NextStudio config={config} />
                      </div> 
                  
                  
                      <div className='relative w-1/3 h-auto  flex  items-center justify-center '>
                        <div className='relative    md:w-96 w-[24vh] h-[25vh]  rounded-full overflow-hidden md:h-96  '>
                            <Image  src="/images/backgrounds/f3.jpg" fill alt="contact Image"/>
                        </div>
                      </div> 
                
                </div>
    
   </div>
  )
}

export default StudioPage