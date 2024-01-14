import { MessageCircleMore } from "lucide-react";
import { GiThunderSkull, GiThunderStruck } from "react-icons/gi";
import { IoThunderstorm } from "react-icons/io5";


const confirm = [
  {
    label: 'User Instant Book',
    desc: 'Guests can book automatically.',
    icon: <IoThunderstorm size={40} />
  },
  {
    label: 'A room',
    desc: 'Guests must ask if they can book.',
    icon: <MessageCircleMore size={40} />
  },
];

interface HostConfirmProps {
  isSelected: string;
  onClick: (value: string) => void;
};

const HostConfirm = ({
  isSelected,
  onClick
}: HostConfirmProps) => {
  return (
    <div className="typeAnimate flex flex-col gap-4 py-4">
      {confirm.map((item) => (
        <div
          onClick={() => onClick(item.label)}
          key={item.label}
          className={`flex items-center justify-between border-2 p-6 rounded-xl gap-2 hover:bg-gray-100 hover:border-2 hover:border-gray-950 duration-150 cursor-pointer
            ${item.label === isSelected && 'bg-gray-100 border-gray-950'}
            `}
        >
          <section className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">
              {item.label}
            </h3>
            <span className="text-gray-500 font-light text-sm">
              {item.desc}
            </span>
          </section>

          <span>
            {item.icon}
          </span>

        </div>
      ))}
    </div>
  )
}

export default HostConfirm