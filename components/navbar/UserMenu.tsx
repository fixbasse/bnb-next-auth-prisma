'use client'

import { useCallback, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface UserMenuProps {
    currentUser: User | undefined | null;
};

const UserMenu = ({ currentUser }: UserMenuProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const router = useRouter();

    const handleClose = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const handleRegisterClose = useCallback(() => {
        setShowRegisterModal(!showRegisterModal);
    }, [showRegisterModal]);

    const onHost = () => {
        if (currentUser) {
            return router.push(`/hosting`)
        };

        setShowModal(true);
    };

    return (
        <div className="flex items-center gap-12">

            <button
                onClick={onHost}
                className='hidden md:block hover:bg-gray-100 rounded-full p-2 px-3 font-semibold'
            >
                {currentUser
                    ? 'Switch to hosting'
                    : 'Bnb your home'}
            </button>

            {/* AVATAR & MENUBAR */}
            <section
                onClick={() => setShowMenu(!showMenu)}
                className="relative flex justify-between items-center border shadow-md hover:shadow-lg cursor-pointer rounded-full p-4 md:px-4 md:py-3 max-w-[100px] md:w-[100px] max-h-[60px] md:h-[60px]"
            >
                <IoMenu
                    size={20}
                />

                <div className="hidden md:block">
                    {currentUser ? (
                        <div className="relative w-[40px] h-[40px]">
                            <Image
                                src='https://images.pexels.com/photos/17806066/pexels-photo-17806066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                fill
                                alt="userImg"
                                className="rounded-full"
                            />
                        </div>
                    ) : (
                        <RxAvatar
                            size={30}
                        />
                    )}
                </div>

                {/* DROPDOWN */}
                <div className={`absolute flex flex-col shadow-xl top-16 right-0 py-2 rounded-lg bg-white w-[250px] text-sm
                ${showMenu
                        ? 'block'
                        : 'hidden'
                    }
                `}
                >
                    {currentUser ? (
                        <>
                            <div className="pb-2 font-semibold">
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Messages
                                </button>
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Notifications
                                </button>
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Trips
                                </button>
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Wishlists
                                </button>
                            </div>

                            <hr />

                            <div className="py-2 font-light flex flex-col">
                                <Link
                                    href='/hosting'
                                    className="p-2 px-4 hover:bg-gray-50">
                                    Manage listings
                                </Link>
                                <Link
                                    href='/refer'
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Refer a Host
                                </Link>
                                <Link
                                    href='/account-settings'
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Account
                                </Link>
                            </div>

                            <hr />

                            <div className="pt-2 font-light">
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Gift cards
                                </button>
                                <button
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Help center
                                </button>
                                <button
                                    onClick={() => signOut()}
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                                    Log out
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="pb-2">
                                <button
                                    onClick={() => setShowModal(!showModal)}
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left font-semibold">
                                    Login
                                </button>
                                <button
                                    onClick={() => setShowRegisterModal(!showRegisterModal)}
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left font-light">
                                    Signup
                                </button>
                            </div>

                            <hr />

                            <div className="pt-2">
                                <button className="p-2 px-4 hover:bg-gray-50 w-full text-left font-light">
                                    Gift cards
                                </button>
                                <button
                                    onClick={onHost}
                                    className="p-2 px-4 hover:bg-gray-50 w-full text-left font-light">
                                    Bnb your home
                                </button>
                                <button className="p-2 px-4 hover:bg-gray-50 w-full text-left font-light">
                                    Health center
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* MODAL ===========> */}
            <LoginModal
                showModal={showModal}
                handleClose={handleClose}
            />
            <RegisterModal
                showRegisterModal={showRegisterModal}
                handleRegisterClose={handleRegisterClose}
            />

        </div>
    )
}

export default UserMenu