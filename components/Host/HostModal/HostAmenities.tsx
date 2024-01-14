import React from 'react'
import { FaDeskpro, FaHotTubPerson, FaHouse, FaKitchenSet, FaLandmarkDome } from 'react-icons/fa6'
import { MdApartment, MdCabin, MdHouseboat, MdOutdoorGrill, MdWorkspacesFilled } from 'react-icons/md'
import { GiBarn, GiBoatFishing, GiCaveEntrance, GiPoolDive, GiPoolTableCorner, GiSkier, GiTreehouse } from "react-icons/gi";
import { TbCamper, TbGrill, TbWashPress, TbWindmill } from "react-icons/tb"
import { Bed, CarFrontIcon, Castle, ContainerIcon, Hotel, ParkingMeterIcon, PianoIcon, ShowerHead, SnowflakeIcon, Tent, TowerControl, Tv, Wifi } from 'lucide-react';
import { IoBarbell } from 'react-icons/io5';

export const offer = [
    {
        label: 'Pool',
        icon: <GiPoolDive />,
    },
    {
        label: 'Hot tub',
        icon: <FaHotTubPerson />,
    },
    {
        label: 'BBQ grill',
        icon: <TbGrill />,
    },
    {
        label: 'Outdoor dining area',
        icon: <MdOutdoorGrill />,
    },
    {
        label: 'Pool table',
        icon: <GiPoolTableCorner />,
    },
    {
        label: 'Piano',
        icon: <PianoIcon />,
    },
    {
        label: 'Exercise equipment',
        icon: <IoBarbell />,
    },
    {
        label: 'Ski-in/Ski out',
        icon: <GiSkier />,
    },
    {
        label: 'Outdoor shower',
        icon: <ShowerHead />,
    },
];

interface HostOfferProps {
    isSelected: string;
    onClick: (value: string) => void;
}

const HostAmenities = ({
    isSelected,
    onClick
}: HostOfferProps) => {
    return (
        <>
            {offer.map((item) => (
                <div
                    onClick={() => onClick(item.label)}
                    key={item.label}
                    className={`border-2 p-4 rounded-lg flex flex-col gap-2 hover:bg-gray-100 hover:border-2 hover:border-gray-950 duration-150 cursor-pointer
                        ${item.label === isSelected && 'bg-gray-100 border-gray-950'}
                    `}>

                    <span className='text-3xl'>
                        {item.icon}
                    </span>

                    <h2 className='font-semibold'>
                        {item.label}
                    </h2>
                </div>
            ))}
        </>
    )
}

export default HostAmenities