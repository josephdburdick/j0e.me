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
    <div className="marquee-wrapper relative w-11/12 max-w-screen-xl mx-auto  h-36 overflow-hidden pointer-events-none">
      {jobs.map((job, index) => (
        <div
          className={cn("absolute w-52 h-24 rounded-lg shadow-xl my-4 ")}
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
          <div className="w-full h-full flex items-center justify-center text-muted p-8 ">
            <img
              src={logoPath + job.logo}
              alt={`${job.company} logo`}
              className="grayscale pointer-events-none selection-none max-h-20 max-w-28"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
