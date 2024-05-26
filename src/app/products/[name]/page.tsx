
import { SimplifiedProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'  
import { Products } from '@/features/Products'
import ProductDetails from '@/features/Products/ProductDetails'
 import React from 'react'
  

async function ProductDetail() {
  const product = await getProductID("1")
  return (
    <div className='w-full h-screen bg-slate-200 mt-16 text-black text-6xl items-center top-36'>  
       
       <div>
         <ProductDetails product={product}   />
       </div>
    
    </div>
  )
}

async function getProductID(p_name:string) {
  const query = `*[_type == "product"][0]{
    _id,
    name,
    "category":category->name,
    "imageUrl":images[].asset->url
}`

  const data = await client.fetch(query)

  return data
}

export default ProductDetail