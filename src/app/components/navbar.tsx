import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import logo from '../../../public/assets/logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[3.375rem] text-white p-5 pb-0">
      <div className="logo">
        <Image src={logo} alt='logo' className='w-[30vw]' />
      </div>
      <div className='border rounded-full p-1'>
        <MagnifyingGlassIcon className='h-[5vw] w-[5vw]' />
      </div>
    </div>
  )
}