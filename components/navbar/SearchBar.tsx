import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <section className='px-4 md:px-[2rem] xl:px-[4rem] max-h-[90px] h-[90px] hidden md:flex items-start justify-center'>

            <section className='border max-[768px]:w-full shadow-xl flex items-center rounded-full'>
               
                <div className='md:w-[250px] py-3 px-8 hover:bg-gray-200 border-r hover:rounded-full cursor-pointer'>
                    <h4 className='text-sm font-semibold'>
                        Where
                    </h4>
                    <h3 className='text-gray-500 font-light'>
                        Search destinations
                    </h3>
                </div>

                <div className='px-6'>
                    <h4 className='text-sm font-semibold'>
                        Check in
                    </h4>
                    <h3 className='text-gray-500 font-light'>
                        Add dates
                    </h3>
                </div>

                <div className='px-6 border-l'>
                    <h4 className='text-sm font-semibold'>
                        Check out
                    </h4>
                    <h3 className='text-gray-500 font-light'>
                        Add dates
                    </h3>
                </div>

                <div className='md:w-[250px] py-3 pl-8 pr-4 hover:bg-gray-200 border-l hover:rounded-full cursor-pointer flex items-center justify-between'>
                    <div>
                        <h4 className='text-sm font-semibold'>
                            Who
                        </h4>
                        <h3 className='text-gray-500 font-light'>
                            Add guests
                        </h3>
                    </div>

                    <div className='bg-pink-500 text-white rounded-full p-3'>
                        <Search size={15} />
                    </div>
                </div>
            </section>


        </section>
    )
}

export default SearchBar