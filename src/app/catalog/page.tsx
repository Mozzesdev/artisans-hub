import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Cerámica artesanal",
    price: 50,
    description: "Hermosa pieza de cerámica hecha a mano",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyYW1pY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Tejido tradicional",
    price: 75,
    description: "Tejido colorido con técnicas ancestrales",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Joyería étnica",
    price: 100,
    description: "Joyería única inspirada en diseños étnicos",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXRobmljJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Escultura de madera",
    price: 150,
    description: "Escultura detallada tallada en madera noble",
    image:
      "https://images.unsplash.com/photo-1520626956985-4899e6db52de?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Tapiz artesanal",
    price: 200,
    description: "Tapiz elaborado con técnicas tradicionales",
    image:
      "https://plus.unsplash.com/premium_photo-1725721362512-2f47d969e554?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Cerámica pintada a mano",
    price: 80,
    description: "Pieza de cerámica con diseños pintados a mano",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZCUyMHBhaW50ZWQlMjBjZXJhbWljfGVufDB8fDB8fHww",
  },
]

export default function Catalogo() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Catálogo de Productos</h1>

      {/* Categorías */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Cerámica", "Textiles", "Joyería", "Madera", "Pintura", "Otros"].map((category) => (
            <Button key={category} variant="outline" className="text-foreground hover:bg-accent/20">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Filtros */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Filtros</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="text-foreground hover:bg-accent/20">
            Precio: Bajo a Alto
          </Button>
          <Button variant="outline" className="text-foreground hover:bg-accent/20">
            Precio: Alto a Bajo
          </Button>
          <Button variant="outline" className="text-foreground hover:bg-accent/20">
            Más Recientes
          </Button>
          <Button variant="outline" className="text-foreground hover:bg-accent/20">
            Más Populares
          </Button>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-primary bg-card">
              <CardHeader>
                <div className="w-full h-48 bg-muted mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">${product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/producto/${product.id}`}>Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

