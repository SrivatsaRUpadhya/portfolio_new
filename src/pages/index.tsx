import Head from 'next/head'
import { Inter } from 'next/font/google'
import IntroComponent from '@/components/typeAnimations';
import 'animate.css';
import AboutComponent from '@/components/About';
import Link from 'next/link';
import ProjectsComponent from '@/components/Projects';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Srivatsa R Upadhya</title>
        <meta name="portfolio" content="Srivatsa's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="Images/profile" />
      </Head>
      <main className='antialiased container m-auto'>
        <section id='top'>
          <div className='leading-loose sm:leading-loose min-h-[90vh] sticky flex text-center text-lg sm:text-3xl animate__animated animate__bounceInDown'>
            <IntroComponent></IntroComponent>
          </div>
        </section>

        <section id='about' className='p-8 mt-5'>
          <h2 className='text-xl pb-5 underline'><Link href="#about"># A little about me</Link></h2>
          <div className='md:flex border rounded-lg m-auto shadow-md'>
            <AboutComponent></AboutComponent>
          </div>
        </section>

        <section id='projects' className='p-8 mt-5'>
          <h2 className='text-xl pb-5 underline'><Link href="#about"># A few of my Projects</Link></h2>
          <div className='md:flex m-auto'>
            <ProjectsComponent></ProjectsComponent>
          </div>
        </section>
      </main>
	  <Footer/>
    </>
  )
}
