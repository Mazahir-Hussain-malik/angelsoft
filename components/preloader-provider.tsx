"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import { Preloader } from "./preloader";

interface PreloaderProviderProps {
  children: React.ReactNode
}

export function PreloaderProvider({ children }: PreloaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  const pathname = usePathname()

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Navigation changes
  useEffect(() => {
    if (!isLoading) {
      setShowPreloader(true)
      const timer = setTimeout(() => {
        setShowPreloader(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [pathname, isLoading])

  const handleClose = () => {
    setShowPreloader(false)
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {(isLoading || showPreloader) && <Preloader key="preloader" onClose={handleClose} />}
      </AnimatePresence>
      {children}
    </>
  )
}
