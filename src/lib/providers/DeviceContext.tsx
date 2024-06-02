"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

interface Size {
  width: number;
  height: number;
}

interface DeviceContextProps {
  isMobile: boolean;
  size: Size;
  orientation: "portrait" | "landscape" | null;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined)

const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [size, setSize] = useState<Size>({
    width: window ? window.innerWidth : 0,
    height: window ? window.innerHeight : 0,
  })
  const [orientation, setOrientation] = useState<
    "portrait" | "landscape" | null
  >(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    function handleResize() {
      setSize({ width: window?.innerWidth, height: window?.innerHeight })
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent))
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        if (window?.matchMedia("(orientation: portrait)").matches) {
          setOrientation("portrait")
        } else if (window.matchMedia("(orientation: landscape)").matches) {
          setOrientation("landscape")
        }
      } else {
        setOrientation(null)
      }
    }

    handleResize() // Initialize values on mount
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  return (
    <DeviceContext.Provider value={{ isMobile, size, orientation }}>
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
