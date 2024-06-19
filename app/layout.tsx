import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const font = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happyuniv',
  description: 'Happyuniv Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
