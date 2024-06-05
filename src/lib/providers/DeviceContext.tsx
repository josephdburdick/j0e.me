"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

interface DeviceContextProps {
  isMobile: boolean;
  orientation: "portrait" | "landscape" | null;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined)

const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [orientation, setOrientation] = useState<
    "portrait" | "landscape" | null
  >(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    function handleResize() {
      const mobileTest =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      setIsMobile(mobileTest.test(navigator.userAgent))

      if (mobileTest.test(navigator.userAgent)) {
        if (window?.matchMedia("(orientation: portrait)").matches) {
          setOrientation("portrait")
        } else if (window.matchMedia("(orientation: landscape)").matches) {
          setOrientation("landscape")
        }

        window.scrollTo(0, 0)
      } else {
        setOrientation(null)
      }
    }

    window.addEventListener("orientationchange", handleResize)

    setTimeout(handleResize, 0)

    return () => {
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  return (
    <DeviceContext.Provider value={{ isMobile, orientation }}>
      {children}
    </DeviceContext.Provider>
  )
}

const useDevice = () => {
  const context = useContext(DeviceContext)
  if (context === undefined) {
    throw new Error("useDevice must be used within a DeviceProvider")
  }
  return context
}

export { DeviceProvider, useDevice }
