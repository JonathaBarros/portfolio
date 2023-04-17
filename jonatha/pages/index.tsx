import Image from 'next/image'
import logo from '../assets/logo.png'


export default function Home() {
  return (

    <div>
      <nav className='flex flex-row justify-around mt-2'>
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
        />
        <div className='flex flex-row justify-center '>
          <button className='m-1'>About me</button>
          <button className='m-1'>My projects</button>
          <button>Contact</button>
        </div>
      </nav>

      <main>main</main>
      <footer>oi</footer>
    </div>
  )
}
