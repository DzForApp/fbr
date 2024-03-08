import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='md:container   w-full  h-[65vh] mt-32  md:my-16 md:mt-24 flex flex-row justify-center'>
        <div className='relative  md:w-1/4 h-[60vh] shadow-2xl border-b-1 border-x-1 shadow-card-foreground '>
          
            <div className='relative w-full h-[30vh]   '>
                
                <Image  src="/images/f3.jpg" fill alt="Login Image"/>
                    
            </div>
       
            <div className='w-full border-l-primary-foreground bg-fbr  flex flex-col h-1/2'>
             <div className=' w-full    h-full  text-center   '>
                <h1 className='justify-center   uppercase font-semibold text-2xl text-incomBg'>Enregistrer</h1>
                        <div className='flex flex-col px-2 my-2 space-y-2 md:space-y-4'>
                        <div className='flex space-x-2 text-incomBg'>
                            <input type="text" className='w-1/2 rounded-lg' />
                            <input type="text" className='w-1/2 rounded-lg' />
                        </div>
                        
                        <div className='flex space-x-2 text-incomBg'>
                        <input type="text" className='w-1/2 rounded-lg' />
                            <input type="text" className='w-1/2 rounded-lg' />
                        </div>
                        <div className='flex space-x-2 text-incomBg'>
                        <input type="text" className='w-1/2 rounded-lg' />
                            <input type="text" className='w-1/2 rounded-lg' />
                        </div>

                        </div>
                <Button className='bg-incomBg hover:bg-gri hover:text-incomBg'>Sauvgarder</Button>
             </div>
        </div>
        </div>
        

    </div>
  )
}

export default page