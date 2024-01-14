'use client'

import { useCallback } from "react";
import HostCreateNavbar from "../hostNavbar/HostCreateNavbar";
import OnActionLoading from "@/components/loading/onActionLoading";
import SecondaryActionLoading from "@/components/loading/secondaryActionLoading";

interface LayoutHostModalProps {
    body?: React.ReactElement;
    onAction: () => void;
    onActionLabel: string | boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string | boolean;
    disabled: boolean;
    disabled2: boolean;
};

const LayoutHostModal = ({
    body,
    onAction,
    onActionLabel,
    secondaryAction,
    secondaryActionLabel,
    disabled,
    disabled2
}: LayoutHostModalProps) => {
    const handleOnAction = useCallback(() => {
        if (disabled) {
            return;
        };

        onAction();
    }, [onAction, disabled]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled2 || !secondaryAction) {
            return;
        };

        secondaryAction();
    }, [secondaryAction, disabled2]);

    return (
        <>
            <section className="fixed w-full top-0 bg-white z-10">
                <HostCreateNavbar /> {/* some Page have differnet navbar */}
            </section>


            {/* <=========== MAIN CONTENT*/}
            <section className="flex items-center justify-center md:h-[100dvh] py-[5rem]">
                <div className='w-[1200px] px-4 md:px-8 lg:px-[3rem] flex items-center justify-center h-full'>
                    {body}
                </div>
            </section>


            {/* BUTTON */}
            <section className="fixed bottom-0 w-full">
                <div className='max-h-[70px] h-[70px] flex justify-between items-center px-4 sm:px-12 font-semibold border-t-[4px] bg-white'>
                    {/* BACK  */}
                    {secondaryAction && (
                        <div
                            onClick={handleSecondaryAction}
                            className={`underline hover:bg-gray-100 py-2 px-4 rounded-md flex gap-1 cursor-pointer
                            ${disabled2 && 'cursor-not-allowed hover:bg-transparent'}
                            `}
                        >
                            {disabled2 ? (
                                <SecondaryActionLoading />
                            ) : (
                                <>
                                    {secondaryActionLabel}
                                </>
                            )}
                        </div>
                    )}
                    {/* NEXT & ONSUBMIT */}
                    <div
                        onClick={handleOnAction}
                        className={`bg-gray-900 hover:opacity-100 text-gray-50 p-1 h-[45px] w-[90px] rounded-md flex gap-1 items-center justify-center cursor-pointer
                        ${disabled && 'cursor-not-allowed bg-transparent'}
                        `}
                    >
                        {disabled ? (
                            <OnActionLoading />
                        ) : (
                            <>
                                {onActionLabel}
                            </>
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}

export default LayoutHostModal