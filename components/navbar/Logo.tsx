import Link from 'next/link'
import React from 'react'
import { FaAirbnb } from 'react-icons/fa6'

const Logo = () => {
    return (
        <Link
            href='/'
            className='flex items-center gap-2'>
            <FaAirbnb
                size={40}
                className='text-pink-600'
            />
            <h1 className='hidden xl:block text-pink-600 text-2xl font-bold'>
                ActiveBnb
            </h1>
        </Link>
    )
}

export default Logo