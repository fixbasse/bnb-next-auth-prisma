import { IconType } from "react-icons";

interface AmenityAnOfferProps {
    label: string;
    icon: IconType;
}

const AmenityAndOffer = ({
    label,
    icon: Icon
}: AmenityAnOfferProps) => {
  return (
    <div>
        {label}


<Icon size={30} />
    </div>
  )
}

export default AmenityAndOffer