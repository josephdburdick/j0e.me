"use client"

import RuleHeader from "@/components/global/RuleHeader"
import { useApi } from "@/components/providers/DataProvider"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import convertNewLinesToHTML from "@/lib/convertNewLinesToHTML"
import { Recommendation as RecommendationType } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Recommendations() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const { data } = useApi()
  const recommendations: RecommendationType[] =
    data.recommendations.attributes.recommendations

  useEffect(() => {
    if (!api) return

    api.scrollTo(current)
  }, [api, current])

  const renderRecommendation = (
    recommendation: RecommendationType,
    index: number,
  ) => (
    <CarouselItem key={`recommendation-${index}`} className="grid gap-2">
      <div className="flex flex-col justify-center rounded-2xl border bg-secondary p-8">
        <div
          className="prose text-pretty"
          dangerouslySetInnerHTML={{
            __html: convertNewLinesToHTML(recommendation.body),
          }}
        />
        <RuleHeader>{recommendation.name}</RuleHeader>
        <small className="text-muted-foreground">{recommendation.title}</small>
      </div>
    </CarouselItem>
  )

  const renderAvatarButtons = (
    recommendation: RecommendationType,
    key: number,
  ) => {
    return (
      <button onClick={() => setCurrent(key)} className="relative">
        <div className="overflow-hidden rounded-full">
          <Image
            width={64}
            height={64}
            src={recommendation.avatar}
            alt={`${recommendation.name} avatar image`}
          />
        </div>
        <div
          className={cn(
            "absolute -top-16 left-1/2 hidden h-8 w-8 -translate-x-1/2 rotate-45 rounded-sm border-b border-r bg-secondary",
            key === current && "block",
          )}
        />
      </button>
    )
  }

  const renderRecommendations = (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {recommendations.map(renderRecommendation)}
      </CarouselContent>
      <div className="mt-12 flex items-center justify-center gap-10">
        {recommendations.map(renderAvatarButtons)}
      </div>
    </Carousel>
  )

  return (
    <div
      className={cn(
        "md:py16 min-h-[100dvh] items-center justify-center space-y-8 py-8 lg:py-24 xl:py-36",
      )}
    >
      <div className="container prose-scale space-y-4">
        <h4 className="text-2xl font-light">Recommendations</h4>
        {renderRecommendations}
      </div>
    </div>
  )
}
