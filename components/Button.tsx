'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    title: string;
    icon?: IconType;
    type?: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({
    onClick,
    disabled,
    primary,
    secondary,
    title,
    icon: Icon,
    type
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={`p-2 rounded-md w-full disabled:opacity-70 disabled:cursor-not-allowed relative 
        ${primary && 'bg-pink-600 text-white font-semibold'}
        ${secondary && 'border border-gray-800 hover:bg-gray-50'}
        `}
        >
            {title}

            {Icon && (
                <Icon
                    size={24}
                    className="absolute top-2 left-3"
                />
            )}
        </button>
    )
}

export default Button