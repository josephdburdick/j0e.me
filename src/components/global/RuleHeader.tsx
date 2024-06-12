import type { PropsWithChildren } from "react"

export default function RuleHeader(props: PropsWithChildren) {
  return (
    <div className="flex w-full items-center">
      <span className="mr-4 flex-shrink">{props.children}</span>
      <div className="h-px w-full flex-1 bg-gradient-to-r from-muted"></div>
    </div>
  )
}
