"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      setMousePosition({ x, y })

      // Parallax effect for orbiting elements
      const orbitElements = container.querySelectorAll(".orbit-element")
      orbitElements.forEach((element, index) => {
        const factor = (index + 1) * 0.8
        const el = element as HTMLElement
        el.style.transform = `translate(${x * 30 * factor}px, ${y * 30 * factor}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return

    const section = document.getElementById(id)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Video background with fallback mechanism */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full">
        {/* We'll use a div with background image as fallback that's always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-sky-900/20 animate-gradient"></div>

        {/* Video element with error handling */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-70"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/single_bg-FuEjK6WFBFHI4SyS7fKX5tCE4jhEEw.jpeg"
            style={{ opacity: 0.7 }}
            onError={(e) => {
              // If video fails to load, hide it (fallback gradient will show)
              if (e.currentTarget) {
                e.currentTarget.style.display = "none"
              }
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
            {/* No video element content - fallback is handled by CSS */}
          </video>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-blue-900/30 to-sky-900/20 w-full"></div>

        {/* Bottom fade to black for text readability */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-64 bg-gradient-to-t from-black to-transparent w-full"></div>

        {/* Top vignette for dramatic effect */}
        <div className="absolute inset-0 z-20 bg-radial-gradient opacity-60 w-full"></div>

        {/* Animated light beams */}
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/5 via-sky-500/10 to-transparent"
              style={{
                height: "2px",
                width: "100%",
                left: 0,
                top: `${Math.random() * 100}%`,
                transform: "rotate(5deg) translateY(-50%)",
                animation: `lightBeam ${Math.random() * 5 + 8}s linear infinite`,
                animationDelay: `${Math.random() * -8}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated glow spots */}
        <div className="absolute left-1/4 top-1/4 z-10 h-40 w-40 animate-pulse-slow rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 z-10 h-60 w-60 animate-float rounded-full bg-sky-500/20 blur-3xl"></div>
      </div>

      {/* Animated particles similar to OnlyTwins */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/40"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated blobs with OnlyTwins-style animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-sky-400/15 to-blue-500/15 blur-3xl orbit-element"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-indigo-400/15 to-purple-500/15 blur-3xl orbit-element"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-t from-blue-400/15 to-cyan-500/15 blur-3xl orbit-element"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        ></motion.div>
      </div>

      {/* Content with OnlyTwins-style animation */}
      <div className="container relative z-10 mx-auto px-4 md:py-32 text-center">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
              Digital Solutions
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-100 to-blue-200 mt-2 drop-shadow-xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                For Your Business
              </motion.span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90 drop-shadow-md">
              We create stunning digital experiences that transform businesses. Explore our portfolio of innovative web
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 shadow-lg shadow-blue-500/25 text-white"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating UI elements similar to OnlyTwins */}
      {/* <div className="absolute -right-10 top-1/4 orbit-element hidden md:block">
        <motion.div
          className="w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-md flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg className="h-6 w-6 text-blue-500/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M9 13L12 16L15 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute -left-8 top-1/3 orbit-element hidden md:block">
        <motion.div
          className="w-14 h-14 rounded-full bg-sky-500/10 backdrop-blur-md flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg className="h-5 w-5 text-sky-500/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div> */}

      {/* Scroll indicator with OnlyTwins-style animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-white/80" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  )
}

