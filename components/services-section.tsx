"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Seguro de Vida",
    description: "Protege a tu familia y asegura su bienestar económico ante cualquier eventualidad. Tu legado, su tranquilidad.",
    image: "/images/family-protection.jpg",
    href: "/seguro-de-vida",
  },
  {
    title: "Gastos Médicos Mayores",
    description: "Cobertura completa para ti y tu familia ante enfermedades y accidentes. Atención médica de primera sin preocupaciones.",
    image: "/images/medical-care.jpg",
    href: "/gastos-medicos-mayores",
  },
  {
    title: "Plan de Retiro (PPR)",
    description: "Construye tu futuro financiero desde hoy. Ahorro inteligente con beneficios fiscales para un retiro digno.",
    image: "/images/retirement-peace.jpg",
    href: "/planes-retiro-ppr",
  },
  {
    title: "Ahorros Educativos",
    description: "Garantiza la educación de tus hijos sin importar lo que pase. Su futuro académico está asegurado.",
    image: "/images/education-future.jpg",
    href: "/ahorros-educativos",
  },
  {
    title: "Otros Seguros",
    description: "Soluciones personalizadas: seguros de auto, hogar, viaje y más. Protección integral para cada aspecto de tu vida.",
    image: "/images/insurance-variety.jpg",
    href: "/otros-seguros",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[hsl(215,72%,20%)] mb-4">
            Mis Servicios
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones de protección financiera adaptadas a tus necesidades y las de tu familia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(40,76%,55%)] mb-3 group-hover:text-[hsl(215,72%,20%)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href={service.href}>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-[hsl(40,76%,55%)] hover:bg-[hsl(40,76%,55%)]/10 p-0 h-auto font-semibold group/btn"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
