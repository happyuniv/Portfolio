'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [expand, setExpand] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (expand) {
      window.addEventListener('click', (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setExpand(false)
        }
      })
    }
  }, [expand])

  const handleLogo = () => {
    window.scrollTo(0, 0)
    history.pushState(null, '', '/')
  }
  return (
    <>
      <header>
        <nav className='flex fixed px-10 py-5 w-full text-violet-300 font-bold bg-black z-[10000]'>
          <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
            <div
              className='flex gap-2 items-center hover:text-violet-500 hover:cursor-pointer'
              onClick={handleLogo}
            >
              <Image
                src='/happyuniv.svg'
                alt='happyuniv'
                width={32}
                height={32}
              />
              <span className=''>Happyuniv</span>
            </div>
            <div className='ml-auto mr-5 sm:flex hidden'>
              <a href={'/#about'}>
                <div className='hover:text-violet-500 hover:cursor-pointer'>
                  About
                </div>
              </a>
              <a className='mx-5' href={'/#project'}>
                <div className='hover:text-violet-500 hover:cursor-pointer'>
                  Project
                </div>
              </a>
              <a href={'/#contact'}>
                <div className='hover:text-violet-500 hover:cursor-pointer'>
                  Contact
                </div>
              </a>
            </div>
            <div
              className={`relative sm:hidden block hover:cursor-pointer ${
                expand ? 'hover:opacity-100' : 'hover:opacity-70'
              }`}
              ref={menuRef}
              onClick={() => setExpand(!expand)}
            >
              <Image src={'/menu.svg'} alt='menu' width={32} height={32} />
              {expand && (
                <div
                  className={`${
                    expand ? 'block' : 'hidden'
                  } absolute -left-10 mt-3 bg-black `}
                >
                  <a href={'/#about'}>
                    <div className='p-2 hover:text-violet-500 hover:cursor-pointer'>
                      About
                    </div>
                  </a>
                  <a href={'/#project'}>
                    <div className='p-2 hover:text-violet-500 hover:cursor-pointer'>
                      Project
                    </div>
                  </a>
                  <a href={'/#contact'}>
                    <div className='p-2 hover:text-violet-500 hover:cursor-pointer'>
                      Contact
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
