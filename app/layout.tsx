import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrew Truex - Links',
  description: 'Web developer focused on unique web experiences and products, inspired by culture, film, and innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
