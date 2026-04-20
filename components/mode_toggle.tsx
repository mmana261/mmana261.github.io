"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full p-0 bg-transparent border-0 focus:ring-0"
    >
      <div className="relative h-6 w-6">
        <img
          src="/shutter-open.png"
          alt="light"
          className="h-full w-full transition-all duration-300 dark:opacity-0 dark:-rotate-90"
        />
        <img
          src="/shutter-closed.png"
          alt="dark"
          className="absolute inset-0 h-full w-full opacity-0 rotate-90 transition-all duration-300 dark:opacity-100 dark:rotate-0"
        />
      </div>
      {/* <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" /> */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}