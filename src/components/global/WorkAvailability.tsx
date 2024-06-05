import { cn } from "@/lib/utils"

type Props = {
  reverse?: boolean
}
export default function WorkAvailability(props: Props) {
  const { reverse = false } = props
  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 text-muted",
          reverse && "flex-row-reverse"
        )}
      >
        <span className="bg-lime-500 rounded-full  w-2 h-2 md:w-4 md:h-4 inline-flex ">
          <span className="bg-lime-400 rounded-full  w-2 h-2 md:w-4 md:h-4 inline-flex animate-ping"></span>
        </span>
        <span className="text-sm md:text-base">Available for work</span>
      </div>
    </div>
  )
}
