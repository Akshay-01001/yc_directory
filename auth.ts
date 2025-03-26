import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
    ],
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.id = user.id // Add user ID to JWT
    //         }
    //         return token
    //     },
    //     async session({ session, token }) {
    //         if (session.user) {
    //             session.user.id  = token.id as string // Attach user ID to session
    //         }
    //         return session
    //     },
    // },
    // secret: process.env.AUTH_SECRET,
})