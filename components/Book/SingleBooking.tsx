'use client'

import { Listing } from "@prisma/client"
import Link from "next/link"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

interface SingleBookingProps {
    listing: Listing;
}

const SingleBooking = ({
    listing
}: SingleBookingProps) => {
    return (
        <div className="p-4 md:p-0 md:py-14">
            <title>
                Confirm and pay
            </title>

            <section className="flex items-center gap-4 relative">
                <Link
                    href={`/rooms/${listing.id}`}
                    className="hover:bg-gray-100 rounded-full absolute left-[-3rem]">
                    <div className="p-2 cursor-pointer">
                        <MdOutlineKeyboardArrowLeft size={30} />
                    </div>
                </Link>

                <h1 className="font-semibold text-4xl hidden md:block">
                    Request to book
                </h1>
            </section>


            <Link
                href={`/rooms/${listing.id}`}
                className="flex items-center cursor-pointer md:hidden">
                <MdOutlineKeyboardArrowLeft size={25} />
                <button
                    className="font-semibold mx-auto"
                >
                    Request to book
                </button>
            </Link>
        </div>
    )
}

export default SingleBooking