'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'
import { projects } from '@/constant'

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
        <ul>
          {projects.map((project) => (
            <motion.li
              key={project.title}
              initial='hidden'
              whileInView='show'
              variants={fadeIn}
            >
              <article className='flex flex-row sm:items-center flex-wrap my-20'>
                <div className='sm:flex-1 relative w-full sm:max-w-[400px] h-[300px]'>
                  <Image
                    className='rounded-2xl border border-violet-500 shadow-md shadow-violet-300'
                    src={project.src}
                    alt={project.title}
                    fill
                  />
                </div>
                <div className='sm:flex-1 sm:ml-20 sm:mt-0 mt-5'>
                  <div className='font-bold text-2xl text-violet-300 tracking-wider'>
                    <Link
                      className='inline-flex items-center'
                      href={project.link}
                      target={'_blank'}
                      rel='noopener noreferrer'
                    >
                      <h3 className='hover:text-violet-500 hover:cursor-pointer'>
                        {project.title}
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
                  <p className='my-5 text-lg'>{project.description}</p>
                  <ul className='flex flex-wrap gap-2 mt-10 text-sm items-center'>
                    {project.stacks.map((stack, index) => (
                      <li
                        key={index}
                        className='p-1.5 rounded-lg border-2 border-violet-300'
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className='flex items-center gap-3 mt-5'>
                    <Link
                      href={project.link}
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
                      href={project.github}
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
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </>
  )
}
