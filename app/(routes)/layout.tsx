import '../_styles/global.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Social Media',
  description: 'Hobby project created by @PlabanKr',
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
