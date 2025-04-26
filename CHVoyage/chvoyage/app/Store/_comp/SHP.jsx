'use client'
import React, { useEffect,useState } from 'react'
import ProductApis from '../../_utils/ProductApis'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ShoppingCart } from "lucide-react"



export default function SHP() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    ProductApis.getLatestProducts()
      .then(res => {
        setProductList(res.data.data);
       
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };



  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-pink-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Travel Shop</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Equip yourself with premium travel gear and accessories for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-white/20">
                {product?.Image?.map((img, index) => (
                            <Image key={index} 
                            src={img?.url} 
                            alt={img?.alternativeText || `Image ${index + 1}`} 
                            width={450} height={400} 
                            className='rounded-t-lg h-[195px]  object-cover'/>
                            
                        ))}
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product?.Title}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{product?.Title}</h3>
                <p className="text-purple-200 text-sm mb-4 line-clamp-2">{product?.Description || 'No Discription'}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-400">{product?.Price},00 DZD</span>
                  <Link href={`/product-details/${product?.id}`}    
                  size="sm"
                    className=" flex gap-2 p-3 text-white rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                  >
                    <ShoppingCart />
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        <Link href="/Store">
          <Button className="bg-white text-purple-800 hover:bg-orange-100">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
