import { ImageProps } from 'next/image'
import Image from 'next/image';
import React from 'react'

type TestItemProps = {
    name:string,
    imageUrl :any,
    rate:number,
    comment:string
}
function TestItem({name, imageUrl, rate, comment}:TestItemProps) { 
  return (
    <div className='w-full items-center justify-center flex flex-row  h-full  '>
          <div className='  flex flex-row justify-center items-center py-2 '>
             <div className=' w-1/3 h-24 items-center justify-center flex'>
             <Image 
                    src={imageUrl}
                    width={120}
                    height={120}
                    className='w-16 h-16 rounded-full'
                    alt={'no avatar'}
                    priority={true}
                />
              </div>   

              <div className='  w-2/3'>
                <div className='w-full   text-xl'>
                {name}
                </div>
              
              
              {/* <div>Rate:{rate}/5</div> */}
              
                <div className='w-full '>
                    <p>
                    {comment}
                    </p>
                </div>
              </div>
            </div>
           
            
    </div>
  )
}

export default TestItem