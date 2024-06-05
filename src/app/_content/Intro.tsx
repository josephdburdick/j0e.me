"use client"

import Image from "next/image"
import { useData } from "@/lib/providers/DataProvider"
import WorkAvailability from "@/components/global/WorkAvailability"
import ContactLinks from "@/components/global/ContactLinks"
import LogoMarquee from "@/components/global/LogoMarquee"

function Intro() {
  const { data } = useData()

  return (
    <div className="flex flex-1 w-full min-h-[100dvh]">
      <div className="grid grid-rows-[auto_1fr_auto] gap-4 items-center w-full">
        <header className="container flex justify-between pt-4 md:pt-8 lg:pt-16 xl:pt-24">
          <Image
            src="/j0e/assets/images/logo--slash.svg"
            width={100}
            height={32}
            alt="Joe Logo"
          />
        </header>
        <main className="items-center text-heading-md space-y-16 ">
          <div
            className="container "
            dangerouslySetInnerHTML={{ __html: data.intro.html }}
          />
          <LogoMarquee />
        </main>
        <footer
          className="container
          pb-4 md:pb-8 lg:pb-16 xl:pb-24"
        >
          <div className="flex items-center gap-4 justify-between">
            <WorkAvailability />
            <ContactLinks />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Intro
