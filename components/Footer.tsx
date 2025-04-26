import React from 'react';
import dayjs from 'dayjs';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data/constants';
import { LandingButton } from './ui/LandingButton';


const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format);
};

export function Footer() {

    const currentDate = formatDate(new Date().toString(), 'ddd DD MMM YYYY');

    return (
        <footer className='w-full pt-20 pb-5' id="contact">

            <div className='w-full absolute left-0 -bottom-[10rem] min-h-96 '>
                <img src="/footer-grid.svg" alt="grid footer"
                    className='w-full h-full opacity-100 ' />

            </div>


            <div className='flex flex-col items-center'>

                <h1 className='heading lg:max-w-[45vw] text-white'>
                    Powered by curiosity and too much caffeine. <span className='text-purple'>Thanks for stopping by</span> the best is yet to come.
                </h1>
                <p className='text-white/80 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals </p>
                <a href="mailto:tijani.idrissi.abdellatif@gmail.com">

                    <LandingButton
                     text='Get in touch'
                     icon={<FaLocationArrow className='h-4 w-4 text-white' />}
                     position='right' />
                  
                </a>
            </div>


            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-white/80 text-sm font-light md:font-normal'>Copyright &copy;{currentDate} Tijani Abdellatif </p>
                <div className='flex items-center md:mt-4 mt-6 md:gap-3 gap-6'>
                    {
                        socialMedia.map((item) => (

                            <a className='cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ' href={item.link} target='_blank' rel="noopener noreferrer" key={item.id}>
                                <img src={item.img} alt={item.link} width={20} height={20} />
                            </a>
                        ))
                    }
                </div>
            </div>

        </footer>
    )
}