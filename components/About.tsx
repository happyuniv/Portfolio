'use client'

import { motion } from 'framer-motion'

import { fadeIn, slideBottom } from '@/utils/motion'
import UniverseCanvas from './Universe'

export default function About() {
  return (
    <>
      <motion.section
        id='about'
        className='pt-32 h-screen'
        initial='hidden'
        whileInView='show'
        variants={fadeIn}
      >
        <h1 className='relative text-4xl font-bold z-10'>
          안녕하세요, 저는 <span className='text-violet-500'>Happyuniv</span>
          &nbsp;에요!
        </h1>
        <motion.p
          className='relative mt-5 font-bold whitespace-pre-line z-10'
          variants={slideBottom}
        >
          끊임없이 생기는 새로운 기술들에 관심을 가지면서,{'\n'} UI/UX 와
          최적화의 중요성을 최우선 가치로 학습중이에요!
        </motion.p>
        <div className='absolute w-screen h-screen top-0 left-0 z-0'>
          <UniverseCanvas />
        </div>
      </motion.section>
    </>
  )
}
