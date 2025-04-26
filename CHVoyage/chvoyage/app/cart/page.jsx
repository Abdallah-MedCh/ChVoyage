'use client'
import React, { useContext,useState } from 'react'
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Calendar, Users, CreditCard, CheckCircle, Trash2 } from "lucide-react"
import Image from "next/image"


function Cart() {
    const router = useRouter();
    const { cart,setCart } = useContext(CartContext)
    const RemovefromCart = (id) => {
        console.log('id to delete', id)
        CartApis.deleteCartItem(id).then(res => {
            console.log('response from delete cart item', res)
            setCart((oldCart) => oldCart.filter((item) => item.id !== id));
            
        });
          /*
           a custom strapi delete was needed for this to work (look in src\api\cart\controllers and src\api\cart\routes */
    }
    const TotalPrice = () => {
        let total = 0;
        cart?.forEach((item) => {
            total += item?.product?.[0].Price;
        });
        return total;

    }
    return (
      <main className="min-h-screen">
                <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Complete Your purchase</h1>
            <p className="text-lg text-orange-100 mb-8">
              review your cart
            </p>

          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>

      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                            <header className="text-center mb-8">
                              <h2 className="text-2xl font-bold text-orange-800">Your Travel Cart</h2>
                              <p className="text-gray-600">Review your selected destinations and packages</p>
                            </header>
          
                            <div className="mt-8">
                              <ul className="space-y-6">
                                {cart.map((item) => (
                                  <li
                                    key={item.id}
                                    className="flex flex-col md:flex-row md:items-center gap-4 border-b border-gray-100 pb-6"
                                  >
                                    <div className="relative w-full md:w-auto md:h-auto h-40 md:flex-shrink-0">
                                      <Image
                                        src={item?.product?.[0].Image?.[0].url || "/placeholder.svg"}
                                        alt={item.destination}
                                        width={120}
                                        height={80}
                                        className="rounded-lg object-cover w-full h-full md:w-[120px] md:h-[80px]"
                                      />
                                    </div>
          
                                    <div className="flex-grow">
                                      <h3 className="text-lg font-bold text-orange-800">{item?.product?.[0].Title}</h3>
          
                                      
                                    </div>
          
                                    <div className="flex flex-col items-end justify-between h-full">
                                      <div className="text-right">
                                        <div className="text-lg font-bold text-orange-600">{item?.product?.[0].Price},00 DZD</div>
                                      </div>

                                      <button  onClick={()=>RemovefromCart(item?.id)} className="text-gray-500 hover:text-red-600 transition mt-2 flex items-center">
                                        <Trash2 className="h-4 w-4 mr-1" />
                                        {console.log('item id', item)}
                                        <span className="text-sm">Remove</span>
                                      </button>
                                    </div>
                                  </li>
                                ))}
                              </ul>
          
                              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-full max-w-md space-y-4">
                                  <dl className="space-y-2 text-sm text-gray-700">
                                    
          
                                    <div className="flex justify-between !text-lg font-bold text-orange-800">
                                      <dt>Total</dt>
                                      <dd>{TotalPrice()},00 DZD</dd>
                                    </div>
                                  </dl>
          
                                  
          
                                  <div className="flex justify-end">
                                    <Button
                                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                                      onClick={() => router.push('/checkout?amount='+TotalPrice())}
                                    >
                                      Checkout
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
            
          </div>
          </div>

          </section>



</main>
  )
}

export default Cart