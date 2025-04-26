'use client'

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useContext, useEffect , useState} from 'react'
import Link from "next/link"





export default function Footer() {

  const [isLoggedIn,setIsLoggedIn]=useState(false)
  useEffect(()=>{
    setIsLoggedIn(window.location.href.toString().includes('sign-in','sign-up'))
  },[])

  return !isLoggedIn && (
    <footer className="bg-gradient-to-r from-pink-700 to-orange-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ChVoyage</h3>
            <p className="text-orange-200 mb-4">
              Discover the world with our premium travel experiences. We specialize in creating unforgettable journeys
              tailored to your preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-orange-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-orange-200 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-orange-200 hover:text-white transition-colors">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                  Store
                </Link>
              </li>
            
              <li>
                <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-orange-200">123 Sunset Boulevard, Travel City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-orange-200">+213 (046) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-orange-200">info@ChVoyage.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-orange-200 mb-4">
              Subscribe to our newsletter for travel tips, exclusive offers, and destination inspiration.
            </p>
            <div className="flex flex-col space-y-2">
              <Input disabled
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-orange-500/50 text-white placeholder:text-orange-200/70"
              />
              <Button disabled className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700/50 mt-12 pt-6 text-center text-orange-300 text-sm">
          <p>&copy; {new Date().getFullYear()} ChVoyage. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
