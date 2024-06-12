import icons from "@/lib/icons"
import { LucideProps } from "lucide-react"
import React from "react"

const Icon: { [key: string]: React.FC<LucideProps> } = {}

Object.keys(icons).forEach((key) => {
  Icon[key] = (props: LucideProps) => {
    const IconComponent = icons[key]
    return IconComponent ? <IconComponent {...props} /> : null
  }
})

export default Icon
