"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ArrowRight, ArrowLeft } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "./max-width-wrapper"

interface Testimonial {
    id: number
    quote: string
    author: string
    role: string
    company: string
    avatar: string
    rating: number
}

export function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            quote:
                "The team at Digital Solutions transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The increase in leads has been remarkable!",
            author: "Sarah Johnson",
            role: "Marketing Director",
            company: "TechVision Inc.",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
        },
        {
            id: 2,
            quote:
                "Working with Digital Solutions was a game-changer for our e-commerce business. Their attention to detail and technical expertise helped us increase our conversion rate by 45% in just two months.",
            author: "Michael Chen",
            role: "CEO",
            company: "Retail Innovations",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
        },
        {
            id: 3,
            quote:
                "The custom web application they built for our team has streamlined our internal processes and saved us countless hours. Their support team is always responsive and helpful.",
            author: "Jessica Williams",
            role: "Operations Manager",
            company: "Global Services Ltd",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
        },
        {
            id: 4,
            quote:
                "Digital Solutions delivered our project ahead of schedule and exceeded all our expectations. Their strategic approach to web development has given us a significant competitive advantage.",
            author: "David Rodriguez",
            role: "Product Manager",
            company: "Innovate Systems",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
        },
        {
            id: 5,
            quote:
                "The SEO optimization they implemented has dramatically improved our search rankings. We're now on the first page for all our key terms, and our organic traffic has doubled.",
            author: "Emily Thompson",
            role: "Digital Strategist",
            company: "Growth Partners",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const testimonialsRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        scrollToTestimonial(activeIndex + 1 >= testimonials.length ? 0 : activeIndex + 1)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
        scrollToTestimonial(activeIndex - 1 < 0 ? testimonials.length - 1 : activeIndex - 1)
    }

    const scrollToTestimonial = (index: number) => {
        if (testimonialsRef.current) {
            const cardWidth = testimonialsRef.current.scrollWidth / testimonials.length
            testimonialsRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
            })
        }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - testimonialsRef.current!.offsetLeft)
        setScrollLeft(testimonialsRef.current!.scrollLeft)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - testimonialsRef.current!.offsetLeft
        const walk = (x - startX) * 2
        testimonialsRef.current!.scrollLeft = scrollLeft - walk
    }

    useEffect(() => {
        const handleScroll = () => {
            if (testimonialsRef.current) {
                const scrollPosition = testimonialsRef.current.scrollLeft
                const cardWidth = testimonialsRef.current.scrollWidth / testimonials.length
                const newIndex = Math.round(scrollPosition / cardWidth)
                if (newIndex !== activeIndex) {
                    setActiveIndex(newIndex)
                }
            }
        }

        const ref = testimonialsRef.current
        if (ref) {
            ref.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (ref) {
                ref.removeEventListener("scroll", handleScroll)
            }
        }
    }, [activeIndex, testimonials.length])

    return (
        <section
            className="relative w-full bg-gradient-to-b from-white to-sky-50 dark:from-sky-950 dark:to-blue-950 py-24 text-gray-800 dark:text-white overflow-hidden"
            id="testimonials"
        >
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"></div>

            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

            <MaxWidthWrapper className="relative z-10">
                <ScrollReveal>
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-sky-500/10 backdrop-blur-sm border border-sky-500/30">
                            <span className="text-sky-700 dark:text-sky-400 font-medium text-sm">Client Success Stories</span>
                        </div>

                        <h2 className="font-montserrat mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            What Our <span className="text-sky-600 dark:text-sky-400">Clients Say</span>
                        </h2>
                        <p className="font-poppins text-xl text-gray-600 dark:text-gray-300">
                            Don't just take our word for it - hear from some of our satisfied clients
                        </p>
                    </div>
                </ScrollReveal>

                {/* Testimonial carousel */}
                <div className="mt-12">
                    <div className="relative">
                        <div
                            ref={testimonialsRef}
                            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="min-w-[300px] md:min-w-[350px] px-4 snap-center"
                                    onClick={() => {
                                        setActiveIndex(index)
                                        scrollToTestimonial(index)
                                    }}
                                >
                                    <div
                                        className={`h-full rounded-xl p-6 transition-all duration-300 cursor-pointer ${activeIndex === index
                                            ? "bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/50 dark:to-blue-900/50 shadow-lg shadow-sky-200/50 dark:shadow-sky-900/20 border border-sky-200 dark:border-sky-800"
                                            : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-sky-400 to-blue-500">
                                                <Image
                                                    src={testimonial.avatar || "/placeholder.svg"}
                                                    alt={testimonial.author}
                                                    width={48}
                                                    height={48}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-montserrat font-medium text-gray-900 dark:text-white">
                                                    {testimonial.author}
                                                </p>
                                                <p className="font-poppins text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="font-poppins text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-4">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicators */}
                        <div className="flex justify-center mt-6 gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${activeIndex === index
                                        ? "bg-sky-500 w-6"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-sky-300 dark:hover:bg-sky-700"
                                        }`}
                                    onClick={() => {
                                        setActiveIndex(index)
                                        scrollToTestimonial(index)
                                    }}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

