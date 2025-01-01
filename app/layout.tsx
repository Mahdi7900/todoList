import type {Metadata} from "next";
import "@/styles/globals.css";
import {ReactNode} from "react";
import {MuiThemeWrapper} from "@/utils/muiThemeWrapper/MuiThemeWrapper";
import {headers} from 'next/headers';
import modam from "../styles/font/modam";
import clsx from "clsx";


export const metadata: Metadata = {
    title: "To Do List App",
    description: "An App For Keep Tracking Your Doings!",
};

export default async function RootLayout({children}: Readonly<{
    children: ReactNode
}>) {
    const userAgent = await headers();
    return (
        <html lang="fa">
        <body className={clsx(modam.className, 'rtl h-full')}>
        <MuiThemeWrapper agent={userAgent.get('user-agent') ?? undefined}>
            {children}
        </MuiThemeWrapper>
        </body>
        </html>
    );
}
