"use client"

import MainAvatar from "@/components/global/MainAvatar"
import NameHeader from "@/components/global/NameHeader"
import { useApi } from "@/components/providers/DataProvider"

export default function Bio() {
  const { data } = useApi()
  // const {} = data.profile
  console.log({ data })
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-secondary pt-4 md:pt-8 lg:pt-16 xl:pt-24">
      Bio
      <div className="flex items-center gap-4">
        <MainAvatar /> <NameHeader />
      </div>
    </div>
  )
}
