'use client'

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthModal from "./auth-modal"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"

const Navigation: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const NavItems = () => (
    <>
      <li>
        <Link href="/catalog" className="text-foreground hover:text-muted-foreground transition-colors">
          Catálogo
        </Link>
      </li>
      <li>
        <Link href="/profile" className="text-foreground hover:text-muted-foreground transition-colors">
          Perfil
        </Link>
      </li>
      <li>
        <Link href="/suscription" className="text-foreground hover:text-muted-foreground transition-colors">
          Suscripción
        </Link>
      </li>
      <li>
        <Link href="/help" className="text-foreground hover:text-muted-foreground transition-colors">
          Ayuda
        </Link>
      </li>
      <li>
        <Link href="/info" className="text-foreground hover:text-muted-foreground transition-colors">
          Información
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
          Contacto
        </Link>
      </li>
    </>
  )

  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-foreground flex gap-2 items-center">
          ArtisansHub
          <Logo className="w-9 h-auto"/>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <NavItems />
        </ul>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <ul className="flex flex-col space-y-4 mt-8">
              <NavItems />
            </ul>
          </SheetContent>
        </Sheet>

        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90 hidden md:block"
          onClick={() => setIsAuthModalOpen(true)}
        >
          Iniciar Sesión
        </Button>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  )
}

export default Navigation

