"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import { motion } from "framer-motion"
import MaxWidthWrapper from "./max-width-wrapper"
import { projects } from "@/public/constants"


export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("newspaper")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-sky-50 dark:bg-sky-950/30 p-1 rounded-full">
              <TabsTrigger
                value="newspaper"
                className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6"
              >
                News Paper
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6"
              >
                E-commerce
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6"
              >
                Business
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6"
              >
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white px-6"
              >
                Custom
              </TabsTrigger>
            </TabsList>
          </div>

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

