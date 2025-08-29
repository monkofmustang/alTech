"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import type { PropsWithChildren } from "react"

export function ParallaxProviderClient({ children }: PropsWithChildren) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
