import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

export const options: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials : {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password:{
                    label: "Password",
                    type: "password",
                    placeholder: "your-awesome-password"

                }
            },
            async authorize(credentials){
                const user = {id: "42" , name: "Dave", password: "nextauth"}
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ],
    // pages:{
    //     signIn: {

    //     }
    // }
}

