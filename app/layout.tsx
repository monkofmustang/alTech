import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundAnimation } from "@/components/background-animation"
import "./globals.css"
import Head from "next/head"

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
      <Head>
        <meta property="og:title" content="ALGENTECH | AI-Powered Software Development" />
        <meta property="og:description" content="Turn ideas into world-class software with AI-powered development. Prototypes ready in 90 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://algentech.com.np/" />
        <meta property="og:image" content="/placeholder-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ALGENTECH | AI-Powered Software Development" />
        <meta name="twitter:description" content="Turn ideas into world-class software with AI-powered development. Prototypes ready in 90 hours." />
        <meta name="twitter:image" content="/placeholder-logo.png" />
        <link rel="canonical" href="https://algentech.com.np/" />
        <meta name="keywords" content="software company in Nepal, AI company in Nepal, AI consultants in Nepal, artificial intelligence Nepal, software development Nepal, AI solutions Nepal, tech company Nepal, AI services Nepal, AI startup Nepal, custom software Nepal, machine learning Nepal, data science Nepal, digital transformation Nepal, IT company Nepal" />
        <meta name="description" content="ALGENTECH is a leading software and AI company in Nepal, offering AI consulting, custom software development, and digital transformation services." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ALGENTECH",
          "url": "https://algentech.com.np/",
          "logo": "https://algentech.com.np/placeholder-logo.png",
          "description": "Turn ideas into world-class software with AI-powered development. Prototypes ready in 90 hours."
        }) }} />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="public\apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="public\favicon.ico" />
        <link rel="icon" type="image/png" href="public\android-chrome-512x512.png" /> 
        <link rel="icon" type="image/png" href="public\android-chrome-192x192.png" /> 
        
      </Head>
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
