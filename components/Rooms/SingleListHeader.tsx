'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import WishListModal from "../modal/WishListModal";

import { Heart } from "lucide-react";
import { FaShare } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface SingleListHeaderProps {
    shortDesc: string;
    imageSrc: string;
};

const SingleListHeader = ({
    shortDesc,
    imageSrc
}: SingleListHeaderProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>

            {/* MOBILE NAVBAR SHARE & SAVE */}
            <section className="flex md:hidden justify-between items-center p-4">
                <Link
                    href='/'
                    className="flex items-center cursor-pointer">
                    <MdOutlineKeyboardArrowLeft size={25} />
                    <button
                        className="hover:underline font-semibold"
                    >
                        Homes
                    </button>
                </Link>

                <div className="flex items-center">
                    <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md px-2 p-1">
                        <FaShare />
                        <span className="underline">
                            Share
                        </span>
                    </div>
                    <div
                        onClick={() => setShowModal(!showModal)}
                        className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md px-2 p-1">
                        <Heart />
                        <span className="underline">
                            save
                        </span>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT ============> */}
            <div className="flex flex-col-reverse md:flex-col">
                <section className="pt-2 pb-2 md:pb-4 flex items-center justify-between">
                    <h1 className="text-3xl md:text-4xl font-semibold px-4 md:px-0">
                        {shortDesc}
                    </h1>

                    {/* SHARE & SAVE */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md px-2 p-1">
                            <FaShare />
                            <span className="underline">
                                Share
                            </span>
                        </div>
                        <div
                            onClick={() => setShowModal(!showModal)}
                            className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-md px-2 p-1">
                            <Heart />
                            <span className="underline">
                                save
                            </span>
                        </div>
                    </div>
                </section>


                {/* IMAGE ==========================> */}
                <section className="flex md:gap-2 h-[400px]">
                    {/* LEFT */}
                    <div className="relative w-full h-full">
                        <Image
                            fill
                            alt="img"
                            src={imageSrc}
                            className="md:rounded-l-md object-cover"
                        />
                    </div>
                    {/* RIGHT */}
                    <section className="flex flex-col md:w-full h-[400px] gap-2">
                        <div className="w-full hidden md:flex gap-2">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    fill
                                    alt="img"
                                    src={imageSrc}
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-[200px]">
                                <Image
                                    fill
                                    alt="img"
                                    src={imageSrc}
                                    className="rounded-t-md rounded-l-none object-cover"
                                />
                            </div>
                        </div>

                        {/* BOTTOM 2 */}
                        <div className="w-full hidden md:flex gap-2 h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    fill
                                    alt="img"
                                    src={imageSrc}
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full">
                                <Image
                                    fill
                                    alt="img"
                                    src={imageSrc}
                                    className="rounded-r-md rounded-t-none object-cover"
                                />
                            </div>

                        </div>
                    </section>
                </section>




                {/* MODAL */}
                <WishListModal
                    showModal={showModal}
                    handleClose={() => setShowModal(!showModal)}
                />
            </div>
        </div>
    )
}

export default SingleListHeader