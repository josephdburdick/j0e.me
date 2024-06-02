"use client"

import MainHeader from "@/components/MainHeader"
import MainAvatar from "@/components/MainAvatar"
import { useDevice } from "@/lib/providers/DeviceContext"
import { cn } from "@/lib/utils"

function MobileContent() {
  const { orientation } = useDevice()
  const isVertical = orientation === "portrait"
  return (
    <div
      className={cn(
        orientation === "portrait" ? "bg-green-100" : "bg-red-100",
        "flex flex-1 w-full ",
      )}
    >
      <div className={cn("grid w-full grid-rows-2 grid-cols-2 gap-4")}>
        <section
          className={cn(
            isVertical && "col-span-2",
            "flex flex-col flex-1 gap-4 ",
          )}
        >
          <div
            className={cn(
              "flex gap-4 ",
              isVertical ? "flex-col " : "items-center",
            )}
          >
            <MainAvatar />
            <MainHeader />
          </div>
        </section>
        <main></main>
      </div>
    </div>
  )
}

export default MobileContent
