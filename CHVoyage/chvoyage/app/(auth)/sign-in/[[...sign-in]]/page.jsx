import { SignIn } from '@clerk/nextjs'

import Image from "next/image"
import Link from "next/link"
import { Plane, MapPin, Compass } from "lucide-react"

export default function Page() {
  return (
      
<section className="bg-white">
<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gradient-to-r from-orange-600 to-purple-700 lg:col-span-5 lg:h-full xl:col-span-6">
          {/* Background Image 
          <Image
            alt="Travel destinations"
            src="/placeholder.svg?height=1080&width=1920&text=Tropical+Beach+Sunset"
            fill
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          
          
          */}

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <Compass className="h-10 w-10" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to ChVoyage</h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Sign in to your account to access exclusive travel deals, manage your bookings, and continue planning your
              dream vacation with personalized recommendations.
            </p>

            <div className="mt-8 flex items-center text-white/80">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Join thousands of travelers exploring the world with us</span>
            </div>
          </div>
        </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        

        <SignIn />
      </div>
    </main>
  </div>
</section>

  )
}