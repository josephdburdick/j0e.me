import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

interface SwapProps {
  firstComponent: React.ReactNode;
  secondComponent: React.ReactNode;
  firstDuration?: number; // Duration to show the first component
  secondDuration?: number; // Duration to show the second component
  className?: string;
}

const Swap: React.FC<SwapProps> = ({
  firstComponent,
  secondComponent,
  firstDuration = 5000,
  secondDuration = 1000,
  className = "",
}) => {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const switchComponent = () => {
      setShowFirst((prev) => !prev)
      const nextDuration = showFirst ? secondDuration : firstDuration
      intervalId = setTimeout(switchComponent, nextDuration)
    }

    intervalId = setTimeout(switchComponent, firstDuration) // Start with the first component duration

    return () => clearTimeout(intervalId) // Cleanup timeout on component unmount
  }, [firstDuration, secondDuration, showFirst])

  return (
    <div className={cn("relative h-full overflow-hidden", className)}>
      <div
        className={`absolute transform transition-transform duration-500 ${showFirst ? "translate-y-0" : "-translate-y-full"}`}
      >
        {firstComponent}
      </div>
      <div
        className={`absolute transform transition-transform duration-500 ${showFirst ? "translate-y-full" : "translate-y-0"}`}
      >
        {secondComponent}
      </div>
    </div>
  )
}

export default Swap
