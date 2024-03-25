import React from 'react'

function ProductDetail({params}:any) {
  return (
    <div className='w-full h-screen bg-slate-200 mt-16 text-black text-6xl items-center top-36'>ProductDetail {params.productId}
       Page
    
    </div>
  )
}

export default ProductDetail