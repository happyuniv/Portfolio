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
              className='[&:not(:first-child)]:mt-24 px-5 sm:px-10 md:px-20 lg:px-0'
            >
              <article className=''>
                <div className='flex flex-col gap-2 text-center'>
                  <h2 className='mt-10 text-violet-300 font-bold text-3xl text-center'>
                    {project.title}
                  </h2>
                  <p className='text-gray-300 text-lg'>{project.subTitle}</p>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-start mt-10'>
                  <div className='relative self-center w-full h-full md:max-w-[500px] md:max-h-[500px] aspect-square'>
                    <Image
                      className='rounded-2xl border border-violet-500 shadow-md shadow-violet-300'
                      src={project.src}
                      alt={project.title}
                      fill
                    />
                  </div>
                  <div className='lg:ml-20 lg:mt-0 mt-5'>
                    <p className='my-5 text-lg font-bold'>
                      {project.description}
                    </p>
                    <div>{project.subDescription}</div>
                    <hr className='border-gray-500 my-3' />
                    <ul className='flex flex-col gap-2 list-disc marker:text-violet-300'>
                      {Object.entries(project.detail).map(([key, value]) => (
                        <li key={key} className='flex'>
                          <div className='min-w-[200px] font-extrabold'>
                            {key}
                          </div>
                          {key === 'GitHub' || key === 'Link' ? (
                            <Link
                              href={`https://${value}`}
                              target={'_blank'}
                              rel='noopener noreferrer'
                              className='text-blue-500 hover:text-blue-500 hover:underline'
                            >
                              {value}
                            </Link>
                          ) : (
                            <div className=''>{value}</div>
                          )}
                        </li>
                      ))}
                    </ul>
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
