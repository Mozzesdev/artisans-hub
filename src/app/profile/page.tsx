import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Perfil() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Mi Perfil</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-primary bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Nombre:</strong> Juan Pérez
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Email:</strong> juan@example.com
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Tipo de cuenta:</strong> Artesano
            </p>
          </CardContent>
          <CardFooter>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Editar Perfil</Button>
          </CardFooter>
        </Card>

        <Card className="border-primary bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Mis Productos</CardTitle>
            <CardDescription className="text-muted-foreground">Productos que has publicado</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Cerámica artesanal</li>
              <li>Tejido tradicional</li>
              <li>Joyería étnica</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Añadir Nuevo Producto</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border-primary bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Estadísticas de Ventas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Ventas totales:</strong> $1,500
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Productos vendidos:</strong> 25
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Valoración promedio:</strong> 4.8/5
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

