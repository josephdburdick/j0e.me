import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import api from "../api"
import NextHead from "next/head"
import { FavIcon } from "@/lib/types"

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
  const { meta, favicon } = faviconProp.attributes

  const renderFavicons = (favicon.icons || []).map((icon: FavIcon) => (
    <link key={icon.href} {...icon} />
  ))

  return (
    <NextHead>
      {renderFavicons}
      <link
        rel="mask-icon"
        href={favicon.maskIcon.href}
        color={favicon.maskIcon.color}
      />
      <link rel="manifest" href={favicon.manifest} />
      <link rel="shortcut icon" href={favicon.shortcutIcon} />
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
