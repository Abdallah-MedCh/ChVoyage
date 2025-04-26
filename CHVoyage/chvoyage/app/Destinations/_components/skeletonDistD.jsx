import React from 'react'
import { MapPin, Star, ChevronRight, Users, Clock, Sun, Utensils, Check, ArrowLeft, Heart } from "lucide-react"

function Skeleton() {
  return (
    <main className="min-h-screen">

  {/* Breadcrumb Skeleton */}
  <section className="pt-24 bg-orange-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center text-sm text-gray-300 animate-pulse">
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <ChevronRight className="h-4 w-4 mx-1 text-gray-300" />
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <ChevronRight className="h-4 w-4 mx-1 text-gray-300" />
        <div className="h-4 w-32 bg-orange-200 rounded" />
      </div>
    </div>
  </section>

  {/* Hero Image Skeleton */}
  <section className="bg-orange-50">
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-200 animate-pulse" />

      {/* Gallery Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto mt-4 pb-2">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="relative w-24 h-16 rounded-md border-2 border-gray-200 bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    </div>
  </section>

  {/* Content Skeleton */}
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* About Box */}
          <div className="bg-white rounded-xl shadow-md p-6 animate-pulse space-y-4">
            <div className="h-6 w-1/3 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 w-full bg-gray-100 rounded" />
                ))}
              </div>
              <div className="space-y-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
              </div>
            </div>
          </div>

          {/* Package Tabs Skeleton */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-6 animate-pulse">
            <div className="h-8 w-1/3 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
            <div className="h-20 w-full bg-gray-100 rounded" />
            <div className="h-12 w-1/4 bg-orange-300 rounded" />
          </div>

        </div>

        {/* Right Booking Card */}
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 animate-pulse space-y-6">
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-100 rounded" />
          <div className="h-10 w-full bg-gray-100 rounded" />
          <div className="h-10 w-full bg-orange-300 rounded" />
          <div className="h-4 w-3/4 bg-gray-100 rounded" />
        </div>

      </div>
    </div>
  </section>

</main>

  )
}

export default Skeleton