import type {Metadata} from "next";
import "@/styles/globals.css";
import {ReactNode} from "react";
import modam from "../styles/font/montserrat";
import clsx from "clsx";


export const metadata: Metadata = {
    title: "To Do List App",
    description: "An App For Keep Tracking Your Doings!",
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="En">
        <body className={clsx(modam.className, 'h-full')}>
        {children}
        </body>
        </html>
    );
}
