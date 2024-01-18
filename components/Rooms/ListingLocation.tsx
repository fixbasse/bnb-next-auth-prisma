'use client'

import { useMemo } from 'react';
import { IoIosArrowForward } from 'react-icons/io'

import dynamic from 'next/dynamic';
import { useCountries } from '@/app/hooks/useCountries';

interface ListingLocationProps {
    locationValue: string;
};

const ListingLocation = ({
    locationValue
}: ListingLocationProps) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue)?.latlng;

    const Map = useMemo(() => dynamic(() => import('../Host/HostModal/Map'), {
        ssr: false
    }), []);
    
    return (
        <div className='py-14 p-4 md:p-0'>

            <h1 className='font-semibold text-2xl'>
                Where you'll be
            </h1>


            <div className='py-6 z-0'>
                <Map
                    center={location}
                />
            </div>

            <section className='flex flex-col gap-2'>
                <h2 className='font-semibold text-xl'>
                    Bad Wimsbach-Neydharting, Oberösterreich, Austria
                </h2>

                <p className='font-light'>
                    It's difficult to know where to start. The region contains some of the most spectacular baroque monasteries and churches in Central Europe (Lambach, Kremsmünster, Schlierbach, St. Florian, Traunkirchen, St. Wolfgang); the Austrian national horse centre (Stadl Paura), which is just 2 miles away; the beautiful historical towns and villages of Salzkammergut (Hallstatt, Bad Ischl, Gmunden, Aussee); the Natura 2000 nature reserve spanning Wimsbach
                </p>

                <div className='flex items-center gap-1'>
                    <button className='underline font-semibold'>
                        Show more
                    </button>

                    <IoIosArrowForward size={18} />
                </div>
            </section>

        </div>
    )
}

export default ListingLocation