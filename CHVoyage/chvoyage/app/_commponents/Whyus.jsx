//why us section 
import { Compass, Shield, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Unique Destinations",
    description: "We offer exclusive access to hidden gems and unique travel experiences around the world.",
  },
  {
    icon: Shield,
    title: "Safe Travels",
    description: "Your safety is our priority with 24/7 support and comprehensive travel insurance.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "We handle all the planning and logistics so you can focus on enjoying your journey.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We promise the best rates with our price match guarantee and no hidden fees.",
  },
]

export default function Whyus() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-pink-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            We're dedicated to making your travel dreams come true with personalized service and unforgettable
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
