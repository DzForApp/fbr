import React from 'react' 

import Image from 'next/image'
import { Button } from '@/components/ui/button' 
 
function Contact() {
  return (
    <section id="Contactez-Nous" className=' relative flex flex-col   md:flex-row  font-sans text-black  w-full h-screen   scroll-my-8 items-center '>
        <div className='container relative flex flex-col md:flex-row md:w-2/3 h-screen py-16 md:py-0 md:h-[60vh]  border-b-1 border-x-1 shadow-card-foreground '>
          
            <div className='relative w-full h-1/2 md:h-full   '>
                
                <Image  src="/images/backgrounds/f3.jpg" fill alt="contact Image"/>
                    
            </div>
       
             <div className=' w-full h-1/2 md:h-full md:rounded-r-lg  py-12 space-y-4 text-center bg-fbr   '>

                <h1 className='justify-center   uppercase font-semibold text-2xl text-incomBg'>Contactez Nous</h1>

                        <div className='flex flex-col px-12 text-incomBg  my-4 space-y-2 md:space-y-4'>
                          <input id='name' type="text" autoComplete='true' />
                          <input id='email' type="password" autoComplete='true'/>
                          <input  type="text" className='w-full h-[15vh]' name="" id="desc" autoComplete='true' />
                        </div>

                <Button className='bg-incomBg hover:bg-gri hover:text-incomBg'>Connecter</Button>

             </div>
             
        </div>
         
       
        
        
        

    </section>
  )
}

export default Contact