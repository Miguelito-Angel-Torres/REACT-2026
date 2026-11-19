import Link from "next/link"
import "./global.css"
import { Metadata } from "next"

/*export const metadata = {
    title:"Global",
    description:"Global"
} */
export const metadata: Metadata = {
  title: {
    default: "Aprendiendo Next.js",
    template: "%s - Aprendiendo Next.js",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
          <header>
              <h2>Cabecera de la App</h2>
              <nav>
                <Link href="/">Home</Link>
                -
                <Link href="/acerca">Acerca</Link>
                -
                <Link href="/contacto">Contacto</Link>
                -
                <Link href="/productos">Productos</Link>
                -
                <Link href="/login">Login</Link>
                -
                <Link href="/registro">Registro</Link>
                -
                <Link href="/password">Recuperar Password</Link>
                -
                <Link href="/dashboard">Dashboard</Link>
              </nav>
            
          </header>
          <main>
            {children}
          </main>
          <footer>Pie de la App</footer>
      </body>
    </html>
  )
}