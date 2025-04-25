'use client';

import { TextHeading } from "./ui/TextHeading";
import { EXPERIENCE } from "@/data/constants";
import { Circle } from "lucide-react";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { Card, CardContent } from "./ui/Card";
import { motion } from "framer-motion";
export function Experiences() {

    return (
        <section id="experiences" className="pt-12 pb-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <TextHeading words="The Road So Far" className="text-center text-3xl" />
                <p className="text-lg text-white-100">
                Every role, collaboration, and challenge has shaped the creator I am today. From hands-on learning to professional growth, these experiences are stepping stones that fuel my passion and sharpen my craft.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <motion.h2
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple"
                >
                    Experiences
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line - hidden on mobile */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/80 -translate-x-1/2 hidden md:block" />

                    {/* Experience items */}
                    <div className="space-y-8 md:space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    } justify-center`}
                            >
                                {/* Timeline dot - centered on mobile */}
                                <div className={`absolute ${index % 2 === 0 ? "md:left-1/2" : "md:left-1/2"
                                    } left-1/2 -translate-x-1/2`}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Circle className="w-4 h-4 fill-purple text-purple" />
                                    </motion.div>
                                </div>

                                {/* Card */}
                                <motion.div
                                    variants={fadeIn}
                                    className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                        }`}
                                >
                                    <Card className="transform transition-all duration-300 hover:scale-105">
                                        <CardContent className="p-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="mb-4"
                                            >
                                                <h3 className="text-xl font-semibold text-purple">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-muted-foreground">{exp.company}</p>
                                            </motion.div>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-sm text-muted-foreground mb-2"
                                            >
                                                {exp.period}
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="text-sm leading-relaxed"
                                            >
                                                {exp.description}
                                            </motion.p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}