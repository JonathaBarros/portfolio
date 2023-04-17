import Image from 'next/image'
import logo from '../assets/logo.png'


export default function Home() {
  return (

    <div>
      <header className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
          />

        <nav className='flex flex-row justify-center'>
          <a className='m-4 '>About me</a>
          <a className='m-4'>My projects</a>
          <a className='m-4'>Contact</a>
        </nav>
      </header>


      <div  className='max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4' >
        <main>main</main>
        <footer>oi</footer>
      </div>


    </div>
  )
}
