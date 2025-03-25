"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

interface Project {
  id: number
  name: string
  description: string
  image: string
  liveLink: string
  category?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div variants={item} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="overflow-hidden group h-full transition-all duration-500 shadow-lg border hover:shadow-2xl  relative transform hover:-translate-y-2">
        {/* Gradient background with improved colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-50 dark:from-gray-900 dark:via-sky-950/90 dark:to-blue-950/80 opacity-100 transition-opacity"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-400/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 dark:from-sky-400/10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-tr-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700 dark:from-blue-400/10"></div>

        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Category badge */}
            {project.category && (
              <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-sky-700 dark:text-sky-300 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {project.category}
              </div>
            )}

            {/* Overlay with animated gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            ></div>

            {/* Hover overlay with buttons */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                  asChild
                >
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <CardContent className="relative p-6 z-10">
            <h3 className="text-xl font-bold mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-muted-foreground dark:text-gray-300">{project.description}</p>
          </CardContent>

          {/* <CardFooter className="p-6 pt-0 relative z-10">
            <Button
              variant="outline"
              className="w-full group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
              asChild
            >
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live Site <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter> */}
        </div>
      </Card>
    </motion.div>
  )
}

