"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import MaxWidthWrapper from "./max-width-wrapper"

// Service data structure
const services = [
  {
    id: "webDevelopment",
    title: "Web Development",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    description: "We build responsive, high-performance websites that deliver exceptional user experiences.",
    items: [
      "E-Commerce",
      "Newspaper/Magazine",
      "Corporate/Business",
      "Education/Portfolio",
      "Hotel/Restaurant",
      "Real-Estate/Construction",
      "NGO/Event/Education",
      "Custom Website (Any)",
    ],
  },
  {
    id: "softwareDevelopment",
    title: "Software Development",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
    description: "We develop custom software solutions tailored to your business needs and requirements.",
    items: [
      "ERP Software",
      "Accounting & Inventory",
      "Point of Sales (POS)",
      "Shop Management",
      "School Management",
      "HR & Payroll",
      "Freight Forwarding",
      "Custom Software (Any)",
    ],
  },
  {
    id: "appsDevelopment",
    title: "Apps Development",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    description: "We create native and cross-platform mobile applications for iOS and Android devices.",
    items: [
      "E-Commerce",
      "Newspaper/Magazine",
      "Corporate/Business",
      "Education/Portfolio",
      "Hotel/Restaurant",
      "Real-Estate/Construction",
      "NGO/Event/Education",
      "Custom Apps (Any)",
    ],
  },
  {
    id: "digitalMarketing",
    title: "Digital Marketing",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
      </svg>
    ),
    description: "We help businesses grow their online presence and reach their target audience effectively.",
    items: [
      "SEO",
      "Business Marketing",
      "Facebook Marketing",
      "Youtube Marketing",
      "Video Marketing",
      "Email Marketing",
      "SMS Marketing",
      "Google Adsense",
    ],
  },
  {
    id: "graphicDesign",
    title: "Graphic Design",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a9 9 0 0 0 0 18" />
        <path d="M3 12a9 9 0 0 0 9 9" />
        <path d="M12 3a9 9 0 0 1 9 9" />
        <path d="M21 12a9 9 0 0 1-9 9" />
        <path d="m12 3-3 9h6Z" />
      </svg>
    ),
    description: "We create visually stunning designs that communicate your brand message effectively.",
    items: [
      "Logo Design",
      "Brochure Design & Print",
      "Social Design",
      "Cover Design",
      "Logo Animation",
      "Image Editing",
      "Shop Image Editing",
    ],
  },
  {
    id: "techSupport",
    title: "Tech Support",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
    description: "We provide comprehensive technical support and training for all your digital needs.",
    items: [
      "Domain Hosting Server",
      "ICT Training",
      "Advance Office",
      "Graphic Design",
      "Digital Marketing",
      "Web & Development",
      "Software Development",
      "Apps Development",
    ],
  },
]

export default function FeaturedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-950 dark:via-gray-900 dark:to-blue-950"
    >
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100 hover:bg-sky-100 dark:hover:bg-sky-900">
            Our Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto dark:text-gray-300">
            We combine cutting-edge technology with creative design to deliver exceptional digital solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 dark:text-gray-300">{service.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm dark:text-gray-300 line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  )
}

