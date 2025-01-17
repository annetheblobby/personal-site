"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isExperimentsPage = pathname === "/experiments";

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${
          isExperimentsPage ? "bg-[#89AD24]" : "bg-[#FBF7F7]"
        } leading-relaxed`}
      >
        <main>
          {/* <Header></Header> */}
          <div className="mx-auto max-w-[1440px] w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
