"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                    if (ref.current) observer.unobserve(ref.current)
                }
            },
            {
                threshold: 0.1,
            },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [delay])

    const getTransformValue = () => {
        if (!isVisible) {
            switch (direction) {
                case "up":
                    return "translate-y-20"
                case "down":
                    return "-translate-y-20"
                case "left":
                    return "translate-x-20"
                case "right":
                    return "-translate-x-20"
                default:
                    return "translate-y-20"
            }
        }
        return "translate-y-0 translate-x-0"
    }

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? "opacity-100" : "opacity-0",
                getTransformValue(),
                className,
            )}
        >
            {children}
        </div>
    )
}

