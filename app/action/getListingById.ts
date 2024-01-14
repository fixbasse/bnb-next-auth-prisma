import prisma from '@/libs/prismaDb'

export default async function getListById(id: string) {
    try {
        const listing = await prisma.listing.findUnique({
            where: {
                id: id
            }
        });

        if (!listing) return null;

        return listing;
    } catch (error) {
        console.log(error);
    }
};



// const getList = async (id: string) => {
//   const response = await prisma.listing.findUnique({
//     where: {
//       id: id
//     }
//   })

//   return response;
// }

//   const response = await prisma.listing.findFirst({
//     where: {
//       id: id
//     },

//   })

//   return response;
// }