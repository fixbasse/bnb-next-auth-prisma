import { GiNotebook } from 'react-icons/gi'

import Help from './Help'
import { User } from '@prisma/client';

interface HostDashboardProps {
    currentUser: User;
};

const HostDashboard = ({
    currentUser
}: HostDashboardProps) => {
    return (
        <div className='px-4 sm:px-[2rem] md:px-[6rem] xl:px-[8rem]'>

            {/* TITLE */}
            <section className='flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0 justify-between py-14'>
                <div className='flex gap-1 font-semibold text-4xl'>
                    <h1>
                        Welcome,
                    </h1>
                    <span>
                        {currentUser.name}
                    </span>
                </div>

                <button className='border border-gray-700 w-[200px] py-1 px-2 hover:bg-gray-100 rounded-lg'>
                    Complete your listing
                </button>
            </section>

            {/* MAIN DASHBOARD ===========> */}
            <section>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-3xl opacity-90'>
                        Your reservations
                    </h1>

                    <button className='underline py-1 px-2 hover:bg-gray-100 rounded-lg'>
                        All reservation (0)
                    </button>
                </div>

                {/* BUTTON */}
                <div className='py-4 flex gap-2 font-light text-sm w-[1300px]'>
                    <button className='border p-2 px-4 hover:border-gray-800 rounded-full'>
                        Checking out (0)
                    </button>
                    <button className='border p-2 px-4 hover:border-gray-800 rounded-full'>
                        Currently hosting (0)
                    </button>
                    <button className='border p-2 px-4 hover:border-gray-800 rounded-full'>
                        Arriving soon (0)
                    </button>
                    <button className='border p-2 px-4 hover:border-gray-800 rounded-full'>
                        Upcoming (0)
                    </button>
                    <button className='border p-2 px-4 hover:border-gray-800 rounded-full'>
                        Pending review (0)
                    </button>
                </div>

                {/* REPORT  */}
                <div className='bg-gray-100 font-light flex items-center justify-center h-[200px] rounded-lg'>
                    <div className='flex flex-col items-center gap-4'>
                        <GiNotebook
                            size={40}
                        />
                        <span className='text-center text-gray-700'>
                            You don&lsquo;t have any guests
                            <br />
                            checking out today
                            <br />
                            or tomorrow.
                        </span>
                    </div>

                </div>
            </section>


            {/* HELP */}
            <Help />
        </div>
    )
}

export default HostDashboard