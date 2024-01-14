'use client'

import { Plus, X } from 'lucide-react';

interface ModalLayoutProps {
    showModal: boolean;
    handleClose: () => void;
}

const WishListModal = ({
    showModal,
    handleClose
}: ModalLayoutProps) => {

    return (
        <section
            //onClick={handleClose}
            className={showModal
                ? 'bgOverlay'
                : 'hidden'
            }>
            <div className='flex justify-center items-end md:items-center h-full'>

                {/* CONTAINER */}
                <div className={`bg-white w-full md:w-[500px] rounded-lg z-0
                    ${showModal ? 'modalSlide' : 'hidden'}
                    `}>
                    {/* HEADER */}
                    <div
                        className='flex items-center justify-center border-b relative py-4'>
                        <X
                            onClick={handleClose}
                            className='absolute left-4 hover:bg-gray-100 rounded-full cursor-pointer p-1'
                            size={25}
                        />
                        <h2 className='font-bold'>
                            Your wishlists
                        </h2>
                    </div>

                    {/* <=========== BODY ===========> */}
                    <section className='px-6 py-4 flex-col gap-4'>
                        {/* BOX */}
                        <div className='flex items-center gap-4 py-2'>
                            <div className='border p-4 rounded-lg'>
                                <Plus size={30} />
                            </div>

                            <h2 className='font-semibold'>
                                Create new wishlist
                            </h2>
                        </div>
                        {/* BOX */}
                        <div className='flex items-center gap-4 py-2'>
                            <div className='border p-4 rounded-lg'>
                                <Plus size={30} />
                            </div>

                            <h2 className='font-semibold'>
                                Create new wishlist
                            </h2>
                        </div>

                    </section>
                </div>

            </div>
        </section >
    )
}

export default WishListModal