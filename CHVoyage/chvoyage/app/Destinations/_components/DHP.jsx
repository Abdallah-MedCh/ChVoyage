'use client'
import React, { useEffect,useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from 'next/link'
import DistApi from '../../_utils/DistApi'


export default function DHP() {


    const [DistList, setDisttList] = useState([]);
  
    useEffect(() => {
      getLatestDist();
    }, []);
  
    const getLatestDist = () => {
      DistApi.getLatestDist()
        .then(res => {
          setDisttList(res.data.data);
         
        })
        .catch(error => {
          console.error('Error fetching distinations:', error);
        });
    };





  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-100 to-pink-100" id="destinations">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Popular Destinations</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Explore our most sought-after travel packages and start planning your dream vacation today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DistList.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image src={trip.Image?.[0].url || "/placeholder.svg"} alt={trip.destination} fill className="object-cover" />
              </div>

              <div className="p-6">
                

                <p className="mb-4  text-lg font-bold text-orange-800 ">{trip.Name}</p>

                <div className="flex justify-between items-center">
                  <div>
                    {}
                    <span className="text-2xl font-bold text-orange-600">{Number(trip.Price).toLocaleString('fr-FR')},00 DZD</span>
                    <span className="text-gray-500 ml-1">/ person</span>
                  </div>
                  <span className="text-sm text-gray-500">{trip.Duration} days</span>
                </div>

                <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/Destinations">
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
            View All Destinations
          </Button>
          </Link>
          
        </div>
      </div>
    </section>
  )
}
