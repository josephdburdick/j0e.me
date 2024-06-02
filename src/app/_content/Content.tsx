"use client"

import { useDevice } from "@/lib/providers/DeviceContext"
import MobileContent from "./MobileContent"
import DesktopContent from "./DesktopContent"

function Content() {
  const { isMobile } = useDevice()
  return isMobile ? <MobileContent /> : <DesktopContent />
}

export default Content
