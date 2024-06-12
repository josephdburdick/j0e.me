"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import Icon from "./Icon"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode") === "true"
    setDarkMode(storedPreference)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    }
  }, [darkMode])

  return (
    <button
      className="group relative inline-flex items-center rounded-full bg-secondary focus:outline-none dark:bg-gray-800"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="pointer-events-none absolute right-full z-0 mr-2 translate-x-1/4 whitespace-nowrap rounded-full bg-primary px-4 py-2 opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100 group-active:opacity-100">
        Toggle theme
      </div>
      <div
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "rounded-full p-2",
        )}
      >
        {darkMode ? (
          <Icon.sun className="text-yellow-500" />
        ) : (
          <Icon.moon className="foreground text-foreground" />
        )}
      </div>
    </button>
  )
}

export default DarkModeToggle
