import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contacto() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Contáctanos</h1>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Envíanos un mensaje</CardTitle>
          <CardDescription className="text-muted-foreground">
            Estamos aquí para ayudarte. Completa el formulario y te responderemos lo antes posible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                Nombre
              </label>
              <Input id="name" placeholder="Tu nombre" className="bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" className="bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                Asunto
              </label>
              <Input id="subject" placeholder="Asunto de tu mensaje" className="bg-background text-foreground" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                Mensaje
              </label>
              <Textarea id="message" placeholder="Tu mensaje" className="bg-background text-foreground" rows={5} />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Enviar Mensaje
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Email:</strong> info@artisanshub.com
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Teléfono:</strong> +1 (555) 123-4567
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Dirección:</strong> 123 Artisan Street, Craft City, AC 12345
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 5:00 PM
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

