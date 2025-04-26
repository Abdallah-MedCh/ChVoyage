
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Users, MapPin, Star, Clock, CheckCircle, CalendarCheck2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function PaymentConfirm() {
	return (

		<main className="min-h-screen">
    

		{/* Hero Section */}
		<section className="pt-24  bg-gradient-to-r from-orange-600 to-purple-700 text-white">
		  <div className="container max-h-1 mx-auto px-4 py-12 md:py-16">
			<div className="max-w-4xl mx-auto text-center">
			  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold -mt-10">Thank you</h1>
			  
			</div>
		  </div>
  
		  <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
		</section>
  
		{/* Main Content */}
		<section className="py-12 bg-orange-50">
		  <div className="container mx-auto px-4">
			<div className="max-w-5xl mx-auto">


		<div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800 mb-4">Order Received!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for Purchase. We've received your
                  order  and will scontact you shortly.
                </p>
                <p className="text-gray-600 mb-8">
                  Your booking reference number is:{" "}
                  <span className="font-bold text-orange-800">
                    OR
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  Return to Home
                </Button>
              </div>


			  </div>
		  </div>
  
		</section>
		</main>
	)
}

export default PaymentConfirm
