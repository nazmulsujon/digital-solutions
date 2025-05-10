"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import MaxWidthWrapper from "./max-width-wrapper"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      id="about"
      className="relative overflow-hidden pt-24 pb-12 bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50 dark:from-gray-950 dark:via-sky-950/50 dark:to-blue-950/50"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-300 via-blue-500 to-sky-300"></div>
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-sky-200/30 dark:bg-sky-900/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl"></div>

      <MaxWidthWrapper className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div>
                <Image className="w-[10rem] md:w-[14rem]" src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
            </div>
            <p className="text-muted-foreground mb-4 dark:text-gray-300">
              Creating innovative digital experiences that transform businesses and engage users.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
              <SocialLink href="#" icon={<Github className="h-4 w-4" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#home" label="Home" />
              <FooterLink href="#about" label="About Us" />
              <FooterLink href="#services" label="Services" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 dark:text-white">Our Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#services" label="Web Development" />
              <FooterLink href="#services" label="Software Development" />
              <FooterLink href="#services" label="Apps Development" />
              <FooterLink href="#services" label="Digital Marketing" />
              <FooterLink href="#services" label="Graphic Design" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 dark:text-white">Contact Us</h4>
            <address className="not-italic text-muted-foreground dark:text-gray-300">
              <p className="mb-2">123 Business Avenue</p>
              <p className="mb-2">Tech City, 10001</p>
              <p className="mb-2">Email: info@digitalsolutions.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-muted-foreground dark:text-gray-400">
          <p>© {new Date().getFullYear()} Digital Solutions. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="#" className="hover:text-sky-600 dark:hover:text-sky-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-sky-600 dark:hover:text-sky-400">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-sky-600 dark:hover:text-sky-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400 transition-colors"
        onClick={(e) => {
          e.preventDefault()
          const section = document.getElementById(href.substring(1))
          if (section) {
            const offsetTop = section.offsetTop - 80
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            })
          }
        }}
      >
        {label}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
    >
      {icon}
    </Link>
  )
}

