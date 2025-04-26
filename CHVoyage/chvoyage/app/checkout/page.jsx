'use client'
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function Checkout() {
    const serachParams = useSearchParams();
    const options = {
		mode: 'payment',
		currency: 'usd',
		amount:  Number(serachParams.get('amount'))*100,
	}
	return (
		<main className="min-h-screen">
<section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Complete Your Purchase</h1>
            <p className="text-lg text-orange-100 mb-8">
              final step
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
                    <h2 className="text-2xl font-bold text-orange-800">User Information</h2>
                    <p className="text-gray-600">Please provide your details</p>
                  </header>

                  <div className="space-y-8">
                    {/* Lead Traveler */}
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <div>
                          <Label htmlFor="fullName" className="text-gray-700">
                            Full Name
                          </Label>
                          <Input id="fullName" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="Adresse" className="text-gray-700">
						  Adresse
                          </Label>
                          <Input id="Adresse" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700">
                            Email Address
                          </Label>
                          <Input id="email" type="email" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700">
                            Phone Number
                          </Label>
                          <Input id="phone" className="mt-1" />
                        </div>
                        
                       
                      </div>
                    </div>
					
                  </div>

				

				  <Elements stripe={stripePromise} options={options}>
            <CheckoutForm amount={Number(serachParams.get('amount'))}/>
    	</Elements>
                </div>
				
				</div>
				
                </div>
	  </section>
		
	</main>
  )
}

export default Checkout