"use client"

import { useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import { motion } from "framer-motion"
import MaxWidthWrapper from "./max-width-wrapper"
import { projects } from "@/public/constants"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("newspaper")
  const tabListRef = useRef<HTMLDivElement>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scrollTabs = (direction: "left" | "right") => {
    if (tabListRef.current) {
      const scrollAmount = 150
      tabListRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-gray-50 dark:to-gray-950">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Project Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of projects across different industries and platforms. Each project is crafted
            with attention to detail and focus on user experience.
          </p>
        </div>

        <Tabs defaultValue="newspaper" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Chevron and Scrollable Tab Triggers */}
          <div className="relative mb-8">
            {/* Left Chevron (mobile only) */}
            <button
              className="absolute left-0 top-[43%] -translate-y-1/2 z-10 md:hidden bg-white dark:bg-slate-800 rounded-full shadow p-1"
              onClick={() => scrollTabs("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Tab List */}
            <div
              ref={tabListRef}
              className="flex overflow-x-auto scrollbar-hide md:justify-center px-8 pb-2 md:overflow-visible"
            >
              <TabsList className="flex space-x-2 bg-sky-50 dark:bg-sky-950/30 p-1 rounded-full w-max">
                <TabsTrigger
                  value="newspaper"
                  className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6 whitespace-nowrap"
                >
                  News Paper
                </TabsTrigger>
                <TabsTrigger
                  value="ecommerce"
                  className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6 whitespace-nowrap"
                >
                  E-commerce
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6 whitespace-nowrap"
                >
                  Business
                </TabsTrigger>
                <TabsTrigger
                  value="portfolio"
                  className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6 whitespace-nowrap"
                >
                  Portfolio
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6 whitespace-nowrap"
                >
                  Custom
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Right Chevron (mobile only) */}
            <button
              className="absolute right-0 top-[43%] -translate-y-1/2 z-10 md:hidden bg-white dark:bg-slate-800 rounded-full shadow p-1 mb-2"
              onClick={() => scrollTabs("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Project Grid */}
          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate={activeTab === category ? "show" : "hidden"}
              >
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </MaxWidthWrapper>
    </section>
  )
}
