'use client'

import { X } from 'lucide-react';
import Button from '../Button';

import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ModalLayoutProps {
    showModal: boolean;
    handleClose: () => void;
}

type Inputs = {
    email: string,
    password: string;
}

const LoginModal = ({
    showModal,
    handleClose
}: ModalLayoutProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    //* LOGIN SUBMIT 
    const onSubmit: SubmitHandler<Inputs> = (value) => {
        console.log(value);
        setIsLoading(true);

        signIn('credentials', {
            ...value,
            redirect: false,
        })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success('Login success!');
                    router.refresh();
                    handleClose();
                };

                if (callback?.error) {
                    console.log(callback.error);
                    toast.error('Something went wrong!');
                };
            });
    };



    return (
        <section
            //onClick={handleClose}
            className={showModal
                ? 'bgOverlay'
                : 'hidden'
            }>
            <div className='flex justify-center items-end md:items-center h-full'>

                {/* CONTAINER */}
                <div className={`bg-white w-full md:w-[500px] rounded-lg z-0
                    ${showModal ? 'modalSlide' : 'hidden'}
                    `}>
                    {/* HEADER */}
                    <div
                        className='flex items-center justify-center border-b relative py-4'>
                        <X
                            onClick={handleClose}
                            className='absolute left-4 hover:bg-gray-100 rounded-full cursor-pointer p-1'
                            size={25}
                        />
                        <h2 className='font-bold'>
                            Log in or sign up
                        </h2>
                    </div>

                    {/* <=========== BODY ===========> */}
                    <section className='p-6 flex-col gap-4'>
                        <h1 className='text-2xl font-semibold'>
                            Welcome to Activebnb
                        </h1>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='pt-4'>
                            {/* EMAIL */}
                            <div className="relative">
                                <input
                                    type="text"
                                    className="block p-4 w-full border-t border-x rounded-t-md appearance-none focus:border-b focus:rounded-b-md  focus:outline-black focus:ring-0 peer"
                                    placeholder=" "
                                    {...register('email', { required: true })}
                                />
                                <label
                                    className="absolute text-gray-0 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Email
                                </label>
                            </div>
                            {/* PASSWORD */}
                            <div className="relative">
                                <input
                                    type="password"
                                    className="block p-4 w-full border rounded-b-md appearance-none focus:rounded-t-md  focus:outline-black focus:ring-0 peer"
                                    placeholder=" "
                                    {...register('password', { required: true })}
                                />
                                <label
                                    className="absolute text-gray-0 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Password
                                </label>
                            </div>

                            <p className='text-sm py-2 text-gray-500'>
                                We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                            </p>

                            {/* SUBMIT */}
                            <Button
                                type='submit'
                                disabled={isLoading}
                                primary
                                title='Continue'
                            />
                        </form>

                        {/* HORIZONTAL LINE */}
                        <div className='flex items-center gap-2 py-4'>
                            <span className='line' />
                            <h6 className='text-gray-500 font-light'>
                                or
                            </h6>
                            <span className='line' />
                        </div>

                        {/* SUBMIT WITH SOCIAL MEDIA */}
                        <div className='flex flex-col gap-2'>
                            <Button
                                type='submit'
                                disabled={isLoading}
                                secondary
                                onClick={() => { }}
                                title='Continue with Facebook'
                                icon={FaSquareFacebook}
                            />
                            <Button
                                type='submit'
                                disabled={isLoading}
                                secondary
                                onClick={() => signIn('google')}
                                title='Continue with Google'
                                icon={FcGoogle}
                            />
                            <Button
                                type='submit'
                                disabled={isLoading}
                                secondary
                                onClick={() => signIn('github')}
                                title='Continue with Github'
                                icon={AiFillGithub}
                            />
                        </div>
                    </section>
                </div>

            </div>
        </section >
    )
}

export default LoginModal