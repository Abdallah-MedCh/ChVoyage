"use client"

import React, { useEffect, useState, useContext } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, Star, ChevronRight, Users, Clock, Sun, Utensils, Check, ArrowLeft, Heart, Plane, Info, Bus, FileUserIcon, AlertOctagon } from "lucide-react"
import DistApi from '../../_utils/DistApi'
import Skeleton from "../_components/skeletonDistD"
import {BookingContext} from "../../_context/BookingContext";

// This would typically come from a database or API



export default function DestinationDetailPage({ params }) {


  const handleClick = () => {
                      
    // Set the data
    BookingDistDetails(DistDetails?.[0]);
  };
  
  const [selectedImage, setSelectedImage] = useState(0)

  const [DistDetails,setDistDetails]=useState({})

  const { BookingDistDetails } = useContext(BookingContext);

useEffect(()=>{
  getDistByID_();
},[params?.id])

const getDistByID_ =()=>{
  DistApi.getPDistByID(params?.id).then(res=>{
    setDistDetails(res.data.data)
     //i could replace it with this res.data.data[0] but i need to re touch the banner and info
    //const test = res.data.data[0] 
    //console.log(test.Title) => this works  <BreadCrumb path={path}/>
    
  })
  

}
  return (
    <div>
    {DistDetails.length === 0 ? (
        <Skeleton/>
      ) : (

          
    <main className="min-h-screen">
      

      {/* Breadcrumb */
}
      <section className="pt-24 bg-orange-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/destinations" className="hover:text-orange-600">
              Destinations
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-orange-600 font-medium">
              {DistDetails[0]?.Name}, {DistDetails[0]?.Country}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */
      }
      <section className="bg-orange-50">
        <div className="container mx-auto px-4 py-8">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={DistDetails[0]?.Image?.[selectedImage].url || DistDetails.Image?.[0].url}
              alt={DistDetails[0]?.Name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {DistDetails[0]?.Name}
              </h1>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{DistDetails[0]?.Country}</span>
                
              </div>
            </div>
          </div>

          {DistDetails[0]?.Image && (
            <div className="flex space-x-2 overflow-x-auto mt-4 pb-2">
              {DistDetails[0]?.Image?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 h-16 rounded-md border-2 ${
                    selectedImage === index ? "border-orange-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={img?.url || "/placeholder.svg"}
                    alt={`${DistDetails[0]?.Name} view ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Destination Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">About {DistDetails[0]?.Name}</h2>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{DistDetails[0]?.Description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">Trip Details</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        <span>
                          <strong>Duration:</strong> {DistDetails[0]?.Duration} days
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Plane className="h-5 w-5 text-orange-500 mr-2" />
                        <span>
                          <strong>Plane Tickets:</strong> {DistDetails[0]?.planetic ? " Included" : "Not included" }
                          
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Bus className="h-5 w-5 text-orange-500 mr-2" />
                        <span>
                          <strong>Transportation: </strong> 
                          {DistDetails[0]?.Trans ? " Included" : "Not included" }
                          
                        </span>                       
                        <div className="relative group inline-block">
                          <Info className="h-5 w-5 text-gray-500 cursor-pointer ml-2" />

                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                          Transportation from Airport to Hotel and vice versa
                          </div>
                        </div>


                      </div>

                      <div className="flex items-center">
                        <FileUserIcon className="h-5 w-5 text-orange-500 mr-2" />
                        <span>
                          <strong>Visa:</strong> {DistDetails[0]?.Visa}
                        </span>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs for Itinerary, Included, Reviews */
             
              }
                       
              <div className="bg-white rounded-xl shadow-md p-6">
              <Tabs defaultValue={String(DistDetails[0]?.dist_options?.[0]?.HotelName)} className="w-full">
                <TabsList className="w-full justify-start border-b mb-6">
                    {DistDetails[0]?.dist_options.map((pkg,index) => (
                   <TabsTrigger
                       key={String(pkg?.HotelName)}
                        value={String(pkg?.HotelName)}
                        className="text-lg capitalize"
                          >
                        {typeof pkg.HotelName === "string" ? "Package Option " + (index + 1) : "Unknown Hotel"}
                    </TabsTrigger>
    ))}
       </TabsList>

      {DistDetails[0]?.dist_options.map((pkg) => (
          
        <TabsContent
      key={String(pkg?.HotelName)}
      value={String(pkg?.HotelName)}
      className="mt-0"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-orange-800">
            {typeof pkg.HotelName === "string" ? pkg.HotelName : "Untitled Package"}
          </h3>
          <div className="text-xl font-bold text-orange-600">
            {Number(pkg.Price).toLocaleString('fr-FR') ?? "N/A"} DZD / person
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <h4 className="font-semibold text-orange-800 mb-2">Accommodation</h4>
          <div className="flex items-start mb-4">
            <Image
              src={pkg.HotelImage?.[0]?.url || "/placeholder.svg"}
              alt={typeof pkg.HotelName === "string" ? pkg.HotelName : ""}
              width={120}
              height={80}
              className="rounded-md mr-4"
            />
            <div>
              <h5 className="font-medium">
                {typeof pkg.HotelName === "string" ? pkg.HotelName : "Hotel"}
              </h5>
              <p className="text-sm text-gray-600">
                {typeof pkg.Description?.[0].children[0].text === "string"
                  ? pkg.Description?.[0].children[0].text
                  : "No description available."}
              </p>
              <div className="flex mt-1">
                {[...Array(pkg.HotelStars ?? 0)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-orange-500 fill-orange-500" />
                ))}
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-orange-800 mb-2">What's Included</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {pkg.whatsincluded?.[0].children.map((item, index) => (
                      <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                       {typeof item.children[0].text === "string"
                      ? item.children[0].text 
                      : "No description provided."}
                         </span>
                      </li>
                          ))}
                        </ul>
          
        </div>
      </div>
    </TabsContent>
  ))}
</Tabs>


              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-orange-600 mr-2">From {Number(DistDetails[0]?.Price).toLocaleString('fr-FR')},00 DZD</span>
                    <span className="text-gray-500">/ per person</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-500">{DistDetails[0]?.Duration} days</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                 

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                    <span className="text-gray-500">{DistDetails[0]?.Date}</span>
                  </div>

                </div>

               

                <div className="space-y-3">
                  {
                    
                  
                  
                  
                  }
                <Link href="/Booking">
                  <Button onClick={handleClick} className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 py-6">
                    Book Now
                  </Button>
                  </Link>
                  
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>No booking fees</p>
                  <p>Free cancellation up to 30 days before departure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    </main>
      )}
    </div>
  )
}
