import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"BLACKFOREX | Trade The Global Markets",description:"BLACKFOREX multi-asset trading platform"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}