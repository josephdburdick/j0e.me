"use client"

import Icon from "@/components/global/Icon"
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

      <div className="relative">
        <div className="grid sm:grid-cols-2">
          <div className="space-y-2 p-8 mix-blend-darken backdrop-blur-lg md:p-16 lg:p-24 xl:p-36">
            <div className="text-sm">About this site</div>
            <p>
              Data composed in front-matter format, front-end statically
              generated with Next, server hosted with Github actions.
            </p>
            <p>
              <a
                className="inline-flex items-center gap-2"
                href="https://github.com/josephdburdick/j0e"
              >
                <span className="underline">View Source Code</span>

                <Icon.externalLink className="inline-block" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
