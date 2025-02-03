"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const sliderImages: string[] = [
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Product {
  name: string;
  price: number;
  artisan: string;
  image: string;
}

interface Testimonial {
  name: string;
  comment: string;
  avatar: string;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      icon: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Productos Únicos",
      description: "Cada pieza cuenta una historia y es creada con pasión",
    },
    {
      icon: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Comunidad Vibrante",
      description:
        "Conéctate con artesanos y amantes del arte de todo el mundo",
    },
    {
      icon: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Compra Segura",
      description:
        "Proceso de compra fácil y seguro, con garantía de satisfacción",
    },
  ];

  const products: Product[] = [
    {
      name: "Jarrón de cerámica azul",
      price: 89.99,
      artisan: "María González",
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chal tejido a mano",
      price: 129.99,
      artisan: "Laura Rodríguez",
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Collar de plata artesanal",
      price: 159.99,
      artisan: "Carlos Mendoza",
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Ana García",
      comment:
        "Encontré piezas únicas que no podría haber encontrado en ningún otro lugar. ¡Increíble selección!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pedro Martínez",
      comment:
        "La calidad de las artesanías es excepcional. Cada pieza que he comprado es un tesoro.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section with Slider */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="relative z-10 text-center space-y-6 px-3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Descubre el Arte de la Artesanía
          </h1>
          <p className="text-xl mb-8 text-black">
            Conectando creadores y amantes del arte en todo el mundo
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/catalogo">
              Explorar Catálogo <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          ¿Por qué elegir ArtisansHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-primary bg-card">
              <CardHeader>
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-12 h-12 mx-auto rounded-full object-cover"
                />
                <CardTitle className="text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-primary bg-card">
                <CardHeader>
                  <div className="w-full h-48 bg-muted mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-foreground">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    por {product.artisan}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">
                    ${product.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href={`/producto/${index + 1}`}>Ver Detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for Artisans */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          ¿Eres un Artesano Talentoso?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Únete a nuestra comunidad y lleva tus creaciones a un público global
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/registro">
            Comienza a Vender <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-accent bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <CardTitle className="text-foreground">
                    {testimonial.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{`"${testimonial.comment}"`}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
