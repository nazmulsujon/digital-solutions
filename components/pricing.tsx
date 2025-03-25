"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronRight, Zap, Layout, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import MaxWidthWrapper from "./max-width-wrapper"
import { plans } from "@/public/constants"

export function PricingSection() {
    const phoneNumber = '+8801601016552';
    const message = 'Hello! I want to know more about your services.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section
            className="relative w-full bg-gradient-to-b from-white to-sky-50 dark:from-sky-950 dark:to-blue-950 py-24 text-gray-800 dark:text-white overflow-hidden"
            id="pricing"
        >
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"></div>

            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

            <MaxWidthWrapper className="relative z-10">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="mx-auto mb-16 text-center">
                        <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-sky-500/10 backdrop-blur-sm border border-sky-500/30">
                            <span className="text-sky-700 dark:text-sky-400 font-medium text-sm">Transparent Pricing</span>
                        </div>

                        <h2 className="font-montserrat mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Choose Your <span className="text-sky-600 dark:text-sky-400">Perfect Plan</span>
                        </h2>
                        <p className="font-poppins text-xl text-gray-600 dark:text-gray-300">
                            Unlock the full potential of your business with our tailored digital solution packages
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
                            >
                                <div
                                    className={`relative h-full overflow-hidden rounded-xl transition-all duration-500 ${plan.popular ? "shadow-xl shadow-sky-200/50 dark:shadow-sky-900/20" : "shadow-md"
                                        }`}
                                >
                                    {/* Card background with gradient border for popular plan */}
                                    {plan.popular ? (
                                        <>
                                            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 rounded-xl blur-sm opacity-70"></div>
                                            <div className="relative bg-white dark:bg-gray-900 rounded-xl h-full border-[3px] border-sky-300">
                                                <div className="absolute -right-12 top-6 w-40 rotate-45 bg-sky-600 py-1 text-center text-sm font-medium text-white shadow-md">
                                                    Popular
                                                </div>
                                                <div className="p-6 sm:p-8 flex flex-col h-full">{renderPlanContent(plan)}</div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl h-full">
                                            <div className="p-6 sm:p-8 flex flex-col h-full">{renderPlanContent(plan)}</div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="mt-24 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="font-montserrat text-2xl font-bold">
                                All Plans <span className="text-sky-600 dark:text-sky-400">Include</span>
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <ScrollReveal>
                                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                                        <Layout className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                    </div>
                                    <h4 className="font-montserrat text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                        Responsive Design
                                    </h4>
                                    <p className="font-poppins text-gray-600 dark:text-gray-400 text-sm">Looks perfect on every device</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100}>
                                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                    </div>
                                    <h4 className="font-montserrat text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                        Performance Optimized
                                    </h4>
                                    <p className="font-poppins text-gray-600 dark:text-gray-400 text-sm">Lightning fast load times</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                                        <Globe className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                    </div>
                                    <h4 className="font-montserrat text-lg font-bold mb-2 text-gray-900 dark:text-white">SEO Friendly</h4>
                                    <p className="font-poppins text-gray-600 dark:text-gray-400 text-sm">Optimized for search engines</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-lg shadow-sky-600/20 text-white"
                        >
                            Contact Us For Custom Solutions
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )

    function renderPlanContent(plan: (typeof plans)[0]) {
        return (
            <>
                <div className="mb-6 text-center">
                    <h3 className="font-montserrat text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline justify-center">
                        <span className="font-montserrat text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                            ৳{plan.price.toLocaleString()}
                        </span>
                    </div>
                    <p className="font-poppins mt-1 text-sm text-gray-500 dark:text-gray-400">One-time project fee</p>
                </div>

                <div className="mb-8 space-y-4 flex-1">
                    {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <div className="mr-3 rounded-full bg-sky-500/10 p-1 text-sky-600 dark:text-sky-400">
                                <Check className="h-4 w-4" />
                            </div>
                            <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={handleClick}
                    className={`group w-full mt-auto ${plan.popular
                        ? "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-lg shadow-sky-600/20 text-white"
                        : "bg-white dark:bg-gray-900 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30"
                        }`}
                >
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </>
        )
    }
}

