"use client"

import { UserCheck, Scale, Headphones, FileSearch, Heart } from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "Asesoría Personalizada",
    description: "No soy un call center. Te conozco, entiendo tu situación y te recomiendo exactamente lo que necesitas.",
  },
  {
    icon: Scale,
    title: "Comparativa Objetiva",
    description: "Trabajo con múltiples aseguradoras. Te presento opciones reales para que TÚ decidas lo mejor para ti.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento en Siniestros",
    description: "Cuando más lo necesitas, estoy contigo. Te guío paso a paso en el proceso de reclamación.",
  },
  {
    icon: FileSearch,
    title: "Sin Letra Pequeña",
    description: "Te explico cada detalle de tu póliza. Sin sorpresas, sin confusiones. Transparencia total.",
  },
  {
    icon: Heart,
    title: "Relación a Largo Plazo",
    description: "No busco una venta, busco tu confianza. Tu protección es mi prioridad, hoy y siempre.",
  },
]

export function WhyAgentSection() {
  return (
    <section id="por-que-agente" className="py-16 md:py-24 bg-gradient-to-b from-[#f0f4ff] to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[hsl(215,72%,20%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[hsl(40,76%,55%)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[hsl(215,72%,20%)] mb-6">
            ¿Por qué elegir un Agente de Seguros?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En la era digital, es fácil preguntarse: ¿por qué hablar con un agente?
            La respuesta es simple: los seguros no son <span className="font-semibold text-[hsl(215,72%,20%)]">PRODUCTOS</span>,
            son <span className="font-semibold text-[hsl(40,76%,55%)]">SOLUCIONES</span>.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[hsl(40,76%,55%)]/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[hsl(40,76%,55%)] to-[hsl(40,80%,70%)] rounded-xl flex items-center justify-center shadow-lg">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(215,72%,20%)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
