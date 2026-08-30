import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import CustomCursor from "./Custom-Cursor/CustomCursor";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://husnain-portfolio-tau.vercel.app"),

    title: {
        default: "Syed Husnain Shah | Frontend Developer & Web Designer",
        template: "%s | Syed Husnain Shah",
    },

    description:
        "Syed Husnain Shah is a Frontend Developer and Web Designer creating modern, responsive and user-friendly websites with clean code and thoughtful design.",

    keywords: [
        "Syed Husnain Shah",
        "Husnain Shah",
        "Frontend Developer",
        "Web Designer",
        "React Developer",
        "Next.js Developer",
        "Portfolio",
        "Web Development",
    ],

    authors: [
        {
            name: "Syed Husnain Shah",
        },
    ],

    creator: "Syed Husnain Shah",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Syed Husnain Shah | Frontend Developer & Web Designer",
        description:
            "Explore the portfolio of Syed Husnain Shah, a Frontend Developer and Web Designer.",
        url: "https://husnain-portfolio-tau.vercel.app/",
        siteName: "Syed Husnain Shah Portfolio",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Syed Husnain Shah | Frontend Developer & Web Designer",
        description:
            "Frontend Developer and Web Designer creating modern and responsive digital experiences.",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <CustomCursor />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}