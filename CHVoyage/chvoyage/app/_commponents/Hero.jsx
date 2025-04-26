"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from 'next/link'

const destinations = [
  {
    image: "/images/hpi1.jpg",
  },
  {
    image: "/images/hpi2.jpg",
  },
  {
    image: "/images/hpi3.jpg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-1">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left side */}
        <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <a href="#" className="text-white hover:text-orange-200 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-orange-200 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-orange-200 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="ml-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Discover the World with Us</h1>
            <p className="text-lg text-orange-100 mb-8 max-w-md">
              Experience breathtaking destinations with our curated travel packages. From beaches to mountains, we have
              the perfect getaway for you.
            </p>
            <Link href="/Contact" >
            <button className="bg-white text-orange-600 hover:bg-orange-100 flex gap-2 p-3 rounded-lg ">Explore Destinations</button>
            </Link>
          </div>
        </div>

        {/* Right side - Vertical Carousel */}
        <div className="relative h-[60vh] md:h-auto overflow-hidden">
          <div className="h-full flex flex-col">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : index < currentSlide
                      ? "opacity-0 -translate-y-full pointer-events-none"
                      : "opacity-0 translate-y-full pointer-events-none"
                }`}
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt="image"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
              </div>
            ))}
          </div>

          {/* Dots - vertical */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
