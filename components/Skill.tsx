import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn, slideLeft } from '@/utils/motion'

export default function Skill() {
  return (
    <>
      <motion.section className='mt-20' initial='hidden' whileInView='show'>
        <motion.h2 className='text-center font-bold text-2xl' variants={fadeIn}>
          Skill & Tool
        </motion.h2>
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10'>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image src='/skill/html.svg' alt='html5' width={64} height={64} />
            <span>HTML5</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image src='/skill/css3.svg' alt='css3' width={64} height={64} />
            <span>CSS3</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image
              src='/skill/javascript.svg'
              alt='javascript'
              width={64}
              height={64}
            />
            <span>JAVASCRIPT</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image
              src='/skill/typescript.svg'
              alt='typescript'
              width={64}
              height={64}
            />
            <span>TYPESCRIPT</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image src='/skill/react.svg' alt='react' width={64} height={64} />
            <span>REACT</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image src='/skill/redux.svg' alt='redux' width={64} height={64} />
            <span>REDUX</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image
              src='/skill/nodejs.svg'
              alt='nodejs'
              width={64}
              height={64}
            />
            <span>NODEJS</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image
              src='/skill/mongodb.svg'
              alt='mongodb'
              width={64}
              height={64}
            />
            <span>MONGODB</span>
          </motion.div>
          <motion.div
            className='flex flex-col gap-2 items-center'
            variants={slideLeft}
          >
            <Image
              src='/skill/postman.svg'
              alt='postman'
              width={64}
              height={64}
            />
            <span>POSTMAN</span>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
