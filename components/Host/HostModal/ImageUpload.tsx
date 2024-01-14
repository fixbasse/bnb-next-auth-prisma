'use client'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhoto } from 'react-icons/tb'

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
};

declare global {
    var cloudinary: any
};

const uploadPreset = 'uticzofy';

const ImageUpload = ({
    value,
    onChange
}: ImageUploadProps) => {
    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url);
    }, [onChange]);

    return (
        <div>
            <div className='border border-gray-600 border-dashed h-[300px] md:h-[400px] relative flex items-center justify-center'>
                <CldUploadWidget
                    uploadPreset={uploadPreset}
                    onUpload={handleUpload}
                    options={{
                        maxFiles: 3
                    }}
                >
                    {({ open }) => {
                        return (
                            <section className={`flex flex-col items-center gap-4 w-full
                            ${value && 'h-full'}
                            `}>
                                <TbPhoto size={50} />

                                <div className='text-center'>
                                    <h2 className='text-xl font-semibold'>
                                        Drag your photos here
                                    </h2>
                                    <span className='font-light'>
                                        Choose at least 3 photos
                                    </span>
                                </div>

                                <div
                                    onClick={() => open?.()}
                                    className='underline cursor-pointer'
                                >
                                    Upload an Image
                                </div>
                                {value && (
                                    <div className='absolute w-full h-full'>
                                        <Image
                                            fill
                                            alt='img'
                                            src={value}
                                            className='object-cover'
                                        />
                                    </div>
                                )}
                            </section>
                        );
                    }}
                </CldUploadWidget>
            </div>

            {/* <section className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                {value && (
                    <div className='relative w-full md:w-[300px] h-[300px] md:h-[400px]'>
                        <Image
                            fill
                            alt='img'
                            src={value}
                            className='object-cover'
                        />
                    </div>
                )}
                {value && (
                    <div className='relative w-full md:w-[300px] h-[300px] md:h-[400px]'>
                        <Image
                            fill
                            alt='img'
                            src={value}
                            className='object-cover'
                        />
                    </div>
                )}
            </section> */}
        </div>
    )
}

export default ImageUpload