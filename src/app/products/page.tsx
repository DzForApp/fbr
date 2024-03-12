import { ProdcutList } from '@/components/Sections/Products/prodcuts-list'
import React from 'react'

function page() {
  return (
    <div className='w-full h-auto mt-16 bg-white scroll-mt-4   text-black shadow-lg text-xl items-center top-36'>
      <ProdcutList />
    </div>
  )
}

export default page