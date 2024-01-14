import prisma from "@/libs/prismaDb";
import bcrypt from 'bcrypt'

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            password
        } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            }
        });

        return NextResponse.json(user);

    } catch (error: any) {
        return NextResponse.json('Internal Error', error);
    }
};