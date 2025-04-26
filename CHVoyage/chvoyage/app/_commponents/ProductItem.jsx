import React from 'react'
import Image from 'next/image'
import {BookOpen} from 'lucide-react'
import Link from 'next/link'

function ProductItem({product}) {
    //console.log('Product Item:', product);
  return (
    //console.log(product?.Image?.[0]),
    <Link href={`/product-details/${product?.id}`}
    className='block p-1  border-blue-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer'>
        {product?.Image?.map((img, index) => (
            <Image key={index} 
            src={img?.url} 
            alt={img?.alternativeText || `Image ${index + 1}`} 
            width={400} height={350} 
            className='rounded-t-lg h-[170px] object-cover'/>
            
        ))}
        <div className='flex justify-between p-2 items-center bg-gray-200 rounded-b-lg'>
         <div className=''>
            <h2 className='text-[16px] line-clamp-1' >
                {product?.Title}
            </h2>
            <h2 className='text-[10px] text-green-400 flex gap-1' >
            <BookOpen className='w-h h-4'/> {product?.Description}
            </h2>
         </div>
            <h2>
                {product?.Price}
            </h2>
        </div>
    </Link>
  )
}

export default ProductItem