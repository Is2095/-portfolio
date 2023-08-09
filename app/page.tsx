import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import HomeSection from '@/components/HomeSection/HomeSection'
import About from '@/components/About/About'
import Project from '@/components/Project/Project'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <NavBar/>
      <div className='container m-auto'>
        <HomeSection/>
        <About/>
        <Project/>
      </div>
      <Footer/>
    </main>
     )
}
