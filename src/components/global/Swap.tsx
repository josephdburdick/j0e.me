import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const firstHeight = firstRef.current?.offsetHeight || 0
        const firstWidth = firstRef.current?.offsetWidth || 0
        const secondHeight = secondRef.current?.offsetHeight || 0
        const secondWidth = secondRef.current?.offsetWidth || 0
        setDimensions({
          width: Math.max(firstWidth, secondWidth),
          height: Math.max(firstHeight, secondHeight),
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [showFirst])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      <div
        ref={firstRef}
        className={`absolute w-full transition-transform duration-500 ${showFirst ? "translate-y-0" : "-translate-y-full"}`}
      >
        {firstComponent}
      </div>
      <div
        ref={secondRef}
        className={`absolute w-full transition-transform duration-500 ${showFirst ? "translate-y-full" : "translate-y-0"}`}
      >
        {secondComponent}
      </div>
    </div>
  )
}

export default Swap
