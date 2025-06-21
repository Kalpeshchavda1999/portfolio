import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kalpesh Chavda - Software Engineer Portfolio",
  description:
    "Professional portfolio of Kalpesh Chavda, a Fullstack Developer with strong experience in React, Laravel, Node.js, and AWS services. Proven track record in building scalable web applications.",
  keywords: "software engineer, fullstack developer, Laravel, React.js, Node.js, AWS, web development, portfolio",
  authors: [{ name: "Kalpesh Chavda" }],
  openGraph: {
    title: "Kalpesh Chavda - Software Engineer Portfolio",
    description: "Professional portfolio showcasing fullstack development expertise with React, Laravel, and AWS",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
