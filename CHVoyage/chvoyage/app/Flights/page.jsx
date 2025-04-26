"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Plane, CalendarIcon, ArrowRight, Clock, Luggage } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { fetchFlights,fetchFlightDetails } from "../_utils/FlightApi"
//we can add more as needed or use an api to get the codes (the api gives limited number of calls in free tier thats why i couldt add more things)
//there are better google flight api and even better if you have amadus api and integrate it here of cours multiple changes should be made
const destinationss = {
  'Alger': 'ALG',
  'Oran': 'ORN',
  'Tlemcen': 'TLM',
  'NewYork': 'NYC',
  'Paris': 'PAR',
}
export default function FlightsPage() {
  const [flightss, setFlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flightselect, setflightselect] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [flightLink, setFlightLink] = useState('');

    const [departureDate, setDepartureDate] = useState()
  const [returnDate, setReturnDate] = useState()

  
  const handleClick = async (fid) => {
    setflightselect(prev => (prev === fid ? null : fid))
    setLoading(true); // Start loading
    const formData = {
      returningToken: fid,
      arrivalDate: format(returnDate, 'yyyy-MM-dd')
    }
    

    setError(null);
    try {
      const data = await fetchFlightDetails(formData);
      setFlightLink(data);
      setShowModal(true);

    } catch (err) {
      setError('Something went wrong fetching flights.');
      console.error(err);
    } finally {
      setLoading(false);
    }
   

    
                                    };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    const formData = new FormData(e.target);

    const rawData = Object.fromEntries(formData.entries())

    // Remap field names
    const payload = {
      departureId: rawData.from,
      arrivalId: rawData.to,
      departureDate: rawData.ddate,
      arrivalDate: rawData.rdate,
      currency: 'DZD'
      //adults: rawData.passengers by defaults is 1
    }
    setError(null);
    try {
      const data = await fetchFlights(payload);
      setFlights(data);
      
    } catch (err) {
      setError('Something went wrong fetching flights.');
      console.error(err);
    } finally {
      setLoading(false);
    }
    

  }

  
  /*
      <div>


{productList.length === 0 ? (
        <Skeleton/>
      ) : (
  */

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Find Your Perfect Flight</h1>
            <p className="text-lg text-orange-100 mb-8 text-center">
              Search and compare flights from hundreds of airlines and book your next journey with ease.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Tabs defaultValue="roundtrip" className="w-full" >
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="oneway" >
                    One Way
                  </TabsTrigger>
                  <TabsTrigger value="roundtrip" >
                    Round Trip
                  </TabsTrigger>
                  <TabsTrigger value="multicity">
                    Multi-City
                  </TabsTrigger>
                </TabsList>
                <form  onSubmit={handleSubmit} >
                <TabsContent value="roundtrip" className="mt-0">
                
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* From */}
                    
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-lg p-3 h-full">
                        <Label htmlFor="from" className="text-white mb-2 block">
                          From
                        </Label>
                        <Select name="from">
                          <SelectTrigger
                            id="from"
                            className="border-none bg-transparent h-8 p-0 text-base font-medium text-white data-[placeholder]:text-white"
                          >
                            <SelectValue placeholder="Departure"  />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(destinationss).map(([cityName, cityCode]) => (
                              <SelectItem key={cityCode} value={cityCode}>
                                {cityName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* To */}
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-lg p-3 h-full">
                        <Label htmlFor="to" className="text-white text-sm block mb-1">
                          To
                        </Label>
                        <Select name="to">
                          <SelectTrigger
                            id="to"
                            className="border-none bg-transparent h-8 p-0 text-base font-medium text-white data-[placeholder]:text-white"
                          >
                            <SelectValue placeholder="Destination" />
                          </SelectTrigger>
                          <SelectContent>
                          {Object.entries(destinationss).map(([cityName, cityCode]) => (
                              <SelectItem key={cityCode} value={cityCode}>
                                {cityName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Departure Date */}
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-lg p-3 h-full">
                        <Label htmlFor="departure-date" className="text-white text-sm block mb-1">
                          Departure Date
                        </Label>
                        <Popover name="ddate">
                          <PopoverTrigger asChild>
                            <Button
                              variant="ghost"
                              className="p-0 h-8 text-left font-medium justify-start w-full hover:bg-transparent text-white"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                              <span>{departureDate ? format(departureDate, "MMM d, yyyy") : "Select date"}</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                            {/* Hidden input to pass date in form */}
                            {departureDate && (
                                <input type="hidden" name="ddate" value={format(departureDate, 'yyyy-MM-dd')} />
                              )}
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-lg p-3 h-full">
                        <Label htmlFor="return-date" className="text-white text-sm block mb-1">
                          Return Date
                        </Label>
                        <Popover name="rdate">
                          <PopoverTrigger asChild>
                            <Button
                              variant="ghost"
                              className="p-0 h-8 text-left font-medium justify-start w-full hover:bg-transparent text-white"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                              <span>{returnDate ? format(returnDate, "MMM d, yyyy") : "Select date"}</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                          {/* Hidden input to pass date in form */}
                              {returnDate && (
                                <input type="hidden" name="rdate" value={format(returnDate, 'yyyy-MM-dd')} />
                              )}
                      </div>
                    </div>

                    {/* Passengers */}
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-lg p-3 h-full">
                        <Label htmlFor="passengers" className="text-white text-sm block mb-1">
                          Passengers
                        </Label>
                        <Select defaultValue="1" name="passengers">
                          <SelectTrigger
                            id="passengers"
                            className="border-none bg-transparent h-8 p-0 text-base font-medium text-white"
                          >
                            <SelectValue placeholder="Passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Passenger" : "Passengers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    
                  </div>
                  
                  {/* Options */}
                  <div className="mt-6">
                    <RadioGroup disabled defaultValue="direct" className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="direct" id="direct" className="text-white border-white" />
                        <Label htmlFor="direct" className="text-white">
                          Direct Flight
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="with-luggage" id="with-luggage" className="text-white border-white" />
                        <Label htmlFor="with-luggage" className="text-white">
                          With Luggage
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="refundable" id="refundable" className="text-white border-white" />
                        <Label htmlFor="refundable" className="text-white">
                          Refundable
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mt-6 flex justify-end">
                  <Button  type="submit" disabled={loading}  className="w-full bg-white text-orange-600 hover:bg-orange-100 py-6 text-lg">
                    {loading ? (
                      <span className="flex items-center">
                      <span className="inline-block w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin mr-2" />

                              Loading...
                            </span>): (
                      <span className="flex items-center">
                      <Plane className="mr-2 h-5 w-5" /> Search Flights
                    </span>
                    )}
                    
                    
                  </Button>

                 
                  </div>
                </TabsContent>
                </form>

                <TabsContent value="oneway" className="mt-0">
                  {/* Similar form but without return date */}
                  <div className="text-center py-8">
                    <p>One way flight search form would go here</p>
                  </div>
                </TabsContent>

                <TabsContent value="multicity" className="mt-0">
                  {/* Multi-city form */}
                  <div className="text-center py-8">
                    <p>Multi-city flight search form would go here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>

      {/* Flight Results */}
       <div>


        {flightss === null ? (
                <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-2xl font-bold text-orange-800 mb-4 md:mb-0">No Flights Available</h2>
                      </div>
                      </div>
                    </section>
      ) : (
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between">



            <h2 className="text-2xl font-bold text-orange-800 mb-4 md:mb-0">{flightss.data.topFlights.length} Flights Available</h2>

            <div className="flex items-center space-x-4">
              <select disabled className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
                <option>Sort by: Departure Time</option>
                <option>Sort by: Arrival Time</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {flightss.data.topFlights.map((flight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex flex-col  md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-orange-600">{flight.airlineCode}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{flight.airlineNames?.[0]}</h3>
                        {//<p className="text-sm text-gray-500">{flight.flightNumber}</p>
                        }
                      </div>
                    </div>

                    <div className="flex-grow mx-4 hidden md:block">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-800">{flight.departureTime}</p>
                          <p className="text-sm text-gray-500">{flight.departureAirportCode}</p>
                        </div>

                        <div className="flex-grow mx-4 relative">
                          <div className="h-0.5 bg-gray-300 absolute w-full top-1/2"></div>
                          <div className="absolute w-full text-center -top-2">
                            <span className="bg-white px-2 text-sm text-gray-500 flex items-center justify-center mx-auto w-fit">
                              <Clock className="h-3 w-3 mr-1" />
                              {flight.duration}

                            </span>
                          </div>
                          <div className="absolute w-full text-center top-3">
                            <span className="bg-white px-2 text-xs text-gray-500">
                              {flight.stops === null ? "Non-stop" : `${flight.stops} stop`}
                            </span>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-800">{flight.arrivalTime}</p>
                          <p className="text-sm text-gray-500">{flight.arrivalAirportCode}</p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile view for flight times */}
                    <div className="flex items-center justify-between md:hidden mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">{flight.departureTime}</p>
                        <p className="text-xs text-gray-500">{flight.departureAirportCode}</p>
                      </div>

                      <div className="flex flex-col items-center px-2">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-500">{flight.duration}</span>
                      </div>

                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-800">{flight.arrivalTime}</p>
                        <p className="text-xs text-gray-500">{flight.arrivalAirportCode}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">{flight.price},00 DZD</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>

                    <div className="flex items-center  space-x-4 ml-5">
                      
                      <Button
                                onClick={() =>handleClick(flight.returningToken)}
                                disabled={loading}
                                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                              >
                                {loading ? (
                                  <span className="flex items-center">
                              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Loading...
                                  </span>
                                ) : (
                                  'Select'
                                )}
                              </Button>



                              {showModal && (
                                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                                    <h2 className="text-lg font-semibold mb-4">Ready to book?</h2>
                                    <p className="text-sm text-gray-700 mb-6">You’re about to be redirected to another website.</p>
                                    <div className="flex justify-end space-x-3">
                                      <button
                                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                                        onClick={() => setShowModal(false)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white text-sm"
                                        onClick={() => {
                                          window.open(flightLink, '_blank');
                                          setShowModal(false);
                                        }}
                                      >
                                        Continue
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                    </div>
                  </div>

                </div>

              {/* 
              i will use this to expand the flight detail section and add return details 
              {flightselect  === flight.returningToken && (
             
             <div className="p-6 flex justify-center">
             
           </div>
           
           
           
           
            
)}
              */}
            
              </div>
            ))}
          </div>


        </div>
      </section>
)}
      </div>
      {/* Travel Tips */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Flight Booking Tips</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Make your flight booking experience smoother with these helpful tips from our travel experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Book in Advance",
                description: "For the best prices, book your flights at least 6-8 weeks before your departure date.",
                icon: CalendarIcon,
              },
              {
                title: "Be Flexible",
                description: "Consider flying on weekdays or during off-peak seasons for significant savings.",
                icon: Plane,
              },
              {
                title: "Pack Smart",
                description: "Check baggage allowances before you travel to avoid unexpected fees at the airport.",
                icon: Luggage,
              },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <tip.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
