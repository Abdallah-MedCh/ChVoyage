"use client"

import { useState, useContext } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, MapPin, Star, Clock, CheckCircle, CalendarCheck2 } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {BookingContext} from "../_context/BookingContext";

export default function BookingPage() {
  const { BookingDist } = useContext(BookingContext);
  //const searchParams = useSearchParams()
  //const destinationId = searchParams.get("id") || "1"
  
  // In a real app, you would fetch this data based on the ID
  

  const [selectedPackageId, setSelectedPackageId] = useState(
    String(BookingDist.dist_options?.[0].id) || ""
  )
  
  const getSelectedPackage = () => {
    return BookingDist.dist_options.find((pkg) => String(pkg.id) === selectedPackageId)
  }
  
  // Replace the travelers state with separate states for adults and infants
  const [adults, setAdults] = useState(2)
  //const [infants, setInfants] = useState(0)
  const [additionalTravelers, setAdditionalTravelers] = useState([])
  //const [departureDate, setDepartureDate] = useState(destination.departureDates[0])
  const [formSubmitted, setFormSubmitted] = useState(false)

  const getSelectedPackageIndex = () => {
    return BookingDist.dist_options.findIndex((pkg) => String(pkg.id) === selectedPackageId)
  }

  // Update the calculateTotal function to only count adults for pricing
  const calculateTotal = () => {
    const pkg = getSelectedPackage()
    return pkg.Price * adults
  }

  // Add a function to add additional travelers
  const addTraveler = () => {
    setAdditionalTravelers([...additionalTravelers, { firstName: "", lastName: "" }])
  }

  // Add a function to remove additional travelers
  const removeTraveler = (index) => {
    const updatedTravelers = [...additionalTravelers]
    updatedTravelers.splice(index, 1)
    setAdditionalTravelers(updatedTravelers)
  }

  // Add a function to update additional traveler information
  const updateTraveler = (index, field, value) => {
    const updatedTravelers = [...additionalTravelers]
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value }
    setAdditionalTravelers(updatedTravelers)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    const formData = new FormData(e.target);
    var total=calculateTotal()
    var pac = getSelectedPackage()
    const dataToSend = [];
    for (let [key, val] of formData.entries()) {
      dataToSend.push(key)
      dataToSend.push(val)
      
    }
    dataToSend.push("Hotel Name")
    dataToSend.push(pac?.HotelName)
    dataToSend.push("Price")
    dataToSend.push(pac?.Price)
    dataToSend.push("Total")
    dataToSend.push(total)

    //dataToSend.packageName = pac?.HotelName;
      //dataToSend.packagePrice = pac?.Price;
      //dataToSend.totalPrice = total;  
    
  
    sendEmail(dataToSend);


  }
  const sendEmail = async (data) => {
    try {
      const res = await fetch('api/send-email', {
        method: 'POST',
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error('Failed to send email');
      }
  
      const result = await res.json();
      console.log('Email sent successfully:', result);
    } catch (err) {
      console.error('Email send failed:', err);
    }
  };
    
  
  return (
    <main className="min-h-screen">
    

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Book Your Dream Vacation</h1>
            <p className="text-lg text-orange-100 mb-8">
              Complete your booking for {BookingDist.Name}, {BookingDist.Country} and prepare for an unforgettable
              journey.
            </p>
          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {formSubmitted ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800 mb-4">Booking Request Received!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for booking your trip to {BookingDist.Name}, {BookingDist.Country}. We've received your
                  booking request and will send you a confirmation email shortly.
                </p>
                <p className="text-gray-600 mb-8">
                  Your booking reference number is:{" "}
                  <span className="font-bold text-orange-800">
                    BK
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  Return to Home
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Destination Info */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                    <div className="relative h-48">
                      <Image
                        src={BookingDist.Image?.[0].url || "/placeholder.svg"}
                        alt={BookingDist.Name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-orange-800 mb-2">
                        {BookingDist.Name}
                      </h2>

                      <div className="flex items-center mb-4">
                        <MapPin className="h-4 w-4 text-orange-500 mr-1" />
                        <span className="text-gray-600 text-sm">{BookingDist.Country}</span>
                        
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <CalendarCheck2 className="h-4 w-4 text-orange-500 mr-1" />
                        <span>{BookingDist.Date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock className="h-4 w-4 text-orange-500 mr-1" />
                        <span>{BookingDist.Duration} days</span>
                      </div>

                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <h3 className="font-semibold text-orange-800 mb-2">Selected Package</h3>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="font-medium">{"Package Option " + (getSelectedPackageIndex() + 1)}</div>
                          <div className="text-sm text-gray-600 mb-2">Hotel: {getSelectedPackage()?.HotelName}</div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {adults} adult(s)
                            </span>
                            <span className="font-bold text-orange-600">{calculateTotal()},00 DZD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Booking Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-orange-800 mb-6">Booking Details</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        {/* Package Selection */}
                        <div>
                          <Label htmlFor="package" className="text-gray-700 font-medium">
                            Select Package
                          </Label>
                          <Select value={selectedPackageId} name="package" onValueChange={setSelectedPackageId}>
  <SelectTrigger id="package" className="mt-1">
    <SelectValue placeholder="Select package" />
  </SelectTrigger>
  <SelectContent>
    {BookingDist?.dist_options.map((pkg, index) => (
      <SelectItem key={String(pkg.id)} value={String(pkg.id)}>
        {"Package Option " + (index + 1)} - {pkg.Price},00 DZD/person
      </SelectItem>
    ))}
  </SelectContent>
</Select>
                        </div>

                       

                        {/* Number of Travelers */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Number of Adults */}
                          <div>
                            <Label htmlFor="adults" className="text-gray-700 font-medium">
                            Number of Travelers
                            </Label>
                            <div className="flex items-center mt-1">
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-r-none border-gray-300"
                                onClick={() => setAdults(Math.max(1, adults - 1))}
                              >
                                -
                              </Button>
                              <div className="h-10 px-4 flex items-center justify-center border-y border-gray-300">
                                <Users className="h-4 w-4 text-gray-500 mr-2" />
                                <span>{adults}</span>
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-l-none border-gray-300"
                                onClick={() => setAdults(adults + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>

                          
                        </div>

                        {/* Replace the Traveler Information section with dynamic travelers */}
                        <div className="border-t border-gray-200 pt-6 mt-6">
                          <h3 className="text-xl font-bold text-orange-800 mb-4">Traveler Information</h3>

                          {/* Lead Traveler */}
                          <div className="mb-6">
                            <h4 className="font-medium text-orange-800 mb-3">Lead Traveler</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName" className="text-gray-700">
                                  First Name
                                </Label>
                                <Input id="firstName" name="firstName" className="mt-1" required />
                              </div>
                              <div>
                                <Label htmlFor="lastName" className="text-gray-700">
                                  Last Name
                                </Label>
                                <Input id="lastName" name="lastName" className="mt-1" required />
                              </div>
                              <div>
                                <Label htmlFor="email"  className="text-gray-700">
                                  Email Address
                                </Label>
                                <Input id="email" name="email" type="email" className="mt-1" required />
                              </div>
                              <div>
                                <Label htmlFor="phone" className="text-gray-700">
                                  Phone Number
                                </Label>
                                <Input id="phone" name="phone" className="mt-1" required />
                              </div>
                            </div>
                          </div>

                          {/* Additional Travelers */}
                          {additionalTravelers.length > 0 && (
                            <div className="mb-6">
                              <h4 className="font-medium text-orange-800 mb-3">Additional Travelers</h4>
                              {additionalTravelers.map((traveler, index) => (
                                <div
                                  key={index}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100"
                                >
                                  <div>
                                    <Label htmlFor={`traveler-${index}-firstName`} className="text-gray-700">
                                      First Name
                                    </Label>
                                    <Input
                                      id={`traveler-${index}-firstName`}
                                      name={`traveler-${index}-firstName`}
                                      className="mt-1"
                                      value={traveler.firstName}
                                      onChange={(e) => updateTraveler(index, "firstName", e.target.value)}
                                      required
                                    />
                                  </div>
                                  <div className="relative">
                                    <Label htmlFor={`traveler-${index}-lastName`} className="text-gray-700">
                                      Last Name
                                    </Label>
                                    <Input
                                      id={`traveler-${index}-lastName`}
                                      name={`traveler-${index}-lastName`}
                                      className="mt-1"
                                      value={traveler.lastName}
                                      onChange={(e) => updateTraveler(index, "lastName", e.target.value)}
                                      required
                                    />
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      className="absolute top-0 right-0 text-gray-500 hover:text-red-600"
                                      onClick={() => removeTraveler(index)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Add Traveler Button */}
                          <Button
                            type="button"
                            variant="outline"
                            className="mb-6 border-orange-500 text-orange-600 hover:bg-orange-50"
                            onClick={addTraveler}
                          >
                            + Add Traveler
                          </Button>

                          {/* Special Requests */}
                          <div>
                            <Label htmlFor="specialRequests" className="text-gray-700">
                              Special Requests (Optional)
                            </Label>
                            <textarea
                              id="specialRequests"
                              name="specialRequests"
                              rows={4}
                              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:ring focus:ring-orange-200"
                              placeholder="Any dietary requirements, accessibility needs, or other special requests..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-6">
                          <h3 className="text-xl font-bold text-orange-800 mb-4">Payment Summary</h3>

                          <div className="bg-orange-50 rounded-lg p-4 mb-6">
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-700">{getSelectedPackage()?.HotelName}</span>
                              <span className="text-gray-700">
                                {getSelectedPackage()?.Price},00 DZD x {adults}
                              </span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-orange-800 pt-2 border-t border-orange-200">
                              <span>Total</span>
                              <span>{calculateTotal()},00 DZD</span>
                            </div>
                          </div>

                         

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 py-6"
                          >
                            Complete Booking
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}
