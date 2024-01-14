import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const HostingCreateList = () => {
    const pathname = usePathname();

    return (
        <>
            <Link
                href='/hosting'
                className={`font-semibold hover:bg-gray-100 py-2 px-4 rounded-full

                    `}
            >
                Today
            </Link>
            <Link
                href={`/multicalender/${1}`}
                className={`font-semibold text-gray-500 hover:bg-gray-100 py-2 px-4 rounded-full

                    `}
            >
                Calender
            </Link>
            <Link
                href='/become-a-host'
                className={`font-semibold text-gray-500 hover:bg-gray-100 py-2 px-4 rounded-full

                    `}
            >
                Listings
            </Link>
            <Link
                href='/hosting'
                className={`font-semibold text-gray-500 hover:bg-gray-100 py-2 px-4 rounded-full

                    `}
            >
                Inbox
            </Link>

            <div
                className={`flex items-center gap-1 font-semibold text-gray-500 hover:bg-gray-100 py-2 px-4 rounded-full

                    `}
            >
                <button>
                    Menu
                </button>
                <MdOutlineKeyboardArrowDown
                    size={20}
                />
            </div>
        </>
    )
}

export default HostingCreateList