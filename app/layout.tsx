import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundAnimation } from "@/components/background-animation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ALGENTECH | AI-Powered Software Development",
  description: "Turn ideas into world-class software with AI-powered development. Prototypes ready in 90 hours.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Choose one of these background animations */}
          <BackgroundAnimation />
          {/* <StarField /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
