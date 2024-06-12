"use client"

import { useApi } from "@/components/providers/DataProvider"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { ForwardedRef, PropsWithChildren, ReactNode } from "react"
import { forwardRef } from "react"

type Props = PropsWithChildren & {
  className?: string;
};

export const MainHeader = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>): ReactNode => {
    const { className } = props
    const { data } = useApi()
    const { logo } = data.site.attributes

    return (
      <header
        className={cn(
          "container z-50 flex items-center justify-between",
          className,
        )}
        ref={ref}
      >
        <h1 className="dark:invert">
          <Image
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
          <span className="sr-only">Joe Burdick</span>
        </h1>
        <div className="flex items-center gap-2 text-secondary">
          <div className="flex items-end justify-between gap-4 md:items-center">
            {props.children}
          </div>
        </div>
      </header>
    )
  },
)

MainHeader.displayName = "MainHeader"

export default MainHeader
