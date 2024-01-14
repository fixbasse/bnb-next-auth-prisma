'use client'

import { useCallback } from 'react'
import { Minus, Plus } from 'lucide-react'

interface CounterProps {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({
  title,
  value,
  onChange,
}: CounterProps) => {

  //* BUTTON --------> 
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className='flex items-center justify-between border-b py-6'>

      <h2 className='text-xl font-light'>
        {title}
      </h2>

      <section className='flex items-center gap-4'>
        <div
          onClick={onReduce}
          className={`border rounded-full p-[6px] border-gray-300
      ${value === 1
              ? 'opacity-20 cursor-not-allowed'
              : 'cursor-pointer hover:border-gray-500'}
          `}
        >
          <Minus size={18} />
        </div>

        <span>
          {value}
        </span>

        <div
          onClick={onAdd}
          className='border rounded-full p-[6px] cursor-pointer border-gray-300 hover:border-gray-500'
        >
          <Plus size={18} />
        </div>
      </section>
    </div>
  )
}

export default Counter