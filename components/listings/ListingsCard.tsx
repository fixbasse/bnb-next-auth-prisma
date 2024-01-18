'use client'

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { IoIosStar } from "react-icons/io";
import { Heart } from "lucide-react";
import WishListModal from "../modal/WishListModal";
import { Listing } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

interface ListingsCardProps {
    item: Listing;
};

const ListingsCard = ({
    item
}: ListingsCardProps) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    // Many link to prevent redirect when click at Heart
    const { id } = item;


    return (
        <div
            className="relative">
            <Link
                href={`/rooms/${id}`}
            >
                <div
                    className="relative w-full h-[60dvh] md:h-[40dvh] cursor-pointer">
                    <Image
                        fill
                        src={item.imageSrc}
                        alt="img"
                        className="object-cover rounded-xl"
                    />
                </div>
            </Link>

            <Heart
                onClick={() => setShowModal(!showModal)}
                className="absolute top-3 right-2 cursor-pointer text-white"
            />

            {/* NAME & COUNTRY & REVIEWS */}
            <div
                // onClick={() => router.push(`/rooms/${item.id}`)}
                className="
            pt-2
             flex 
             flex-col 
             cursor-pointer
             ">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                        {item.locationValue}
                    </h2>
                    <div className="flex items-center">
                        <IoIosStar
                            size={15}
                        />
                        <span className="font-light text-sm">
                            5.0
                        </span>
                    </div>
                </div>

                <span className="text-gray-500 font-light">
                    4,600 kilometers away
                </span>
                <span className="text-gray-500 font-light">
                    {item.startDate.toDateString()} - {item.endDate.toDateString()}
                </span>

                {/* PRICE */}
                <div className="flex items-center gap-1 pt-1">
                    <h3 className="font-semibold">
                        ${item.price}
                    </h3>
                    <span className="font-light">
                        night
                    </span>
                </div>
            </div>



            {/* WISHLIST MODAL */}
            <WishListModal
                handleClose={handleClose}
                showModal={showModal}
            />

        </div>
    )
}

export default ListingsCard