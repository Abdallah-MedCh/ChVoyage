
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8">
              Have questions or need assistance planning your next adventure? Our travel experts are here to help you
              every step of the way.
            </p>
          </div>
        </div>

        <div className="h-20 bg-gradient-to-b from-transparent to-orange-50"></div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Our Location</h3>
              <p className="text-gray-600">123 Sunset Boulevard</p>
              <p className="text-gray-600">Travel City, TC 12345</p>
              <p className="text-gray-600">United States</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Phone Number</h3>
              <p className="text-gray-600">Customer Service:</p>
              <p className="text-gray-600 font-medium">phone number</p>
              <p className="text-gray-600 mt-2">Booking Inquiries:</p>
              <p className="text-gray-600 font-medium">phone number</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Email Address</h3>
              <p className="text-gray-600">General Inquiries:</p>
              <p className="text-gray-600 font-medium">info@chvoyage.com</p>
              <p className="text-gray-600 mt-2">Support:</p>
              <p className="text-gray-600 font-medium">support@chvoyage.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday:</p>
              <p className="text-gray-600 font-medium">9:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mt-2">Saturday:</p>
              <p className="text-gray-600 font-medium">10:00 AM - 4:00 PM</p>
              <p className="text-gray-600 mt-2">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and one of our travel experts will get back to you as soon as possible to help
                plan your perfect getaway.
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl shadow-lg p-6 md:p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white border-gray-300 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white border-gray-300 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-white border-gray-300 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 mb-2 block">
                      Subject
                    </Label>
                    <Select>
                      <SelectTrigger id="subject" className="bg-white border-gray-300 focus:border-orange-500">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Booking Inquiry</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="text-gray-700 mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="bg-white border-gray-300 focus:border-orange-500 min-h-[150px]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 mr-2"
                      />
                      <label htmlFor="newsletter" className="text-gray-700">
                        Subscribe to our newsletter for travel tips and exclusive offers
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex justify-center">
                    <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-8 py-6">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions. If you can't find what you're looking for, please
              contact us directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I book a trip with SunsetTravel?",
                  answer:
                    "You can book a trip through our website by selecting your desired destination and following the booking process. Alternatively, you can contact our customer service team by phone or email for personalized assistance.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "Our standard cancellation policy allows for a full refund if canceled 30 days before departure. Cancellations made 15-29 days before departure receive a 50% refund. Cancellations less than 15 days before departure are non-refundable. Some special packages may have different terms.",
                },
                {
                  question: "Do you offer travel insurance?",
                  answer:
                    "Yes, we offer comprehensive travel insurance packages that cover trip cancellation, medical emergencies, lost luggage, and more. We highly recommend purchasing travel insurance for all international trips.",
                },
                {
                  question: "How can I change my reservation?",
                  answer:
                    "To modify your reservation, please contact our customer service team with your booking reference number. Changes are subject to availability and may incur additional fees depending on the nature of the change.",
                },
                {
                  question: "Do you offer group discounts?",
                  answer:
                    "Yes, we offer special rates for groups of 10 or more travelers. Please contact our group booking department for a customized quote and to discuss your specific requirements.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2 flex items-start">
                    <MessageSquare className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to meet with our travel experts in person and start planning your dream vacation.
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden h-[400px] relative">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
