import React from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdContactSupport } from 'react-icons/md'

const Help = () => {
    return (
        <section className='py-16'>
            <h1 className='text-3xl font-semibold opacity-90'>
                We are here to help
            </h1>


            <div className='pt-4 flex flex-col md:flex-row gap-4'>
                <section className='flex gap-4 border p-2 md:p-4 rounded-md md:w-[500px]'>
                    <div>
                        <FaPeopleGroup size={40} />
                    </div>
                    <div>
                        <h2>
                            Join your local Host Club
                        </h2>
                        <p className='text-gray-400 font-light'>
                            Connect, collaborate, and share with other Hosts and community members.
                        </p>
                    </div>
                </section>
                <section className='flex gap-4 border p-2 md:p-4 rounded-md md:w-[500px]'>
                    <div>
                        <MdContactSupport size={40} />
                    </div>
                    <div>
                        <h2>
                            Contact specialized support
                        </h2>
                        <p className='text-gray-400 font-light'>
                            As a new Host, you get one-tap access to a specially trained support team.
                        </p>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default Help