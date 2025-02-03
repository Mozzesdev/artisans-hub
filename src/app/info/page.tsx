import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Info() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Sobre ArtisansHub</h1>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Nuestra Misión</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            En ArtisansHub, nuestra misión es conectar a artesanos talentosos con amantes del arte en todo el mundo.
            Buscamos preservar y promover técnicas artesanales tradicionales mientras fomentamos la innovación y la
            creatividad. Creemos en el poder del arte para unir culturas y enriquecer vidas.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Nuestra Visión</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Visualizamos un mundo donde cada pieza artesanal cuenta una historia, donde los artesanos pueden prosperar
            compartiendo su arte, y donde los consumidores pueden acceder fácilmente a productos únicos y
            significativos. Aspiramos a ser la plataforma líder que celebra la diversidad cultural a través de la
            artesanía.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Nuestros Valores</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Autenticidad: Valoramos la originalidad y la expresión genuina en cada pieza artesanal.</li>
            <li>
              Sostenibilidad: Promovemos prácticas artesanales que respetan el medio ambiente y las comunidades locales.
            </li>
            <li>Innovación: Fomentamos la fusión de técnicas tradicionales con enfoques modernos.</li>
            <li>Comunidad: Construimos una red global de apoyo para artesanos y amantes del arte.</li>
            <li>Calidad: Nos comprometemos con la excelencia en cada aspecto de nuestro servicio y productos.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Nuestro Impacto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Desde nuestra fundación, hemos ayudado a más de 10,000 artesanos a alcanzar un público global, preservando
            técnicas ancestrales y mejorando la vida de comunidades artesanales en todo el mundo. Nuestro compromiso con
            el comercio justo y la sostenibilidad ha resultado en un aumento del 30% en los ingresos de los artesanos y
            la preservación de más de 100 técnicas artesanales en peligro de extinción.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

