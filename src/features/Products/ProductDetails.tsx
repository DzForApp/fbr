"use client" 
import React from 'react'
 import { SimplifiedProduct } from '@/app/interface'
import Image from 'next/image'
 
interface IProductDetailsProps {
  product: SimplifiedProduct
}

const ProductDetails = ({product}: IProductDetailsProps) => {
  return (
    <div className='w-full items-start pt-24 justify-center flex flex-row  h-screen gap-32 bg-red-400'>
            <div>
              <Image src={String(product.imageUrl)} alt={''} width={300} height={300} />

 
            </div>
            <div>
                {product.name}
                {product.category}
            </div>
            <div>
               
            </div>
            

    </div>
  )
}

export default ProductDetails