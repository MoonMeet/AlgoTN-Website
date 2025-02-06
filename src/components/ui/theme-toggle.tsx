'use client'
import { useTheme } from "@/contexts/ThemeProvider"
import { Button } from "@mui/material"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="text"
      onClick={toggleTheme}
      className="fixed top-4 left-1"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  )
}