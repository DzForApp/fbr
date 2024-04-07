import { ProdcutList } from '@/components/Sections/Products/prodcuts-list'
import React from 'react'

function page() {
  return (
    <div className=' w-full h-auto    mt-12 bg-white scroll-mt-2   text-black shadow-lg text-xl items-center top-24'>
      <ProdcutList />
    </div>
  )
}

export default page