import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./provider";

export default async function LocaleLayout({
    children,
    params
}:{
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}){

    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if(!routing.locales.includes(locale as any)){
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages(); 
    
    return (
       
        <html lang={locale}>
        <body>
           <Providers>
                <NextUIProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Navbar/>
                        {children}
                    </NextIntlClientProvider>
                </NextUIProvider>
            </Providers>
            
        </body>
        </html>
        
    )
}