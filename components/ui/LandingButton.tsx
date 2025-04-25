"use client";

import { cn } from '@/utils/cn';
import React from 'react';

interface ILandingButton {
    text?: string,
    icon?: React.ReactNode,
    position?: string,
    handleClick?: () => void,
    classes?: string
}

export const LandingButton = ({ text, handleClick, classes, icon, position }: ILandingButton) => {
    return (
        <button
            onClick={handleClick}
            className={cn([
                'mt-2 relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px]',
                'focus:outline-none group',
                "md:w-60 md:mt-4",
                classes
            ])}
        >
            <span className="absolute inset-[-980%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* Button content with text */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl relative overflow-hidden">
                {/* Left-to-right sliding background */}
                <span className="absolute inset-0 translate-x-[-100%] bg-purple transition-transform duration-300 ease-out group-hover:translate-x-0"></span>

                {/* Button content wrapper */}
                <span className="text-sm md:text-sm lg:text-[16px] relative flex items-center justify-center gap-2">
                    {/* Left icon - stroke change only */}
                    {position === 'left' && (
                        <span className="[&>*]:text-white [&>*]:transition-colors [&>*]:duration-300 group-hover:[&>*]:text-black-100 group-hover:[&>*]:stroke-black-100">
                            {icon}
                        </span>
                    )}
                    
                    {/* Text with transition */}
                    <span className="transition-colors duration-300 group-hover:text-black-100">
                        {text}
                    </span>
                    
                    {/* Right icon - stroke change only */}
                    {position === 'right' && (
                        <span className="[&>*]:text-white [&>*]:transition-colors [&>*]:duration-300 group-hover:[&>*]:text-black-100 group-hover:[&>*]:stroke-black-100">
                            {icon}
                        </span>
                    )}
                </span>
            </span>
        </button>
    );
}