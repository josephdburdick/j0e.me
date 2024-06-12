import { FavIcon } from "@/lib/types"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextHead from "next/head"

import api from "../api"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await api()
  const {
    url,
    title,
    keywords,
    description,
    viewport,
    robots,
    openGraph,
    twitter,
  } = meta.attributes
  return {
    title,
    description,
    keywords,
    viewport,
    robots,
    openGraph: {
      ...openGraph,
      url,
      title,
    },
    twitter: {
      ...twitter,
      title,
    },
  }
}

async function Head() {
  const { favicon: faviconProp } = await api()
  const { meta } = faviconProp.attributes

  return (
    <NextHead>
      <meta
        name="msapplication-TileColor"
        content={meta.msapplicationTileColor}
      />
      <meta name="msapplication-config" content={meta.msapplicationConfig} />
      <meta name="theme-color" content={meta.themeColor} />
    </NextHead>
  )
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
