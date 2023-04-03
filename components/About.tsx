import { motion } from 'framer-motion'

import UniverseCanvas from '@/components/Universe'
import { fadeIn, slideBottom } from '@/utils/motion'

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
          환영합니다, 저는 <span className='text-violet-500'>Happyuniv</span>
          &nbsp;에요!
        </h1>
        <motion.p
          className='relative mt-3 font-bold whitespace-pre-line z-10'
          variants={slideBottom}
        >
          끊임없이 생기는 새로운 기술들에 관심을 가지고,{'\n'} 사용자 친화적인
          웹사이트를 개발합니다
        </motion.p>
        <div className='absolute w-screen h-screen top-0 left-0 z-0'>
          <UniverseCanvas />
        </div>
      </motion.section>
    </>
  )
}
