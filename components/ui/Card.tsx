"use client";

import * as React from "react"
import { cn } from "@/utils/cn";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-lg relative p-[1.5px] overflow-hidden", 
            "w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto", // Responsive width
            "before:absolute before:inset-0 before:rounded-lg",
            "before:bg-[length:200%_100%] before:animate-border-flow",
            "before:bg-gradient-to-r before:from-purple before:via-white before:to-purple",
            className
        )}
        {...props}
    >
        <div className="rounded-[calc(0.5rem-1.5px)] bg-black-100 text-white w-full h-full relative z-10">
            {props.children}
        </div>
    </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col space-y-1.5", 
            "p-4 sm:p-5 md:p-6 lg:p-7", // Enhanced responsive padding
            className
        )}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-none tracking-tight text-white",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "text-sm sm:text-base md:text-sm lg:text-base text-white-100", // Responsive text size
            className
        )}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div 
        ref={ref} 
        className={cn(
            "p-4 sm:pt-3 lg:pt-3  md:pt-3", // Enhanced responsive padding
            className
        )} 
        {...props} 
    />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
            "p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0 lg:p-7 lg:pt-0", // Enhanced responsive padding
            className
        )}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }