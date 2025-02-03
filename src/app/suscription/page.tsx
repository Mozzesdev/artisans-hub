import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Básico",
    price: 9.99,
    features: ["Acceso a catálogo básico", "Soporte por email", "Publicación de hasta 5 productos"],
  },
  {
    name: "Pro",
    price: 19.99,
    features: [
      "Acceso a catálogo completo",
      "Soporte prioritario",
      "Publicación de hasta 20 productos",
      "Estadísticas básicas",
    ],
  },
  {
    name: "Premium",
    price: 29.99,
    features: [
      "Todo lo de Pro",
      "Publicación ilimitada de productos",
      "Acceso a workshops exclusivos",
      "Promoción destacada",
      "Estadísticas avanzadas",
    ],
  },
]

export default function Suscripcion() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Planes de Suscripción</h1>
      <p className="text-muted-foreground">
        Elige el plan que mejor se adapte a tus necesidades como artesano o comprador.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="border-primary bg-card flex flex-col">
            <CardHeader>
              <CardTitle className="text-foreground">{plan.name}</CardTitle>
              <CardDescription className="text-2xl font-bold text-accent-foreground">${plan.price}/mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Suscribirse</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="border-primary bg-card mt-8">
        <CardHeader>
          <CardTitle className="text-foreground">¿Por qué suscribirse?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Al suscribirte a ArtisansHub, obtienes acceso a una comunidad vibrante de artesanos y amantes del arte.
            Nuestros planes están diseñados para ayudarte a crecer, ya sea que estés comenzando tu viaje artesanal o
            buscando expandir tu negocio establecido.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

