import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProjectShowcase from "@/components/project-showcase"
import FeaturedSection from "@/components/featured-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { PricingSection } from "@/components/pricing"
import { TestimonialsSection } from "@/components/testimonial"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <FeaturedSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

