"use client"

import { useApi } from "@/components/providers/DataProvider"
import Image from "next/image"

export default function Footer() {
  const { data } = useApi()
  const profile = data.profile.attributes
  const { width, height, src, alt } = profile.bg
  return (
    <div className="flex items-center bg-secondary">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute z-0 aspect-auto"
      />

      <div className="relative text-primary-foreground">
        <div className="grid sm:grid-cols-2">
          <div className="space-y-1 p-8 mix-blend-darken backdrop-blur-lg md:p-16 lg:p-24 xl:p-36">
            <div className="text-sm">About this site</div>
            <p>
              Built with front-matter, statically generated with Next, and
              hosted on Github pages.{" "}
              <a
                href="https://github.com/josephdburdick/j0e"
                className="underline"
              >
                View Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
