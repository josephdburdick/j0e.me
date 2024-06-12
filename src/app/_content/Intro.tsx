"use client"

import DarkModeToggle from "@/components/global/DarkModeToggle"
import Icon from "@/components/global/Icon"
import LogoMarquee from "@/components/global/LogoMarquee"
import MainHeader from "@/components/global/MainHeader"
import MainNav from "@/components/global/MainNav"
import WeatherComponent from "@/components/global/Weather"
import WorkAvailability from "@/components/global/WorkAvailability"
import { useApi } from "@/components/providers/DataProvider"
import { ContactLink } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

function Intro() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const { data } = useApi()
  const links: ContactLink[] = Object.values(data.profile.attributes.links)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      const { bottom } = headerRef.current?.getBoundingClientRect() || {}
      setIsSticky(bottom < 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="flex min-h-[95dvh] flex-col items-center justify-center">
      <div className="flex w-full flex-1">
        <div className="grid w-full grid-rows-[auto_1fr_auto] items-center gap-4 lg:gap-6">
          <MainHeader className="pt-8 md:pt-16 lg:pt-24 xl:pt-36">
            <DarkModeToggle />
          </MainHeader>
          <div
            className={cn(
              "fixed top-0 w-full bg-gradient-to-b from-background backdrop-blur-sm transition-opacity duration-300 dark:mix-blend-plus-darker dark:backdrop-blur-none",
              isSticky ? "opacity-100" : "opacity-0",
            )}
          >
            <MainHeader className="container z-10 py-4 md:py-8">
              <WorkAvailability reverse />
            </MainHeader>
          </div>

          <main className="w-full items-center space-y-8 md:space-y-16">
            <div
              className="container prose prose-scale dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: data.intro.html }}
            />
            <LogoMarquee />
          </main>
          <footer className="pb-8 md:pb-16 lg:pb-24 xl:pb-36">
            <div className="container">
              <div
                className="flex items-center justify-between gap-4"
                ref={headerRef}
              >
                <div className="hidden shrink-0 items-center gap-2 text-sm text-muted md:flex md:text-base">
                  <Icon.mapPin />
                  <WeatherComponent />
                </div>
                <MainNav
                  title="Let's Connect"
                  description="Send a message via Email or Social Media"
                  links={links}
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Intro
