import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ismael Diaz',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
//hola, soy Ismael Diaz, Desarrollador full stack, orientado a Back End, con conocimientos en base de datos SQL Y NO SQL, estoy a cargo y llevo adelante un emprendimiento familiar, actualmente estudiando nuevos framework y buscando crecer profecionalmente


// lo que me ha permitido desarrollar distintas habilidades como organización, investigación, resolucion de problemas.

// actualmente estudiando y ampliando 
// el cual me ha hecho ver el valor 
//y en esta nueva etapa buscando implementar
// mis conocimiento y formación que he adquirido.