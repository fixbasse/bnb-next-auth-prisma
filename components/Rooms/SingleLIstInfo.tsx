import { bedType } from '@/app/data/DummyData';
import { Bed, DoorClosed, Dot } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { IconType } from 'react-icons';
import { GiNotebook, GiPoolDive } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';

interface SingleListInfoProps {
    guestCount: number;
    shortDesc: string;
    locationValue: string;
    bedroomCount: number;
    bedCount: number;
    bathroomCount: number;
    hostName: string | null;
    description: string;
    amenities: string;
    offer: string;
    safety: string;
};

const SingleLIstInfo = ({
    guestCount,
    shortDesc,
    locationValue,
    bedroomCount,
    bedCount,
    bathroomCount,
    hostName,
    description,
    amenities,
    offer,
    safety,
}: SingleListInfoProps) => {
    return (
        <div className='px-4 md:px-0'>

            <h2 className='md:text-xl font-semibold'>
                {shortDesc}, {locationValue}
            </h2>

            <section className='flex items-center font-light'>
                <h3>
                    {guestCount} {guestCount > 1 ? 'guests' : 'guest'}
                </h3>
                <Dot size={15} />
                <h3>
                    {bedroomCount} {bedroomCount > 1 ? 'bedrooms' : 'bedroom'}
                </h3>
                <Dot size={15} />
                <h3>
                    {bedCount} {bedCount > 1 ? 'beds' : 'bed'}
                </h3>
                <Dot size={15} />
                <h3>
                    {bathroomCount} {bathroomCount > 1 ? 'baths' : 'bath'}
                </h3>
            </section>

            {/* Review Info */}
            <section className='flex items-center text-sm md:text-md py-2'>
                <div className='flex items-center'>
                    <IoIosStar size={15} />
                    <span>
                        4.00
                    </span>
                </div>
                <Dot size={15} />

                <h3 className='underline font-semibold'>
                    31 reviews
                </h3>
            </section>

            {/* Host Info */}
            <section className='py-6 my-4 flex items-center gap-4 border-y'>
                <div className='relative w-[40px] h-[40px]'>
                    <Image
                        fill
                        alt='hostImg'
                        src='https://images.pexels.com/photos/17806066/pexels-photo-17806066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        className='rounded-full'
                    />
                </div>

                <div>
                    <h2 className='font-semibold'>
                        Hosted by {hostName}
                    </h2>
                    <span className='text-gray-400'>
                        1 year hosting
                    </span>
                </div>
            </section>

            {/* UNIQUE */}
            <section className='py-8 flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <DoorClosed size={35} />
                    <div>

                        <h3 className='font-semibold'>
                            Self check-in
                        </h3>
                        <span className='text-gray-500 font-light text-sm'>
                            You can check in with the building staff.
                        </span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <GiPoolDive size={35} />
                    <div>

                        <h3 className='font-semibold'>
                            Dive right in
                        </h3>
                        <span className='text-gray-500 font-light text-sm'>
                            This is one of the few places in the area with a pool
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <GiNotebook size={35} />
                    <h3 className='font-semibold'>
                        Free cancellation for48 hours
                    </h3>
                </div>
            </section>


            {/* DESC */}
            <section className='py-8 border-y'>
                <p className='font-light text-gray-600'>
                    {description}
                </p>

                <div>
                    <button className='underline pt-2'>
                        Show more
                    </button>
                </div>
            </section>


            {/* SLEEP */}
            <section className='py-8'>
                <h1 className='text-2xl font-semibold'>
                    Where you&apos;ll sleep
                </h1>

                {/* Carousel */}
                <div className='flex gap-4'>
                    {bedType.map((bed) => (
                        <div
                            key={bed.id}
                            className='border p-6 w-[200px] rounded-lg my-4'>
                            <span>
                                {bed.icon}
                            </span>

                            <h3 className='font-semibold'>
                                {bed.label}
                            </h3>
                            <span className='font-light'>
                                {bed.bed}
                            </span>
                        </div>
                    ))}

                </div>
            </section>


            {/* OFFER */}
            <section className='border-y py-8'>
                <h1 className='text-2xl font-semibold'>
                    What this place offers
                </h1>

                <div className='flex flex-col gap-2 py-4 font-light'>
                    <span>
                        {offer}
                    </span>
                    <span>
                        {amenities}
                    </span>
                    <span>
                        {safety}
                    </span>
                </div>
            </section>
        </div>
    )
}

export default SingleLIstInfo