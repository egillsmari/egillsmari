import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Egill Smári Portfolio',
  description: 'Software developer portfolio for Egill Smári Snorrason',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
