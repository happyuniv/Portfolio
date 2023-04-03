import Header from '@/components/Header'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative px-10 text-white bg-black bg-[url("/topography.svg")] overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
          <About />
          <Skill />
          <Project />
          <Contact />
        </div>
      </main>
    </>
  )
}
