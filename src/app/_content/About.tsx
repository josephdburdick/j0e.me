"use client"

import ExternalLink from "@/components/global/ExternalLink"
import { useApi } from "@/components/providers/DataProvider"
import Image from "next/image"

export default function Footer() {
  const { data } = useApi()
  const profile = data.profile.attributes
  const { width, height, src, alt } = profile.bg

  const links = [
    {
      href: "https://github.com/josephdburdick/j0e",
      children: "View Source Code",
    },
    {
      href: "https://pagespeed.web.dev/analysis/https-j0e-me/3wq088el4g?form_factor=mobile",
      children: "PageSpeed Insights",
    },
  ]
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
          <div className="space-y-2 rounded-3xl p-8 mix-blend-darken backdrop-blur-md md:p-16 lg:p-24 xl:p-36">
            <div className="text-sm">About this site</div>
            <p>
              Edited in{" "}
              <ExternalLink href="https://neovim.io">Neovim</ExternalLink>,
              composed in{" "}
              <ExternalLink href="https://www.npmjs.com/package/front-matter">
                Front Matter
              </ExternalLink>
              , statically generated with{" "}
              <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>,
              server hosted with{" "}
              <ExternalLink href="https://github.com/features/actions">
                Github Actions
              </ExternalLink>
              .
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
              {links.map((link, key) => (
                <ExternalLink key={key} href={link.href} className="text-sm">
                  {link.children}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
