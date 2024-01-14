import { NextResponse } from "next/server"

export const GET = async (req: Request,
    { params }: { params: { id: string } }) => {

    try {
        console.log(params.id);

        const listing = await prisma?.listing.findFirst({
            where: { id: params.id}
        })

        return NextResponse.json(listing);
    } catch (error) {

    }
}