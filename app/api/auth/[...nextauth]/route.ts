import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"

import prisma from '@/libs/prismaDb'
import bcrypt from 'bcrypt'


export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                };

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid credentials");
                };

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials");
                };

                //console.log({ isCorrectPassword });
                return user;
            }
        })
    ],
    pages: {
        signIn: '/',
        signOut: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    // session: {
    //     strategy: 'jwt'
    // },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token }) => {
            //console.log('Session Callback', session, token);

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            };
        },
        jwt: ({ token, user }) => {
            //console.log('JWT Callback', { token, user });

            const u = user as unknown as any
            if (user) {
                return {
                    ...token,
                    id: u.id
                }
            }
            return token;
        }
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
