"use client"

import Image from "next/image"
import { useData } from "@/lib/providers/DataProvider"
import WorkAvailability from "@/components/global/WorkAvailability"
import ContactLinks from "@/components/global/ContactLinks"
import LogoMarquee from "@/components/global/LogoMarquee"

function Intro() {
  const { data } = useData()

  return (
    <div className="flex flex-1 w-full">
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 lg:gap-6 items-center w-full">
        <header className="container flex justify-between pt-4 md:pt-8 lg:pt-16 xl:pt-24">
          <Image
            src={data.site.attributes.logo.url}
            width={100}
            height={32}
            alt="Joe Logo"
          />
          <div className="flex items-center gap-2 text-secondary">
            <div className="flex items-end md:items-center gap-4 justify-between">
              <WorkAvailability reverse />
            </div>
          </div>
        </header>
        <main className="items-center md:space-y-16 space-y-8 w-full">
          <div
            className="container text-heading-md"
            dangerouslySetInnerHTML={{ __html: data.intro.html }}
          />
          <LogoMarquee />
        </main>
        <footer
          className="container
          pb-4 md:pb-8 lg:pb-16 xl:pb-24"
        >
          <div className="flex items-end md:items-center gap-4 justify-between">
            <div className="flex items-center gap-2 text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>{" "}
              <span>Brooklyn, New York</span>
            </div>

            <ContactLinks />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Intro
