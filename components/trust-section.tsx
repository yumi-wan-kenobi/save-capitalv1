"use client"

import { ShieldCheck, Video, Building2, HeartHandshake } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Certificada CNSF",
    description: "Cédula con validez oficial ante la Comisión Nacional de Seguros y Fianzas",
  },
  {
    icon: Video,
    title: "Asesorías Online",
    description: "Recibe tu asesoría desde donde estés, vía Meet o Zoom",
  },
  {
    icon: Building2,
    title: "2 Mejores Aseguradoras",
    description: "Insignia Life y Mapfre",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento Real",
    description: "Estamos contigo no solo al contratar, sino a lo largo de toda la vida de tu seguro",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(210,33%,98%)] relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[hsl(40,76%,55%)]/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[hsl(40,76%,55%)]/20 rounded-br-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[hsl(40,76%,55%)]/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[hsl(215,72%,20%)]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[hsl(215,72%,20%)] transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[hsl(215,72%,20%)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(215,72%,20%)] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
