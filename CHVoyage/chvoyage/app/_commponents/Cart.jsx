"use client"

import { useContext, useEffect } from "react"
import { CartContext } from "../_context/CartContext"
import Link from "next/link"
import { ShoppingBag, X, ArrowRight } from "lucide-react"
import Image from "next/image"

function Cart() {
  const { cart } = useContext(CartContext)

  useEffect(() => {
    //console.log("Cart has been updated", cart) // This will run every time `cart` changes.
  }, [cart]) // Dependency array makes sure it only runs when `cart` changes.

  return (
    <div
      className="h-[400px] w-[320px] bg-white rounded-xl shadow-lg
      absolute mx-10 right-10 top-12 overflow-hidden z-20"
    >
      {/* Background map image 
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/placeholder.svg?height=400&width=320&text=World+Map"
          alt="World map background"
          fill
          className="object-cover"
        />
      </div>
            
      */}
      

      {/* Header */}
      <div className="relative bg-gradient-to-r from-orange-500 to-pink-500 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingBag className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white font-bold">Your Cart</h3>
        </div>
        <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
          {cart?.length || 0} items
        </span>
      </div>

      {/* Cart items */}
      <div className="relative p-4 overflow-auto h-[280px]">
        <div className="space-y-4">
          {cart?.length > 0 ? (
            <ul className="space-y-4">
              {cart?.map((item) => (
                <li
                  key={item?.id}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-orange-100"
                >
                  <img
                    src={item?.product?.[0].Image?.[0].url || "/placeholder.svg"}
                    alt=""
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{item?.product?.[0].Title}</h3>
                    <div className="mt-1 text-xs text-gray-600">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-orange-600">{item?.product?.[0].Price},00 DZD</span>
                        <button disabled className="text-gray-400 hover:text-gray-600">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8">
              <ShoppingBag className="h-10 w-10 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative border-t border-gray-100 p-4 bg-white/80 backdrop-blur-sm space-y-3">
        <Link
          href="/cart"
          className="block px-4 py-2 text-sm text-white transition bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-md text-center"
        >
          View my cart ({cart?.length || 0})
        </Link>

        <a
          href="#"
          className="flex items-center justify-center text-sm text-orange-600 transition hover:text-orange-700"
        >
          Continue shopping
          <ArrowRight className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  )
}

export default Cart
