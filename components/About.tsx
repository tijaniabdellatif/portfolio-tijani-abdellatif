'use client';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { CERTIFICATIONS } from "@/data/constants";
import { ExternalLink } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/Carousel';
import { TextHeading } from "./ui/TextHeading";

export function About() {
    return (
        <section id="about">

            <TextHeading words="Meet the Maker" className="text-center text-3xl" />
            <div className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={fadeIn}
                        className="text-center max-w-2xl mx-auto mb-4"
                    >
                        <p className="text-lg text-muted-foreground">
                            Passionate about creating impactful digital solutions and sharing
                            knowledge with the developer community
                        </p>
                    </motion.div>

                    {/* About Description */}
                    <motion.div variants={fadeIn} className="max-w-3xl mx-auto mb-10">
                        <Card className="bg-black-100">
                            <CardContent className="px-8 text-center">
                                <p className="text-base lg:text-xl md:text-xl text-white text-center leading-7 tracking-tight">
                                    I'm a passionate Software Engineer and Tutor with over 5 years
                                    of experience in building modern web applications. I specialize
                                    in React, TypeScript, Node.js and PHP, with a strong focus on
                                    creating performant and scalable solutions while using Cloud
                                    architectures.
                                </p>
                                <p className="mt-4 text-base lg:text-xl md:text-xl text-white text-center leading-7 tracking-tight">
                                    When I'm not coding, you can find me creating my own projects,
                                    writing technical articles, or exploring new technologies to
                                    stay at the forefront of web development and Project
                                    Management.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Certifications Carousel Section */}
                    <motion.div
                        variants={fadeIn}
                        className="mb-16 -mx-4 px-4 py-12  bg-black-100"
                    >
                        <div className="text-center mb-12">
                            <TextHeading words="Certifications" className="text-center text-3xl" />
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Continuous learning and professional development through
                                industry-recognized certifications
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto">
                            <Carousel
                                className="w-full cursor-pointer"
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                            >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                    {CERTIFICATIONS.map((cert, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="h-full" // Ensure motion div fills the height
                                            >
                                                <Card className="overflow-hidden border-2 hover:border-purple/50 transition-all duration-300 bg-black-200 h-full flex flex-col"> {/* Added bg-black-200 and h-full with flex-col */}
                                                    <CardContent className="p-6 flex flex-col flex-1"> {/* Added flex-col and flex-1 to expand */}
                                                        {/* Certificate Badge/Icon */}
                                                        <div className="mb-6 flex justify-center">
                                                            <div className="w-20 h-20 rounded-full bg-black-300 flex items-center justify-center"> {/* Changed background */}
                                                                <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center">
                                                                    <div className="w-8 h-8 rounded-full bg-purple/40 animate-pulse" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Certificate Details */}
                                                        <div className="text-center mb-4 flex-1"> {/* Added flex-1 to push the link to bottom */}
                                                            <h4 className="text-xl font-semibold mb-2 text-white">
                                                                {cert.name}
                                                            </h4>
                                                            <p className="text-white-100 font-medium"> {/* Updated text color */}
                                                                {cert.issuer}
                                                            </p>
                                                            <p className="text-sm text-white-100/80 mt-1"> {/* Updated text color */}
                                                                {cert.date}
                                                            </p>
                                                        </div>

                                                        {/* View Certificate Link */}
                                                        <div className="flex justify-center mt-auto pt-4">
                                                            <a
                                                                href={cert.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-sm text-white hover:text-purple relative group transition-colors"
                                                            >
                                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                                                View Certificate{" "}
                                                                <ExternalLink className="w-4 h-4 group-hover:text-purple transition-colors" />
                                                            </a>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="flex justify-center gap-4 mt-8">
                                    <CarouselPrevious className="relative static" />
                                    <CarouselNext className="relative static" />
                                </div>
                            </Carousel>
                        </div>
                    </motion.div>

                    {/* Achievements/Badges */}

                </motion.div>
            </div>
        </section>
    );
}
