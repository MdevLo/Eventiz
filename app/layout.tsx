import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: 
  ['latin'],
  weight: ['400', '500', '600', '700'],            
  variable: '--font-poppins',                                                  
  })                                                                                                                

export const metadata: Metadata = {
  title: 'Eventiz',
  description: "Platforme d'événement en ligne",
  icons: {
    icon: '/assets/images/eventizLogo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="fr">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
