import React from 'react'
import Link from "next/link"
import { ShoppingCart, Heart, Star, ChevronRight, Truck, RotateCcw, Shield, Check, ArrowLeft } from "lucide-react"
function SkeletonPage() {
  return (
        <main className="min-h-screen">

{/* Breadcrumb */}
<section className="pt-24 bg-orange-50">
  <div className="container mx-auto px-4 py-4">
    <div className="flex items-center text-sm text-gray-500">
      <Link href="/" className="hover:text-orange-600">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 mx-1" />
      <Link href="/store" className="hover:text-orange-600">
        Store
      </Link>
      <ChevronRight className="h-4 w-4 mx-1" />
      <span className="bg-gray-200 rounded w-32 h-5 inline-block animate-pulse" />
    </div>
  </div>
</section>
    <section className="py-8 bg-orange-50">
  <div className="container mx-auto px-4">
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
        {/* Skeleton Image */}
        <div>
          <div className="relative h-[400px] bg-gray-200 rounded-lg mb-4" />
        </div>

        {/* Skeleton Info */}
        <div>
          <div className="mb-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
            <div className="h-16 bg-gray-200 rounded w-full" />
          </div>

          <div className="mb-6">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-2" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="h-12 bg-gray-200 rounded w-full sm:w-1/2" />
            <div className="h-12 bg-gray-200 rounded w-full sm:w-1/2" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Related Products Skeleton */}
<section className="py-12 bg-orange-50">
  <div className="container mx-auto px-4">
    <div className="h-6 bg-gray-200 rounded w-1/3 mb-8 animate-pulse" />

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-48 bg-gray-200" />
          <div className="p-5">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-8 bg-gray-200 rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-40 mx-auto" />
    </div>
  </div>
</section>
</main>

  )
}

export default SkeletonPage