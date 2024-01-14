'use client'

import Link from 'next/link'
import React, { useCallback, useState } from 'react'

import { FaAirbnb } from 'react-icons/fa6'

import HostingUserMenu from './HostingUserMenu'
import HostingCreateList from './HostingCreateList'

const HostingNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleOpen = useCallback(() => {
        setShowMenu(!showMenu);
    }, [showMenu]);

    return (
        <div className='max-h-[70px] h-[70px] border-b flex items-center justify-between p-4'>
            <Link
                href='/'
                className='flex items-center gap-2'>
                <FaAirbnb
                    size={40}
                    className='text-pink-600'
                />
            </Link>

            {/* CENTER */}
            <section className='flex items-center gap-1 text-sm'>
                <HostingCreateList />
            </section>
            {/* pathname ? 'border-b-2 border-gray-900 hover:border-none rounded-b-none hover:rounded-full':'' */}

            {/* DROPDOWN */}
            <section className='cursor-pointer'>
                <HostingUserMenu
                    showMenu={showMenu}
                    handleOpen={handleOpen}
                />
            </section>


        </div>
    )
}

export default HostingNavbar