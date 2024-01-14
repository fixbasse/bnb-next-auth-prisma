'use client'

import Select from 'react-select'
import { Building2, MapPin } from 'lucide-react'
import { useCountries } from '@/app/hooks/useCountries'

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[],
    region: string;
    value: string
};

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
};

const CountrySelect = ({
    value,
    onChange
}: CountrySelectProps) => {
    const { getAll } = useCountries();

    return (
        <div className='absolute top-16 z-10'>
            <Select
                placeholder='Enter your address'
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className='flex items-center gap-4 font-light h-full'>
                        <Building2 />
                        <div className='flex flex-col gap-1 cursor-pointer'>
                            <h3>
                                {option.label},
                            </h3>
                            <h4 className='text-sm'>
                                {option.region}
                            </h4>
                        </div>
                    </div>
                )}
                classNames={{
                    input: () => 'max-[375px]:w-[200px] max-[540px]:w-[300px] max-[768px]:w-[400px] md:w-[500px] duration-500',

                }}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        height: '70px'
                    }),
                    option: (option) => ({
                        ...option,
                        cursor: 'pointer',
                        // borderTopLeftRadius: 40,
                        // borderTopRightRadius: 40,
                    })
                }}
                theme={(theme) => ({
                    ...theme,
                    // borderRadius: 40,
                    colors: {
                        ...theme.colors,
                        primary: 'gray', // bg selected
                        primary25: 'lightgray', // bg hover
                        primary50: 'lightgray', // bg when click
                        primary75: 'black',
                    }

                })}
            />
        </div>

    )
}

export default CountrySelect