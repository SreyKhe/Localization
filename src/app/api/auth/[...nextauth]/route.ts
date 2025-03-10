import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Google from "next-auth/providers/google";

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

