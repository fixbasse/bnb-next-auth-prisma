
import { GiFirstAidKit } from "react-icons/gi";
import { AlarmSmoke, FireExtinguisher, LucideAlarmClockPlus } from 'lucide-react';

export const offer = [
    {
        label: 'Smoke alarm',
        icon: <AlarmSmoke />,
    },
    {
        label: 'First aid kit',
        icon: <GiFirstAidKit />,
    },
    {
        label: 'Fire extinguisher',
        icon: <FireExtinguisher />,
    },
    {
        label: 'Carbon monoxide alarm',
        icon: <LucideAlarmClockPlus />,
    },
];

interface HostOfferProps {
    isSelected: string;
    onClick: (value: string) => void;
}

const Safety = ({
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

export default Safety