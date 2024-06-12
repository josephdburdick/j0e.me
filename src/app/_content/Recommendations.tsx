"use client"

import RuleHeader from "@/components/global/RuleHeader"
import { useApi } from "@/components/providers/DataProvider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import convertNewLinesToHTML from "@/lib/convertNewLinesToHTML"
import { Recommendation as RecommendationType } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function Recommendations() {
  const { data } = useApi()
  const recommendations: RecommendationType[] =
    data.recommendations.attributes.recommendations

  const renderRecommendation = (
    recommendation: RecommendationType,
    index: number,
  ) => (
    <CarouselItem
      key={`recommendation-${index}`}
      className="grid basis-1/3 gap-2"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 font-semibold md:col-span-8 md:col-start-4">
          <RuleHeader>{recommendation.name}</RuleHeader>

          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: convertNewLinesToHTML(recommendation.body),
            }}
          />
        </div>
      </div>
    </CarouselItem>
  )

  const renderRecommendations = (
    <Carousel>
      <CarouselContent>
        {recommendations.map(renderRecommendation)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

  return (
    <div
      className={cn(
        "md:py16 min-h-[100dvh] items-center justify-center space-y-8 py-8 lg:py-24 xl:py-36",
      )}
    >
      <div className="container prose-scale space-y-4">
        <h4 className="text-xl font-bold">Recommendations</h4>
      </div>

      {renderRecommendations}
    </div>
  )
}
