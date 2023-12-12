import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RVA Music Calendar',
  description: 'A calendar of live music events in Richmond, VA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
