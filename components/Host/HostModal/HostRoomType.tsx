
import { BedDoubleIcon, DoorClosed } from 'lucide-react'
import { FaHouse, FaHouseChimney, FaShareNodes } from 'react-icons/fa6'
import { MdRoomService } from 'react-icons/md';

const roomType = [
    {
        label: 'An entire place',
        desc: 'Guests have the whole place to themselves.',
        icon: <FaHouse size={40} />
    },
    {
        label: 'A room',
        desc: 'Guests have their own room in a home, plus access to shared spaces.',
        icon: <DoorClosed size={40} />
    },
    {
        label: 'A shared room',
        desc: 'Guests sleep in a room or common area that may be shared with you or others.',
        icon: <BedDoubleIcon size={40} />
    },
];

interface HostRoomTypeProps {
    isSelected?: string;
    onClick: (value: string) => void;
};

const HostRoomType = ({
    isSelected,
    onClick
}: HostRoomTypeProps) => {
    return (
        <div className="typeAnimate flex flex-col gap-4 py-4">
            {roomType.map((item) => (
                <div
                    onClick={() => onClick(item.label)}
                    key={item.label}
                    className={`flex items-center justify-between border-2 p-7 rounded-xl gap-2 hover:bg-gray-100 hover:border-2 hover:border-gray-950 duration-150 cursor-pointer
                    ${item.label === isSelected && 'bg-gray-100 border-gray-950'}
                    `}
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">
                            {item.label}
                        </h3>
                        <span className="text-gray-500 font-light text-sm">
                            {item.desc}
                        </span>
                    </div>

                    <span>
                        {item.icon}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default HostRoomType