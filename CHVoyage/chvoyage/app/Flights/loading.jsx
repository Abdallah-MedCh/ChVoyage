"use client"

import { Compass } from "lucide-react"

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-orange-50 to-pink-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md flex flex-col items-center">
        {/* Sun and plane animation */}
        <div className="relative mb-8">
          {/* Sun */}
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-full w-24 h-24 flex items-center justify-center animate-pulse">
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-orange-300 to-pink-300 animate-ping opacity-30"></div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/80"></div>
            </div>
          </div>

        </div>

        {/* Logo and text */}
        <div className="flex items-center mb-8">
          <Compass className="h-8 w-8 text-orange-600 mr-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            ChVoyage
          </h1>
        </div>

        {/* Loading text */}
        <p className="text-gray-600 mb-8">Preparing your journey...</p>

        {/* Animated dots */}
        <div className="flex space-x-3 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"
              style={{
                animation: `bounce 1.4s infinite ease-in-out both`,
                animationDelay: `${i * 0.16}s`,
              }}
            ></div>
          ))}
        </div>

        

      </div>

      {/* CSS for custom animations */}
      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
