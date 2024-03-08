import React from 'react' 

import Image from 'next/image'
import { Button } from '@/components/ui/button' 
 
function Contact() {
  return (
    <section id="Contactez-Nous" className=' relative flex flex-col   md:flex-row  font-sans text-black  w-full h-screen   scroll-my-8 items-center '>
       <div className='md:container   w-full  h-[65vh] mt-32  md:my-16 md:mt-24 flex flex-row justify-center'>
        <div className='relative  md:w-1/4 h-[60vh] shadow-2xl border-b-1 border-x-1 shadow-card-foreground '>
          
            <div className='relative w-full h-[30vh]   '>
                
                <Image  src="/images/f3.jpg" fill alt="Login Image"/>
                    
            </div>
       
            <div className='w-full border-l-primary-foreground bg-fbr  flex flex-col h-1/2'>
             <div className=' w-full    h-full  text-center   '>
                <h1 className='justify-center   uppercase font-semibold text-2xl text-incomBg'>Contactez Nous</h1>
                        <div className='flex flex-col px-12 text-incomBg my-4 space-y-2 md:space-y-4'>
                        
                        <input type="text" />
                        <input type="password" />
                        </div>
                <Button className='bg-incomBg hover:bg-gri hover:text-incomBg'>Connecter</Button>
             </div>
        </div>
        </div>
        

    </div>
       
        
        
        

    </section>
  )
}

export default Contact