'use client'

import { FaHouse, FaLandmarkDome } from 'react-icons/fa6'
import { MdApartment, MdCabin, MdHouseboat } from 'react-icons/md'
import { GiBarn, GiBoatFishing, GiCaveEntrance, GiTreehouse } from "react-icons/gi";
import { TbCamper, TbWindmill } from "react-icons/tb"
import { Bed, Castle, ContainerIcon, Hotel, Tent, TowerControl } from 'lucide-react';
import { IconType } from 'react-icons';

export const categorySelected = [
    {
        label: 'House',
        icon: FaHouse,
    },
    {
        label: 'Apartment',
        icon: MdApartment,
    },
    {
        label: 'Bed',
        icon: Bed,
    },
    {
        label: 'Barn & breakfast',
        icon: GiBarn,
    },
    {
        label: 'Boat',
        icon: GiBoatFishing,
    },
    {
        label: 'Cabin',
        icon: MdCabin,
    },
    {
        label: 'Camper/RV',
        icon: TbCamper,
    },
    {
        label: 'Castle',
        icon: Castle,
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
    },
    {
        label: 'Container',
        icon: ContainerIcon,
    },
    {
        label: 'Dome',
        icon: FaLandmarkDome,
    },
    {
        label: 'Houseboat',
        icon: MdHouseboat,
    },
    {
        label: 'Hotel',
        icon: Hotel,
    },
    {
        label: 'Tent',
        icon: Tent,
    },
    {
        label: 'Treehouse',
        icon: GiTreehouse,
    },
    {
        label: 'Tower',
        icon: TowerControl,
    },
    {
        label: 'Windmill',
        icon: TbWindmill,
    },
]

interface HostCategoryProps {
    isSelected?: string;
    onClick: (value: string) => void;
    label: string;
    icon: IconType
}

const HostCategory = ({
    isSelected,
    onClick,
    label,
    icon: Icon
}: HostCategoryProps) => {
    return (
        <>
            <div
                onClick={() => onClick(label)}
                key={label}
                className={`border-2 p-4 rounded-lg flex flex-col gap-2 hover:bg-gray-100 hover:border-2 hover:border-gray-950 duration-150 cursor-pointer
                        ${label === isSelected && 'bg-gray-100 border-gray-950'}
                    `}>

                <Icon
                    size={30}
                />

                <h2 className='font-semibold'>
                    {label}
                </h2>

            </div>
        </>
    )
}

export default HostCategory