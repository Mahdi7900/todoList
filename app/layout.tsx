import type {Metadata} from "next";
import "@/styles/globals.css";
import {ReactNode} from "react";
import modam from "../styles/font/modam";
import clsx from "clsx";


export const metadata: Metadata = {
    title: "To Do List App",
    description: "An App For Keep Tracking Your Doings!",
};

export default function RootLayout({children}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="fa">
        <body className={clsx(modam.className, 'rtl h-full')}>
        {children}
        </body>
        </html>
    );
}
