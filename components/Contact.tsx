'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import emailjs from '@emailjs/browser'

import { fadeIn, slideLeft, slideRight } from '@/utils/motion'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: 'Happyuniv',
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      alert('메세지가 전송 되었습니다.')
      setForm({ name: '', email: '', message: '' })
      setLoading(false)
    } catch (error) {
      alert('전송 중 에러가 발생했습니다. 다시 시도해 주세요!')
      setForm({ name: '', email: '', message: '' })
      setLoading(false)
    }
  }

  return (
    <>
      <motion.section
        id='contact'
        className='pt-20'
        initial='hidden'
        whileInView='show'
      >
        <motion.h2
          className='text-violet-500 font-bold text-3xl'
          variants={fadeIn}
        >
          Contact
        </motion.h2>
        <div className='flex sm:flex-row flex-col items-center mt-20'>
          <motion.form
            className='flex flex-col gap-4 sm:flex-1 w-full'
            initial='hidden'
            whileInView='show'
            variants={slideLeft}
            onSubmit={handleSubmit}
          >
            <label className='flex flex-col gap-2'>
              <span>Name</span>
              <input
                className='px-2 py-2 rounded-lg text-white bg-[#151030] focus:outline outline-white'
                name='name'
                value={form.name}
                required
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col gap-2'>
              <span>Email</span>
              <input
                className='px-2 py-2 rounded-lg text-white bg-[#151030] focus:outline outline-white'
                type='email'
                name='email'
                value={form.email}
                required
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col gap-2'>
              <span>메세지를 남겨주세요!</span>
              <textarea
                className='px-2 py-2 rounded-lg text-white bg-[#151030]  focus:outline outline-white'
                rows={5}
                name='message'
                value={form.message}
                required
                onChange={handleChange}
              />
            </label>
            <button
              className='p-2 rounded-3xl font-bold border hover:text-black hover:bg-white duration-500'
              disabled={loading}
            >
              {loading ? '전송중...' : '전송'}
            </button>
          </motion.form>

          <motion.div className='sm:flex-1 sm:ml-20 ml-0' variants={slideRight}>
            <Player
              className='sm:h-auto h-[100px]'
              autoplay
              loop
              src='/email.json'
            ></Player>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
