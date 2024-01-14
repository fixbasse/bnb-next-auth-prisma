import { Dot, Key, Map, MessageCircle, SprayCanIcon, Tag } from 'lucide-react'
import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoIosStar } from 'react-icons/io'

const ReviewOverview = () => {
    return (
        <div className='border-y py-8 px-4'>
            <section className='text-2xl font-semibold flex gap-1 items-center pb-2'>
                <IoIosStar size={30} />
                <h2>
                    4.00
                </h2>
                <Dot />

                <h2>
                    31 reviews
                </h2>
            </section>

            {/* OVERVIWE IMG */}
            <section className='font-semibold pt-4 hidden md:grid grid-cols-7 gap-4'>
                <div className='border-r'>
                    <h3>
                        Overall rating
                    </h3>
                </div>
                <div className='border-r'>
                    <h3>
                        Cleanliness
                    </h3>
                    <span className='text-sm md:text-xl mb-4'>
                        4.8
                    </span>

                    <SprayCanIcon size={30} />
                </div>
                <div className='border-r'>
                    <h3>
                        Accuracy
                    </h3>
                    <span className='text-sm md:text-xl mb-4'>
                        5.0
                    </span>

                    <FaCircleCheck size={30} />
                </div>
                <div className='border-r'>
                    <h3>
                        Check-in
                    </h3>
                    <span className='text-sm md:text-xl mb-4'>
                        4.8
                    </span>
                    <Key size={30} />
                </div>
                <div className='border-r'>
                    <h3>
                        Communication
                    </h3>
                    <span className='text-sm md:text-xl mb-4'>
                        4.6
                    </span>
                    <MessageCircle size={30} />
                </div>
                <div className='border-r'>
                    <h3>
                        Location
                    </h3>
                    <span className='text-sm md:text-xl mb-4'>
                        4.9
                    </span>

                    <Map size={30} />
                </div>
                <div>
                    <h3>
                        Value
                    </h3>
                    <span className='text-sm md:text-xl'>
                        4.9
                    </span>

                    <Tag size={30} />
                </div>
            </section>
        </div>
    )
}

export default ReviewOverview