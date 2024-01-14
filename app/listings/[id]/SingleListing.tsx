'use client'

import { useEffect, useState } from "react";
import { Listing, User } from "@prisma/client"

import SingleListHeader from "../../../components/Rooms/SingleListHeader";
import SingleLIstInfo from "../../../components/Rooms/SingleLIstInfo";
import ReviewOverview from "../../../components/Rooms/review/ReviewOverview";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Range } from "react-date-range";
import Calendar from "../../../components/calendar/DateRange";

import { differenceInDays } from "date-fns";
import axios from "axios";

interface SingleListingProps {
    listing: Listing;
};

const initialRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SingleListing = ({
    listing,
}: SingleListingProps) => {
    const [dateRange, setDateRange] = useState<Range>(initialRange);
    const [fixedDate, setFixedDate] = useState();
    const [price, setPrice] = useState(Number);
    const [night, setNight] = useState(Number);
    const [priceBeforeTax, setPriceBeforeTax] = useState(Number);
    const [showContent, setShowContent] = useState(false);

    const {
        handleSubmit,
    } = useForm<FieldValues>();

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(
                dateRange.endDate,
                dateRange.startDate,
            );

            setNight(dayCount)
            setPriceBeforeTax(dayCount * listing.price);
            setShowContent(!showContent);
        };

    }, [dateRange, listing.price]);

    //* RESERVATION 
    const onSubmit = async () => {
        console.log();

        try {
            const res = await axios.post('/api/reservation/', {
                startDate: dateRange.startDate,
                endDate: dateRange.endDate,
                priceBeforeTax,
            })
            console.log(res.data);

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div>
            {/* <title>
                {listing.shortDesc} - ActiveBnb
            </title> */}

            {/* Heading */}
            <SingleListHeader
                shortDesc={listing.shortDesc}
                imageSrc={listing.imageSrc}
            />

            <main className="grid md:grid-cols-8 py-8 md:gap-20 relative">
                <section className="col-span-5">

                    {/* INFO */}
                    <SingleLIstInfo
                        guestCount={listing.guestCount}
                        shortDesc={listing.shortDesc}
                        locationValue={listing.locationValue}
                        bedroomCount={listing.bedroomCount}
                        bedCount={listing.bedCount}
                        bathroomCount={listing.bathroomCount}
                        hostName={listing.hostName}
                        description={listing.description}
                        amenities={listing.amenities}
                        offer={listing.offer}
                        safety={listing.safety}
                    />

                    {/* CALENDER */}
                    <div className="py-8 px-4">
                        <div className="pb-4">
                            <h1 className="text-2xl font-semibold">
                                Select check-in date
                            </h1>
                            <span className="font-light text-sm text-gray-500">
                                Add your travel dates for exact pricing
                            </span>
                        </div>

                        <Calendar
                            value={dateRange}
                            onChange={(value) => setDateRange(value.selection)}
                        />
                    </div>
                </section>

                {/* SIDEBAR */}
                <section className="absolute  z-1 bg-white top-6 right-0 col-span-3 p-4 border rounded-xl shadow-md hidden md:block">
                    <div className="flex items-center gap-1">
                        <h1 className="font-semibold text-2xl">
                            $ {listing.price}
                        </h1>
                        <span className="font-light">
                            night
                        </span>
                    </div>

                    <Calendar
                        value={dateRange}
                        onChange={(value) => setDateRange(value.selection)}
                    />

                    <button
                        className="bg-pink-600 text-white p-3 my-2 rounded-md w-full"
                    >
                        Reserve
                    </button>

                    {/* PRICE */}
                    <div className={`flex items-center justify-between
                    ${showContent ? 'block' : 'hidden'}
                    `}>
                        <div>
                            {listing.price} x {night}
                        </div>
                        <span>
                            ${priceBeforeTax}
                        </span>
                    </div>

                </section>
            </main>


            {/* REVIEW */}
            <ReviewOverview />

        </div>
    )
}

export default SingleListing