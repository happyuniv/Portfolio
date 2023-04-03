import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'

export default function Project() {
  return (
    <>
      <motion.section id='project' initial='hidden' whileInView='show'>
        <motion.h2
          className='pt-20 text-violet-500 font-bold text-3xl'
          variants={fadeIn}
        >
          Project
        </motion.h2>
        <article className='flex flex-row sm:items-center flex-wrap my-20'>
          <div className='sm:flex-1 relative w-full sm:max-w-[400px] h-[300px]'>
            <Image
              className='rounded-2xl border border-violet-500 shadow-md shadow-violet-300'
              src='/project/enjoy-ai.png'
              alt='MERN-store'
              fill
            />
          </div>
          <div className='sm:flex-1 sm:ml-20 sm:mt-0 mt-5'>
            <div className='font-bold text-2xl text-violet-300 tracking-wider'>
              <Link
                className='inline-flex items-center'
                href={'https://enjoy-ai.vercel.app'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <h3 className='hover:text-violet-500 hover:cursor-pointer'>
                  Enjoy AI
                </h3>
                <span>
                  <Image
                    src={'/new-tab.svg'}
                    alt='new tab'
                    width={16}
                    height={16}
                  />
                </span>
              </Link>
            </div>
            <p className='my-5 text-lg'>
              ChatGPT, Stable Diffusion 등 최신 인공지능 모델들을 소개하고
              경험할 수 있는 웹사이트
            </p>
            <div className='flex flex-wrap gap-2 mt-10 text-sm items-center'>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                Next
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                React
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                Typescript
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                styled-jsx
              </span>
            </div>
            <div className='flex items-center gap-3 mt-5'>
              <Link
                href={'https://enjoy-ai.vercel.app'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/new-tab.svg'}
                  alt='new tab'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={'https://github.com/happyuniv/Enjoy-AI'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/github.svg'}
                  alt='github'
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </article>
        <article className='flex flex-row sm:items-center flex-wrap my-20'>
          <div className='sm:flex-1 relative w-full sm:max-w-[400px] h-[300px]'>
            <Image
              className='rounded-2xl border border-violet-500 shadow-md shadow-violet-300'
              src='/project/mern-store.png'
              alt='MERN-store'
              fill
            />
          </div>
          <div className='sm:flex-1 sm:ml-20 sm:mt-0 mt-5'>
            <div className='font-bold text-2xl text-violet-300 tracking-wider'>
              <Link
                className='inline-flex items-center'
                href={'https://mern-client-i5ks.onrender.com'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <h3 className='hover:text-violet-500 hover:cursor-pointer'>
                  MERN Store
                </h3>
                <span>
                  <Image
                    src={'/new-tab.svg'}
                    alt='new tab'
                    width={16}
                    height={16}
                  />
                </span>
              </Link>
            </div>
            <p className='my-5 text-lg'>
              Stripe 결제 방식을 적용한 이커머스 웹사이트
            </p>
            <div className='flex flex-wrap gap-2 mt-10 text-sm items-center'>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                MERN
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                JWT
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                Typescript
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                styled-components
              </span>
            </div>
            <div className='flex items-center gap-3 mt-5'>
              <Link
                href={'https://mern-client-i5ks.onrender.com/'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/new-tab.svg'}
                  alt='new tab'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={'https://github.com/happyuniv/MERN-Store'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/github.svg'}
                  alt='github'
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </article>
        <article className='flex flex-row sm:items-center flex-wrap my-20'>
          <div className='sm:flex-1 relative w-full sm:max-w-[400px] h-[300px]'>
            <Image
              className='rounded-2xl border border-violet-500 shadow-md shadow-violet-300'
              src='/project/netflex.png'
              alt='NETFLEX'
              fill
            />
          </div>
          <div className='sm:flex-1 sm:ml-20 sm:mt-0 mt-5'>
            <div className='flex items-center font-bold text-2xl text-violet-300 tracking-wider'>
              <Link
                className='inline-flex items-center'
                href={'https://happyuniv-netflex.netlify.app'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <h3 className='hover:text-violet-500 hover:cursor-pointer'>
                  NETFLEX
                </h3>
                <span>
                  <Image
                    src={'/new-tab.svg'}
                    alt='new tab'
                    width={16}
                    height={16}
                  />
                </span>
              </Link>
            </div>
            <p className='my-5 text-lg'>
              트레일러 영상과 함께 카테고리별 / 검색결과 영화 정보를 제공하는
              웹사이트
            </p>
            <div className='flex flex-wrap gap-2 mt-10 text-sm items-center'>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                React
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                Typescript
              </span>
              <span className='p-1.5 rounded-lg border-2 border-violet-300'>
                styled-components
              </span>
            </div>
            <div className='flex items-center gap-3 mt-5'>
              <Link
                href={'https://happyuniv-netflex.netlify.app'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/new-tab.svg'}
                  alt='new tab'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href={'https://github.com/happyuniv/NETFLEX'}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-xl hover:opacity-50'
                  src={'/github.svg'}
                  alt='github'
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </article>
      </motion.section>
    </>
  )
}
