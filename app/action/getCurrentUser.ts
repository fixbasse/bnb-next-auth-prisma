import { getServerSession } from "next-auth";
import prisma from "@/libs/prismaDb";
import { redirect } from "next/navigation";
import authOptions from "@/libs/options";

export async function getSession() {
    return await getServerSession(authOptions);
};

async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        console.log(error);

    }
};

export default getCurrentUser;