import Contact from '@/components/Sections/Contact/contact'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
 
    <div className='  flex  w-full h-[95vh] md:mt-8 bg-white   text-black shadow-lg text-6xl md:justify-center items-center '>
          <div className=' w-full h-3/4 px-4 md:px-0  
           md:justify-center  
            flex flex-col md:flex-row md:w-2/3 md:mt-12   py-2  md:p-2 md:h-[65vh]  border-b-1 border-x-1  '>
          
              <div className='relative flex flex-col items-center justify-center '>
                <div className='relative  md:w-96 w-[24vh] h-[25vh] rounded-full overflow-hidden md:h-96  '>
                        
                    <Image  src="/images/backgrounds/f3.jpg" fill alt="contact Image"/>
                        
                </div>
          </div>
         
     
                <div className='container w-full   md:w-2/3 h-auto py-4 md:h-auto  md:rounded-r-lg  md:py-12 md:space-y-4 text-center    '>

                      <h1 className='justify-center   uppercase font-semibold text-2xl text-incomBg'>Contactez Nous</h1>

                          <div className='flex flex-col   w-full md:px-12 text-incomBg  my-4 space-y-8 md:space-y-6'>
                            <input id='name' type="text" autoComplete='true'
                             className='h-12  bg-gray-200 rounded-md text-sm px-4' placeholder=" Nom & prénom" />
                            <input id='email' type="password" autoComplete='true'  
                            className='h-12 bg-gray-200  rounded-md text-sm px-4' placeholder=" Email"/>
                            <input  type="text"   name="" id="desc" autoComplete='true'
                             className='h-24 bg-gray-200 rounded-md text-sm px-4' placeholder=" Message" />
                          </div>

                    <Button className='bg-incomBg hover:bg-gri hover:text-incomBg'>Connecter</Button>

              </div>

      </div>
    </div>
          
    

  )
}

export default page