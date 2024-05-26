 import React from 'react'
import { client } from '../lib/sanity' 
import { Products } from '@/features/Products'

async function page() {

  const data = await getData()
  const category = await getCategory()


  return (
    <div className=' w-full h-auto  mt-12 bg-white scroll-mt-2   text-black shadow-lg text-xl items-center top-24'>
       <Products ps={data}   />
    </div>
  )
}

export default page     
 
  async function getData() {
    const query = `*[_type == "product"][]{
      _id,
      name,
      "category":category->name,
      "imageUrl":images[].asset->url
}`
  
    const data = await client.fetch(query)
  
    return data
  }

  async function getCategory() {
    const qurey = `*[_type == "category"][]{
      name, 
 }`
    const dataCategory = await client.fetch(qurey)

    return dataCategory
  }


