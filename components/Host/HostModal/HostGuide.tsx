import Head from 'next/head';
import Image from 'next/image'

interface HostGuideProps {
    step: string;
    title: string;
    head: string;
    desc: string;
    imgSrc: string;
}

const HostGuide = ({
    step,
    title,
    head,
    desc,
    imgSrc
}: HostGuideProps) => {
    return (
        <div className='hostGuideAnimate h-full flex lg:gap-20 items-center flex-col-reverse lg:flex-row'>
            <title>
                {head}
            </title>
            <section className='lg:flex-1'>
                <h3 className='font-semibold text-xl'>
                    {step}
                </h3>

                <h1 className='text-4xl lg:text-5xl font-semibold py-4'>
                    {title}
                </h1>

                <p className='text-gray-950 font-thin text-xl'>
                    {desc}
                </p>
            </section>

            {/* IMAGE */}
            <section className='lg:flex-1 h-full w-full'>
                <div className='relative w-full h-[500px]'>
                    <Image
                        src={imgSrc}
                        fill
                        alt='houseImg'
                        className='object-contain'
                    />
                </div>
            </section>

        </div>
    )
}

export default HostGuide