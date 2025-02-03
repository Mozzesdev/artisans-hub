import { Button } from "@/components/ui/button"

export default function Producto({ params }: { params: { id: string } }) {
  // En una aplicación real, aquí cargarías los datos del producto basado en el ID
  const product = {
    id: params.id,
    name: "Cerámica artesanal",
    price: 50,
    description:
      "Hermosa pieza de cerámica hecha a mano por artesanos locales. Cada pieza es única y tiene su propia historia.",
    artisan: "María González",
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Aquí iría la imagen del producto */}
          <div className="bg-gray-200 h-64 w-full"></div>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-semibold">${product.price}</p>

          <p>{product.description}</p>
          <p>
            <strong>Artesano:</strong> {product.artisan}
          </p>
          <Button>Añadir al Carrito</Button>
          <Button variant="outline">Contactar Artesano</Button>
        </div>
      </div>
    </div>
  )
}

