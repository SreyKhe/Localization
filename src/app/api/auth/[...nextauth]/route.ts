import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { options } from "./options";

const handler = NextAuth(options)

// const handler = NextAuth({
//     providers: [
//         Google({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//         }),
//     ],
//     pages: {
//         signIn: "/auth/signin", // Optional: redirect to a custom sign-in page
//         error: "/auth/error", // Optional: handle errors
//       },
//       session: {
//         strategy: "jwt", // This defines how the session is stored
//       },
//       callbacks: {
//         async jwt({ token, account, user }) {
//           // Here you can manage the user data in the JWT token
//           if (account && user) {
//             token.id = user.id;
//             token.email = user.email;
//           }
//           return token;
//         },
//       },
// })
export {handler as GET, handler as POST}

