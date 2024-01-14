import prisma from "@/libs/prismaDb";

// export interface IListingsParams {
//     category?: string;
//     roomType?: string
//     locationValue?: string
//     guestCount?: number
//     bedroomCount?: number;
//     bedCount?: number;
//     bathroomCount?: number;
//     offer?:string;
//     imageSrc?:string;
//     amenities?: string;
//     safety?: string;
//     shortDesc?: string;
//     description?: string;
//     confirm?: string;
//     price?: number;
//     startDate?: number;
//     endDate?: number;
//     userId?: string;
//     hostName?: string;
//   }  

export async function getListing() {
    try {
        const listing = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return listing;
    } catch (error) {
        console.log(error);

    }
}