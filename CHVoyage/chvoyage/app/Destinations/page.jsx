'use server'
import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Star, Globe, Sun, Snowflake, Mountain, Palmtree, Building, Waves } from "lucide-react"
import Link from "next/link"
import DistApi from '../_utils/DistApi'





export default async function DestinationsPage() {


        const res = await DistApi.getLatestDist(); // This runs on the server
        const DistList = res.data.data;

  /*  sepeprating components could improve the performance i have yet to try it  
  
  
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
    };*/


  return (
    <main className="min-h-screen">
      

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Explore Our Destinations</h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Discover breathtaking locations around the world, from tropical beaches to snow-capped mountains. Find
              your perfect getaway and create memories that last a lifetime.
            </p>

            
          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 md:mb-0">{DistList.length} Destinations</h2>

            
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <TabsContent value="grid" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {DistList.map((destination) => (
                  <div
                    key={destination.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                  >
                    <Link href={`/Destinations/${destination.dID}`}>
                      <div className="relative h-48">
                        <Image
                          src={destination.Image?.[0].url || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
                          {destination.Category}
                        </div>
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Link href={`/Destinations/${destination.dID}`}>
                            <h3 className="text-lg font-bold text-orange-800 hover:text-orange-600">
                              {destination.Name}
                            </h3>
                          </Link>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span className="text-sm">{destination.Country}</span>
                          </div>
                        </div>
                        
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.Description}</p>

                     

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold text-orange-600">{Number(destination.Price).toLocaleString('fr-FR')},00 DZD</span>
                          <span className="text-gray-500 text-sm ml-1">/ person</span>
                        </div>
                        <span className="text-sm text-gray-500">{destination.Duration} days</span>
                      </div>

                      <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            
          </Tabs>

          
        </div>
      </section>
     

    </main>
  )
}
