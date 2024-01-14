import Link from 'next/link'
import { FaAirbnb } from 'react-icons/fa6'

const HostCreateNavbar = () => {
    return (
        <nav className='max-h-[70px] h-[70px] flex items-center lg:items-end justify-between px-4 sm:px-12'>
            <Link
                href='/'
                className='flex items-center gap-2'>
                <FaAirbnb
                    size={35}
                />
            </Link>

            <div className='flex gap-4 items-center text-sm font-semibold'>
                <button className='border px-4 py-2 rounded-full hover:border-black duration-150'>
                    Questions?
                </button>
                <button className='border px-4 py-2 rounded-full hover:border-black duration-150'>
                    Save & exit
                </button>
            </div>
        </nav>
    )
}

export default HostCreateNavbar