import getCurrentUser from "@/app/action/getCurrentUser";
import prisma from '@/libs/prismaDb'
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.json('No user!');
    }; 

    const body  = await req.json();

    const {
        category,
        roomType,
        location,
        guestCount,
        bedroomCount,
        bedCount,
        bathroomCount,
        offer,
        imageSrc,
        amenities,
        safety,
        shortDesc,
        description,
        confirm,
        price,
        startDate,
        endDate,
    } = body;

    try {
        const listing = await prisma.listing.create({
            data: {
                category,
                roomType,
                locationValue: location.value,
                guestCount,
                bedroomCount,
                bedCount,
                bathroomCount,
                offer,
                imageSrc,
                amenities,
                safety,
                shortDesc,
                description,
                confirm,
                price: parseInt(price, 10),
                startDate,
                endDate,
                userId: currentUser.id,
                hostName: currentUser.name,
            }
        });

        return NextResponse.json(listing);
    } catch (error) {
        return NextResponse.json('[INTERNAL_ERROR] at ListingAPI');
    };
};
