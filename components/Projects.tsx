"use client";

import { TextHeading } from "./ui/TextHeading";
import { PROJECTS } from "@/data/constants";
import { PinContainer } from "@/components/ui/PinContainer";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from 'react-icons/fa';

export function Projects() {
    return (
        <section id="projects" className="pt-12 pb-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <TextHeading words="Things I've Brought to Life" className="text-center text-3xl" />
                <p className="text-lg text-white-100">
                    From real-world projects to passion-fueled experiments, this is where ideas turn into impact. Every line of code, design choice, or piece of content reflects a story — built with purpose, crafted with care. Explore what I've been up to.
                </p>
            </div>

            <div className={cn([
                'flex flex-wrap items-center justify-center gap-x-24 gap-y-7 p-4 mt-10',
            ])}>

                {PROJECTS.map(({ title, id, des, img, iconList, link }) => (
                    <div key={id} className={cn([
                        'lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center',
                        'sm:w-[570px] w-[80vw] sm:h-[41rem] h-[32rem]',

                    ])}>

                        <PinContainer title={link} href={link}>

                            <div className={cn([
                                'relative flex items-center justify-center',
                                "sm:w-[570px] w-[80vw] h-[20vh]",
                                "overflow-hidden",
                                "sm:h-[40vh] h-[30vh] ",
                                'mb-10'
                            ])}>
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl  bg-[#13162d]">
                                    <img src='/bg.png' alt="background image" />
                                </div>
                                <img src={img} alt={title} className={'z-10 absolute bottom-0'} />
                            </div>
                            <h1 className='font-bold lg:text-2xl text-purple md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className={cn([
                                'lg:text-xl lg:font-normal font-light text-sm text-white/80',
                                "line-clamp-2"
                            ])}>
                                {des}
                            </p>

                            <div className={cn([
                                'flex items-center justify-between',
                                'mt-7 mb-3'
                            ])}>

                                <div className={cn([
                                    'flex items-center'
                                ])}>

                                    {iconList.map((icon, index) => (
                                        <div key={icon} className={cn([
                                            'border border-white/[0.2] rounded-full',
                                            'bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center',
                                        ])} style={{
                                            transform: `translateX(-${5 * index * 2}px)`,
                                        }}>
                                            <img src={icon} alt={icon} className="p-2" />
                                        </div>
                                    ))}

                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-base md:text-xs text-sm text-purple">
                                        Check Project
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>

                            </div>
                        </PinContainer>
                    </div>
                ))
                }
            </div>

        </section>
    );
}