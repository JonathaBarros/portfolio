import Image from 'next/image'
import arrow from '../assets/arrow.svg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import ig from '../assets/ig.png'

export default function Home() {
  return (

    <>
      <header className='max-w-screen-lg flex flex-wrap items-center justify-between ml-auto mr-auto'>
        <div className='w-60 bg-black h-20 text-white font-bebas text-3xl flex items-center justify-center pt-4'>JONATHA.DEV</div>
        <nav className='flex flex-row justify-center'>
          <a href='' className='m-4 pt-4 font-bebas text-3xl hover:underline underline-offset-8'>WHO AM I?</a>
          <a href='' className='m-4 pt-4 font-bebas text-3xl hover:underline underline-offset-8'>PROJECTS</a>
          <a href='' className='m-4 pt-4 font-bebas text-3xl hover:underline underline-offset-8'>HIT ME UP</a>
        </nav>
      </header>

      <main className='max-w-screen-lg flex flex-col items-center justify-between mx-auto pt-4' >

        <div id="hero-section" className='flex flex-col items-center'>
          <h1 className='font-bebas text-6xl mt-28'> A software engineer passionate about <br /> building Mobile and Web Applications.</h1>
          <div className='flex flex-row items-center justify-center mr-24'>
            <Image className='pt-24 pr-6' src={arrow} alt={'arrow'} />
            <div className='-rotate-6 mt-6 w-40 h-14 bg-white font-bebas text-3xl flex items-center justify-center border-2 border-solid rounded border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'>HIRE ME</div>
          </div>
        </div>
        
        <div className=' bg-black font-bebas text-3xl text-white mt-10 h-12 min-w-full flex items-center justify-center'>WHAT HAVE I BEEN UP TO LATELY?</div>
       
        <div className='min-w-full mt-10 h-96 border-4 border-solid border-black rounded-md'>
          <div className='bg-blue-600 border-b-4 border-black font-bebas text-3xl text-white pl-10 h-16 flex items-center'>AGENDA-SECOM</div>
        </div>

        <div className='min-w-full mt-10 h-96 border-4 border-solid border-black rounded-md'>
          <div className='bg-green-500 border-b-4 border-black font-bebas text-3xl text-white pl-10 h-16 flex items-center'>CARTEIRINHA DO ESTUDANTE</div>
        </div>

        <div className=' bg-black font-bebas text-3xl text-white mt-10 h-12 min-w-full flex items-center justify-center mb-10'>WHO AM I?</div>
       
        <footer className='min-w-full h-48 bg-black flex flex-row justify-between pt-12 pr-28 pl-20' >
          <div id="first-colum">
            <div className=' text-white font-bebas text-3xl'>COPYRIGHT 2023</div>
            <div className=' text-white font-bebas text-base'>ALL RIGHTS RESERVED</div>
            <div id="socials" className='flex flex-row pt-4 space-x-6'>
              <Image src={ig} height={38} width={38} alt={'Instagram'}/>
              <Image src={linkedin} height={38} width={38} alt={'Linkedin'}/>
              <Image src={github} height={38} width={38} alt={'Github'}/>
            </div>

          </div>

            <div className=' text-white font-bebas text-3xl'>JONATHA.DEV</div>
        </footer>
      </main>

      

    </>
  )
}
