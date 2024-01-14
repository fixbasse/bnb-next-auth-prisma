const Footer = () => {
    return (
        <footer className='bg-gray-100 md:h-[400px] px-4 sm:px-[2rem] md:px-[6rem] xl:px-[8rem]'>
            <section className='py-10 flex flex-col md:flex-row justify-between text-sm border-t md:border-t-0'>

                {/* SUPPORT */}
                <div className="pb-4 md:pb-0">
                    <h2 className="font-semibold">
                        Support
                    </h2>

                    <ul className='text-sm font-light pt-2 flex flex-col gap-4'>
                        <li>
                            Help center
                        </li>
                        <li>
                            Get help with a safety issue
                        </li>
                        <li>
                            AirCover
                        </li>
                        <li>
                            Anti-discrimination
                        </li>
                        <li>
                            Disability support
                        </li>
                        <li>
                            Cancellation options
                        </li>
                        <li>
                            Report neighborhood concern
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <hr />
                </div>

                {/* HOSTING */}
                <div className="py-4 md:py-0">
                    <h2 className="font-semibold">
                        Hosting
                    </h2>

                    <ul className='text-sm font-light pt-2 flex flex-col gap-4'>
                        <li className='hover:underline'>
                            Airbnb your home
                        </li>
                        <li>
                            AirCover for Hosts
                        </li>
                        <li>
                            Hosting resources
                        </li>
                        <li>
                            Community forum
                        </li>
                        <li>
                            Hosting responsible
                        </li>
                        <li>
                            ActiveBnb-friendly apartments
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <hr />
                </div>

                {/* LOGO */}
                <div className="pt-4 md:pt-0">
                    <h2 className="font-semibold">
                        ActiveBnb
                    </h2>

                    <ul className='font-light pt-2 flex flex-col gap-4'>
                        <li className='hover:underline'>
                            Newsroom
                        </li>
                        <li>
                            New features
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Investors
                        </li>
                        <li>
                            Gift cards
                        </li>
                        <li>
                            ActiveBnb.org emergency stays
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer