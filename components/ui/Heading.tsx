"use client";

import { TextHeading } from "./TextHeading";
import { LandingButton } from "./LandingButton";
import {Contact,FolderGit2} from 'lucide-react';


interface IHeading {

    text?: string,
    subtext?: string,
}
export default function Heading({ text, subtext }: IHeading) {

    return (
        <div className='flex justify-center relative my-20 z-10'>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="max-w-80 text-xs text-center bg-gradient-to-r from-blue-100 to-purple text-transparent bg-clip-text uppercase tracking-widest">
                    Crafting Digital Experiences
                </h2>
                <TextHeading words={text!} filter={true} duration={0.8} className="text-center text-[24px] md:text-4xl lg:text-5xl tracking-tight" />
                <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8 mt-8">
                    {subtext!}
                </p>

                <div className="flex flex-col gap-4 md:flex-row lg:flex-row md:gap-4 lg:gap-4">
                    <a href="#projects">
                        <LandingButton text="Get In Touch"
                            position="left"
                            icon={<Contact className="h-4 w-4 text-white" />}
                        />

                    </a>

                    <a href="#contact">
                        <LandingButton text="Show Projects"
                            position="left"
                            icon={<FolderGit2 className="h-4 w-4 text-white" />}
                        />
                    </a>
                </div>
            </div>
        </div>
    );


}