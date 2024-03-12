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
    <div className='w-full items-center justify-center flex flex-col '>
            <div className='w-full   text-xl'>
             {name}
            </div>
            <div className='w-full   flex flex-row justify-center items-center py-1 '>
                <Image 
                    src={imageUrl}
                    width={50}
                    height={50}
                    className='w-8 h-8 rounded-full'
                    alt={'no avatar'}
                    priority={true}
                />
            </div>
            
            {/* <div>Rate:{rate}/5</div> */}
            
            <div className='w-full '>
                <p>
                {comment}
                </p>
            </div>
    </div>
  )
}

export default TestItem