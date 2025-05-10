"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import MaxWidthWrapper from "./max-width-wrapper"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-md py-3" : "bg-transparent py-5"
        }`}
    >
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center">
              <div>
                <Image className="w-[10rem] md:w-[14rem]" src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks scrolled={scrolled} onNavClick={scrollToSection} />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`ml-2 ${scrolled ? "text-gray-900 dark:text-white" : "text-white dark:text-white"}`}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              className={`ml-4 ${scrolled
                ? "bg-sky-600 hover:bg-sky-700 text-white"
                : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
                }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={scrolled ? "text-gray-900 dark:text-white" : "text-white dark:text-white"}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled ? "text-gray-900 dark:text-white" : "text-white dark:text-white"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile onNavClick={scrollToSection} />
              <Button
                className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({
  scrolled = false,
  mobile = false,
  onNavClick,
}: {
  scrolled?: boolean
  mobile?: boolean
  onNavClick: (sectionId: string) => void
}) {
  const baseClasses = mobile
    ? "block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    : `px-4 py-2 rounded-md transition-colors ${scrolled
      ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      : "text-white/90 hover:text-white hover:bg-white/10 dark:text-white/90 dark:hover:text-white dark:hover:bg-white/10"
    }`

  const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      {links.map((link) => (
        <button key={link.label} onClick={() => onNavClick(link.id)} className={baseClasses}>
          {link.label}
        </button>
      ))}
    </>
  )
}

