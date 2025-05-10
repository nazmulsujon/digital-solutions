"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Phone } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the Map component with no SSR
const MapComponent = dynamic(() => import("./map-content"), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse" />,
})

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-sky-50 dark:to-sky-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8 opacity-90">
                Have a project in mind? Let's discuss how we can help bring your ideas to life. Fill out the form and
                we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="opacity-90">Karwan Bazar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="opacity-90">info@digitalsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="opacity-90">+8801601016552</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-200">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-200">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-200">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="w-full min-h-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 20 }}
          animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Find Us</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Visit our office at Karwan Bazar, Dhaka, Bangladesh</p>
          </div>
          <div className="h-[400px] w-full">
            <MapComponent />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
