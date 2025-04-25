import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { Griditems } from '@/data/constants';
import { TextHeading } from './ui/TextHeading';
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/animation'


const Grid = () => {
  return (
    <section id="ethic" className='pb-6 pt-12'>
      <motion.div variants={fadeIn} className="text-center max-w-2xl mx-auto mb-16">
        <TextHeading words="What It's Like to Work With Me" className="text-center text-3xl" />
        <p className="text-lg text-white-100">
          I bring more than just code to the table. With a flexible schedule, an open mind, and a commitment to clear communication, I adapt to your needs
        </p>
      </motion.div>

      <BentoGrid className="w-full">
        {Griditems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
