'use client'

import React, { useState } from 'react'

interface ShortDescProps {
    value: string;
    onChange: (value: string) => void;
}

const ShortDesc = ({
    value,
    onChange
}: ShortDescProps) => {
    const [max, setMax] = useState(0);

    const handleKeyPress = (e: any) => {
        const count = e.target.value;
        setMax(count.length);
    };

    return (
        <div>
            <textarea
                value={value}
                onChange={handleKeyPress}
                maxLength={32}
                className="w-full p-6 text-xl border border-gray-700 outline-gray-800 rounded-md h-[200px]">

            </textarea>

            <span className='text-sm font-bold text-gray-500'>
                {max}/32
            </span>
        </div>
    )
}

export default ShortDesc