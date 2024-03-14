import { ImageProps } from 'next/image'
import Image from 'next/image';
import React from 'react'

 
function PartnerItem({imageUrl}:any) { 
  return (
    <div className='w-full h-full items-center justify-center flex flex-col '>
            
            <div className='w-full h-full content-center rounded-full  flex flex-row justify-center items-center py-1 '>
                <Image 
                    src={imageUrl}
                    width={100}
                    height={100}
                    className=' w-full h-full '
                    alt={'no avatar'}
                    priority={true}
                />
            </div>
            
            {/* <div>Rate:{rate}/5</div> */}
            
          
    </div>
  )
}

export default PartnerItem