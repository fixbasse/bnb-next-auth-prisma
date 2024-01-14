import React from 'react'
import { FaHouse, FaLandmarkDome } from 'react-icons/fa6'
import { MdApartment, MdCabin, MdHouseboat } from 'react-icons/md'
import { GiBarn, GiBoatFishing, GiCaveEntrance, GiTreehouse } from "react-icons/gi";
import { TbCamper, TbWindmill } from "react-icons/tb"
import { Bed, Castle, ContainerIcon, Hotel, Tent, TowerControl } from 'lucide-react';

export const category = [
    {
        label: 'House',
        icon: <FaHouse />,
    },
    {
        label: 'Apartment',
        icon: <MdApartment />,
    },
    {
        label: 'Bed',
        icon: <Bed />,
    },
    {
        label: 'Barn & breakfast',
        icon: <GiBarn />,
    },
    {
        label: 'Boat',
        icon: <GiBoatFishing />,
    },
    {
        label: 'Cabin',
        icon: <MdCabin />,
    },
    {
        label: 'Camper/RV',
        icon: <TbCamper />,
    },
    {
        label: 'Castle',
        icon: <Castle />,
    },
    {
        label: 'Cave',
        icon: <GiCaveEntrance />,
    },
    {
        label: 'Container',
        icon: <ContainerIcon />,
    },
    {
        label: 'Dome',
        icon: <FaLandmarkDome />,
    },
    {
        label: 'Houseboat',
        icon: <MdHouseboat />,
    },
    {
        label: 'Hotel',
        icon: <Hotel />,
    },
    {
        label: 'Tent',
        icon: <Tent />,
    },
    {
        label: 'Treehouse',
        icon: <GiTreehouse />,
    },
    {
        label: 'Tower',
        icon: <TowerControl />,
    },
    {
        label: 'Windmill',
        icon: <TbWindmill />,
    },
]

interface HostCategoryProps {
    isSelected?: string;
    onClick: (value: string) => void;
}

const HostCategory = ({
    isSelected,
    onClick
}: HostCategoryProps) => {
    return (
        <>
            {category.map((item) => (
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

export default HostCategory