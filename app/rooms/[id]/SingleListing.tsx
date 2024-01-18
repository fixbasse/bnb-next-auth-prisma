'use client'

import { useCallback, useEffect, useState } from "react";
import { Listing, User } from "@prisma/client"

import SingleListHeader from "../../../components/Rooms/SingleListHeader";
import SingleLIstInfo from "../../../components/Rooms/SingleLIstInfo";
import ReviewOverview from "../../../components/Rooms/review/ReviewOverview";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Range, RangeKeyDict } from "react-date-range";
import Calendar from "../../../components/calendar/DateRange";

import { differenceInDays } from "date-fns";
import axios from "axios";
import PriceAndFee from "@/components/Rooms/PriceAndFee";
import toast from "react-hot-toast";
import ListingLocation from "@/components/Rooms/ListingLocation";
import { hostOffer } from "@/components/Host/HostModal/HostOffer";
import { useRouter } from "next/navigation";

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
    //const [fixedDate, setFixedDate] = useState(); // date from host
    const [night, setNight] = useState(Number);
    const [cleaningFee, setCleaningFee] = useState(Number);
    const [serviceFee, setServiceFee] = useState(Number);
    const [priceBeforeTax, setPriceBeforeTax] = useState(Number);
    const [showContent, setShowContent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(
                dateRange.endDate,
                dateRange.startDate,
            );

            setNight(dayCount)
            setPriceBeforeTax(dayCount * listing.price);
            setCleaningFee((dayCount * listing.price) * 0.08)
            setServiceFee((dayCount * listing.price) * 0.05)
            setShowContent(!showContent);
        };

    }, [dateRange, listing.price, showContent]);

    const totalPriceBeforeTaxes = (priceBeforeTax + cleaningFee + serviceFee);

    const handleReserve = useCallback(() => {
        if (!totalPriceBeforeTaxes) {
            return;
        }

        router.push(`/book/${listing.id}`)
    }, [totalPriceBeforeTaxes, listing.id, router]);


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

                {/* SIDEBAR ===================> */}
                <section className="absolute  z-1 bg-white top-6 right-0 col-span-3 p-4 border rounded-xl shadow-md hidden md:block">
                    <PriceAndFee
                        id={listing.id}
                        price={listing.price}
                        night={night}
                        showContent={showContent}
                        priceBeforeTax={priceBeforeTax}
                        cleaningFee={cleaningFee}
                        serviceFee={serviceFee}
                        totalPriceBeforeTaxes={totalPriceBeforeTaxes}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        handleReserve={handleReserve}
                    />
                </section>
            </main>

            {/* REVIEW */}
            <ReviewOverview />


            {/* MAP */}
            <ListingLocation
                locationValue={listing.locationValue}
            />

        </div >
    )
}

export default SingleListing