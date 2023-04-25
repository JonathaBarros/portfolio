import Image from 'next/image'
import arrow from '../assets/arrow.svg'

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

      <main className='max-w-screen-lg flex flex-col items-center justify-between mx-auto p-4' >

        <div id="hero-section" className='flex flex-col items-center'>
          <h1 className='font-bebas text-6xl mt-28'> A software engineer passionate about <br /> building Mobile and Web Applications.</h1>
          <div className='flex flex-row items-center justify-center'>
            <Image className='pt-24 pr-6' src={arrow} alt={'arrow'} />
            <div className='-rotate-6 mt-6 w-40 h-14 bg-white font-bebas text-3xl flex items-center justify-center border-2 border-solid rounded border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'>HIRE ME</div>
          </div>
        </div>
        <div className=' bg-black font-bebas text-3xl text-white mt-10 h-12 min-w-full flex items-center justify-center'>WHAT HAVE I BEEN UP TO LATELY?</div>

      </main>

      
      <footer></footer>
    </>
  )
}
