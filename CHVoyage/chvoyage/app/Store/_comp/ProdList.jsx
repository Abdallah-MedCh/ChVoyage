import React from 'react'
import Link from 'next/link' // Ensure you import Link
import Image from 'next/image' // Ensure you import Image
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ShoppingCart, Search, Filter, Star, Heart } from "lucide-react"

function ProdList({ productList }) {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {productList.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                      >
                        
                        <div className="relative">
                          <Link href={`/Store/${product?.id}`}>
                            <div className="relative h-48 bg-gray-100">
                              <Image
                                src={product.Image?.[0].url || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-contain p-4"
                              />
                            </div>
                          </Link>
                         
                          
                        </div>

                        <div className="p-5">
                          <Link href={`/Store/${product?.id}`}>
                            <h3 className="text-lg font-bold text-gray-800 mb-1 hover:text-orange-600">
                              {product.Title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.Description}</p>

                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-orange-600">{product.Price},00 DZD</span>
                            <Link href={`/Store/${product?.id}`}    
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
  )
}

export default ProdList