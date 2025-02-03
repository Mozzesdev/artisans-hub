import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary mt-auto">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">ArtisansHub</h3>
          <p className="text-muted-foreground">Conectando artesanos y amantes del arte en todo el mundo.</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/catalogo" className="text-muted-foreground hover:text-foreground transition-colors">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/artesanos" className="text-muted-foreground hover:text-foreground transition-colors">
                Artesanos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/eventos" className="text-muted-foreground hover:text-foreground transition-colors">
                Eventos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4 text-foreground">Soporte</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/ayuda" className="text-muted-foreground hover:text-foreground transition-colors">
                Centro de Ayuda
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/politica-privacidad"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="text-muted-foreground hover:text-foreground transition-colors">
                Términos de Servicio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4 text-foreground">Síguenos</h4>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-muted py-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2023 ArtisansHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

