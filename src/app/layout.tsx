import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import getData from "../data"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joe Burdick – Senior Web Software Engineer",
  description: "Joe Burdick is a Senior Web Softare Engineer. Hire him today.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
