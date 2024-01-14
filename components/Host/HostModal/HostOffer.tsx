
import { FaKitchenSet } from 'react-icons/fa6'
import { MdWorkspacesFilled } from 'react-icons/md'
import { TbWashPress } from "react-icons/tb"
import { CarFrontIcon, ParkingMeterIcon, SnowflakeIcon, Tv, Wifi } from 'lucide-react';

export const offer = [
    {
        label: 'Wifi',
        icon: <Wifi />,
    },
    {
        label: 'TV',
        icon: <Tv />,
    },
    {
        label: 'Kitchen',
        icon: <FaKitchenSet />,
    },
    {
        label: 'Washer',
        icon: <TbWashPress />,
    },
    {
        label: 'Free parking on premises',
        icon: <CarFrontIcon />,
    },
    {
        label: 'Paid parking on premises',
        icon: <ParkingMeterIcon />,
    },
    {
        label: 'Air conditioning',
        icon: <SnowflakeIcon />,
    },
    {
        label: 'Dedicated workplace',
        icon: <MdWorkspacesFilled />,
    },
];

interface HostOfferProps {
    isSelected?: string;
    onClick: (value: string) => void;
};

const HostOffer = ({
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

export default HostOffer