'use client'

import { Listing } from "@prisma/client"
import Calendar from "../calendar/DateRange";
import { Range } from "react-date-range";
import { useCallback, useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface PriceAndFeeProps {
    id: string;
    price: number | boolean;
    night: number;
    showContent: boolean;
    priceBeforeTax: number;
    cleaningFee: number;
    serviceFee: number;
    totalPriceBeforeTaxes: number;
    dateRange: Range;
    setDateRange: (value: Range) => void;
    handleReserve: () => void;
};

const PriceAndFee = ({
    id,
    night,
    showContent,
    priceBeforeTax,
    cleaningFee,
    serviceFee,
    totalPriceBeforeTaxes,
    dateRange,
    setDateRange,
    price,
    handleReserve
}: PriceAndFeeProps) => {
    const [showPrice, setShowPrice] = useState(false);
    const [showCleaningFee, setShowCleaningFee] = useState(false);
    const [showServiceFee, setShowServiceFee] = useState(false);
    const router = useRouter();


    return (
        <>
            <div className="flex items-center gap-1">
                <h1 className="font-semibold text-2xl">
                    $ {price}
                </h1>
                <span className="font-light">
                    night
                </span>
            </div>

            <Calendar
                value={dateRange}
                onChange={(value) => setDateRange(value.selection)}
            />

            {/* <============
             RESERVATION Button
              =================>> */}
            <button
                onClick={handleReserve}
                className="bg-pink-600 text-white p-3 my-2 rounded-md w-full"
            >
                Reserve
            </button>


            {night ? (
                <div className={`flex flex-col
                        ${showContent
                        ? 'block'
                        : 'hidden'}
                        `}>
                    <span className="pb-2 text-center font-light">
                        You won't be charged yet
                    </span>

                    <section className="flex flex-col gap-2 font-light pb-4">

                        {/* PRICE */}
                        <div className="flex items-center justify-between relative">
                            <div
                                onClick={() => setShowPrice(!showPrice)}
                                className="underline cursor-pointer">
                                ${price} x {night}
                            </div>
                            <span>
                                ${priceBeforeTax.toLocaleString()}
                            </span>

                            {/* Modal */}
                            <div className={`absolute left-[-10rem] top-[-4rem] bg-white shadow-xl rounded-md p-4 flex items-start gap-4 w-[350px]
                            ${showPrice ? 'block' : 'hidden'}
                            `}>
                                <div
                                    onClick={() => setShowPrice(!showPrice)}
                                    className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                                    <X size={15} />
                                </div>

                                <span className="text-gray-500 text-sm">
                                    Average price are rounded
                                </span>
                            </div>

                        </div>
                        {/* Cleaning FEE */}
                        <div className="flex items-center justify-between relative">
                            <h3
                                onClick={() => setShowCleaningFee(!showCleaningFee)}
                                className="underline cursor-pointer">
                                Cleaning fee
                            </h3>
                            <span>
                                ${cleaningFee.toLocaleString()}
                            </span>

                            {/* Modal */}
                            <div className={`absolute left-[-10rem] top-[-4rem] bg-white shadow-xl rounded-md p-4 flex items-start gap-4 w-[350px]
                            ${showCleaningFee ? 'block' : 'hidden'}
                            `}>
                                <div
                                    onClick={() => setShowCleaningFee(!showCleaningFee)}
                                    className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                                    <X size={15} />
                                </div>

                                <span className="text-gray-500 text-sm">
                                    One-time fee charged by host to cover the cost of cleaning their space.
                                </span>
                            </div>
                        </div>

                        {/* BNB FEE */}
                        <div className="flex items-center justify-between relative">
                            <h3
                                onClick={() => setShowServiceFee(!showServiceFee)}
                                className="underline cursor-pointer">
                                ActiveBnb Service Fee
                            </h3>
                            <span>
                                ${serviceFee.toLocaleString()}
                            </span>

                            {/* Modal */}
                            <div className={`absolute left-[-10rem] top-[-4rem] bg-white shadow-xl rounded-md p-4 flex items-start gap-4 w-[350px]
                            ${showServiceFee ? 'block' : 'hidden'}
                            `}>
                                <div className="p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                                    <X
                                        onClick={() => setShowServiceFee(!showServiceFee)}
                                        size={15} />
                                </div>

                                <span className="text-gray-500 text-sm">
                                    This helps us run our platform and offer services like 24/7 support on your trip. This includes VAT.
                                </span>
                            </div>
                        </div>
                    </section>

                    <hr />

                    {/* Total Before Taxes */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="font-semibold">
                            Total before taxes
                        </div>
                        <span>
                            ${totalPriceBeforeTaxes.toLocaleString()}
                        </span>
                    </div>

                </div>
            ) : (
                null
            )}
        </>
    )
}

export default PriceAndFee