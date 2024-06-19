'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn, slideLeft } from '@/utils/motion'
import { skills } from '@/constant'

export default function Skill() {
  return (
    <>
      <motion.section className='mt-20' initial='hidden' whileInView='show'>
        <motion.h2 className='text-center font-bold text-2xl' variants={fadeIn}>
          Skill & Tool
        </motion.h2>
        <ul className='flex flex-wrap justify-center items-center gap-10 mt-10'>
          {skills.map((skill) => (
            <li key={skill.title}>
              <motion.div
                className='flex flex-col gap-2 items-center'
                variants={slideLeft}
              >
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={64}
                  height={64}
                />
                <span>{skill.title}</span>
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.section>
    </>
  )
}
