import React from "react";
import clsx from "clsx";
import { Spotlight } from "./ui/SpotLight";
import { GridBackGround } from "./ui/GridBackground";

const Hero = () => {

    return (
        <div className={clsx([
            'pb-20 pt-36'
        ])}>
            <div>
                <Spotlight fill="#6D28D9" className={clsx([
                    "-top-40 -left-40",
                    "md:-left-32 md:-top-20",
                    'h-screen'
                ])} />

                <Spotlight fill="#6D28D9" className={clsx([
                    "top-10 left-full",
                    'h-[80vh] w-[50vw]',
                ])} />

                <Spotlight fill="#4169E1" className={clsx([
                    "top-28 left-80",
                    'h-[80vh] w-[50vw]',
                ])} />


            </div>



            <GridBackGround />


        </div>
    );
}

export default Hero;