import { cn } from '@/utils/cn';
import React from "react";
import Heading from './Heading';

export function GridBackGround() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center bg-black-100 dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-white/[0.04]">
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

            <Heading text='Tutor & Software Engineer Specializing In Modern Web Applications' subtext={`Hi, I'm Tijani Abdellatif`} />

        </div>
    );
}
