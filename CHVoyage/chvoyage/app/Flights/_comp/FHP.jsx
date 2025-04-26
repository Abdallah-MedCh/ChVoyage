//Flight section homepage
"use client"

import { Button } from "@/components/ui/button"
import { CalendarIcon, Plane,Cloud, MapPin, ArrowRight  } from "lucide-react"
import Link from "next/link"




export default function FHP() {

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 z-0">
        <div className="absolute top-10 left-1/4 opacity-20">
          <Cloud className="text-blue-400 h-16 w-16 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-1/4 opacity-20 ">
          <Cloud className="text-blue-400 h-24 w-24 animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-1/5 opacity-10">
          <Cloud className="text-blue-400 h-20 w-20 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">

      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Book Your Flight</h2>
        
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Creative flight card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Decorative */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-orange-500 to-pink-600 p-6 relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-6 left-8">
                    <Cloud className="text-white h-10 w-10" />
                  </div>
                  <div className="absolute bottom-20 right-8">
                    <Cloud className="text-white h-8 w-8" />
                  </div>
                </div>

                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Destinations Await</h3>
                    <p className="text-orange-100 text-sm">Hundreds of exciting locations just a click away</p>
                  </div>

                  <div className="mt-4 md:mt-0">
                    {/* Animated plane path */}
                    <div className="relative h-24">
                      <div className="absolute w-full">
                        <div className="border-t-2 border-dashed border-white/30 w-full"></div>
                      </div>
                      <div className="absolute left-0 top-0 transform -translate-y-1/2">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute right-4 top-0 transform -translate-y-1/2">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute left-8 top-0 animate-pulse">
                        <Plane className="h-6 w-6 text-white transform rotate-45" />
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-white/80 mt-2">
                      <span>Your City</span>
                      <span>Dream Destination</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="w-full md:w-4/5 p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-1 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Ready to Take Off?</h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Find the perfect flight for your next adventure with just a few clicks.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                      <span className="text-orange-600 font-semibold">1</span>
                    </div>
                    Choose destination
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block self-center" />
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                      <span className="text-orange-600 font-semibold">2</span>
                    </div>
                    Select dates
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block self-center" />
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                      <span className="text-orange-600 font-semibold">3</span>
                    </div>
                    Book & fly
                  </div>
                </div>

                <Link href="/Flights">
                    <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2">
                      <Plane className="mr-2 h-4 w-4" /> Search Flights
                    </Button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
