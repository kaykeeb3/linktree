import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Construindo meu linktree com NEXT JS. ',
  description: 'Contruindo o meu linktree',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900">
        {children}
      </body>
    </html>
  )
}

