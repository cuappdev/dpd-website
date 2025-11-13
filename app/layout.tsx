import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Introduction to Digital Product Design',
  description: 'A 9-week course introducing UI/UX and product design fundamentals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

