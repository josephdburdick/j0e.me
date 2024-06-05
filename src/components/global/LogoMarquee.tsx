import { useData } from "@/lib/providers/DataProvider"
import { cn } from "@/lib/utils"
import { Job } from "@/lib/types/experience"
type MarqueeProps = {
  itemWidth?: string;
};

const logoPath = "/j0e/assets/images/logos/"
export default function LogoMarquee(props: MarqueeProps) {
  const { itemWidth = "200px" } = props
  const { data } = useData()
  const jobs: Job[] = data.experience.attributes.experience.filter(
    (job: Job) => !!job.logo,
  )

  return (
    <div className="marquee-wrapper relative w-11/12 max-w-screen-xl mx-auto mt-20 h-24 overflow-hidden">
      {jobs.map((job, index) => (
        <div
          className={cn(
            "marquee-item absolute w-52 h-24 bg-secondary rounded-lg",
            `marquee-item-${index}`,
          )}
          key={index}
          style={{
            animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)`,
            animationName: "scrollLeft",
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            left: `max(calc(${itemWidth} * ${jobs.length}), 100%)`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-muted p-8 pointer-events-none selection-none">
            <img
              src={logoPath + job.logo}
              alt={`${job.company} logo`}
              className="grayscale pointer-events-none selection-none"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
