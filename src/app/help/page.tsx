import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "¿Cómo puedo publicar un producto?",
    answer:
      "Para publicar un producto, debes tener una cuenta de artesano. Ve a tu perfil y haz clic en 'Añadir Nuevo Producto'. Completa el formulario con los detalles de tu producto y sube algunas fotos de alta calidad. Una vez enviado, nuestro equipo revisará tu publicación y la aprobará en un plazo de 24-48 horas.",
  },
  {
    question: "¿Cómo contacto a un artesano?",
    answer:
      "Puedes contactar a un artesano a través de la página de su producto. Busca el botón 'Contactar Artesano' y podrás enviar un mensaje directo. Recuerda ser respetuoso y claro en tu comunicación.",
  },
  {
    question: "¿Cómo cambio mi plan de suscripción?",
    answer:
      "Para cambiar tu plan de suscripción, ve a la página de 'Mi Cuenta' y selecciona 'Gestionar Suscripción'. Allí podrás ver las opciones disponibles y seleccionar el nuevo plan al que deseas cambiar. Los cambios se aplicarán al inicio del siguiente ciclo de facturación.",
  },
  {
    question: "¿Cuáles son las políticas de devolución?",
    answer:
      "Nuestras políticas de devolución varían según el artesano. En general, aceptamos devoluciones dentro de los 14 días posteriores a la recepción del producto si este no cumple con la descripción o está dañado. Consulta la política específica en la página de cada producto.",
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento. Puedes usar este número en la sección 'Rastrear Pedido' de nuestra página o directamente en el sitio web del servicio de envío utilizado.",
  },
]

export default function Ayuda() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Centro de Ayuda</h1>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Preguntas Frecuentes</CardTitle>
          <CardDescription className="text-muted-foreground">
            Encuentra respuestas rápidas a las preguntas más comunes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">¿Necesitas más ayuda?</CardTitle>
          <CardDescription className="text-muted-foreground">Estamos aquí para asistirte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Si no has encontrado la respuesta que buscas, nuestro equipo de soporte estará encantado de ayudarte.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Contactar Soporte</Button>
        </CardContent>
      </Card>
    </div>
  )
}

