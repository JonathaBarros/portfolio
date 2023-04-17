import Image from 'next/image'
import logo from '../assets/logo.png'


export default function Home() {
  return (

    <>
      <header className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
        />

        <nav className='flex flex-row justify-center'>
          <a href='' className='m-4 '>About me</a>
          <a href='' className='m-4'>My projects</a>
          <a href='' className='m-4'>Contact</a>
        </nav>
      </header>


      <div className='max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4' >
        <main>
          
          <div id="first-main-card">
            <p className='pb-4'> Hi, I'm Jonatha.</p>
            <div className=' shadow-[11px_11px_0px_0px_rgba(0,0,0,1)]'>
              <div className='outline-4 outline-slate-950 outline p-3'>
                <h1 className='font-bold '> A software engineer passionate about <br /> building Mobile and Web Apps</h1>
              </div>
            </div>
          </div >

          <div id="second-main-card">

          </div>
        </main>
        <footer></footer>
      </div>
    </>
  )
}
