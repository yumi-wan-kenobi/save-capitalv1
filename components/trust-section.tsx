"use client"

import { ShieldCheck, Users, Clock, Building2 } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Certificada CNSF",
    description: "Acreditación oficial de la Comisión Nacional de Seguros y Fianzas",
  },
  {
    icon: Users,
    title: "Miles de clientes",
    description: "Familias y empresas que confían en nuestra asesoría profesional",
  },
  {
    icon: Clock,
    title: "Más de 15 años",
    description: "De experiencia protegiendo el patrimonio de nuestros clientes",
  },
  {
    icon: Building2,
    title: "Las mejores aseguradoras",
    description: "Trabajamos con las compañías más sólidas del mercado mexicano",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa] relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#d4af37]/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#d4af37]/20 rounded-br-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#1e40af]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1e40af] transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#1e40af] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e40af] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
