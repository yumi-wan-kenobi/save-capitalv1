"use client"

import { ShieldCheck, Clock, Building2 } from "lucide-react"

const insurers = [
  "GNP Seguros",
  "MetLife",
  "Allianz",
  "AXA",
  "Seguros Monterrey",
  "Mapfre",
]

export function CredibilitySection() {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa] relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#d4af37]/30 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#d4af37]/30 rounded-br-2xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1e40af] mb-4">
            Profesional Certificada y de Confianza
          </h2>
        </div>

        {/* Credibility Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* CNSF Certification */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1e40af] mb-2">
              Certificación CNSF
            </h3>
            <p className="text-gray-600 mb-4">
              Agente de Seguros autorizada por la Comisión Nacional de Seguros y Fianzas
            </p>
            <div className="inline-block bg-[#d4af37]/10 rounded-lg px-4 py-2">
              <p className="text-sm text-[#d4af37] font-semibold">
                Cédula Profesional Verificable
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#c9a030] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1e40af] mb-2">
              Experiencia Comprobada
            </h3>
            <p className="text-gray-600 mb-4">
              Más de una década asesorando a familias y empresas en la región
            </p>
            <div className="inline-block bg-[#1e40af]/10 rounded-lg px-4 py-2">
              <p className="text-3xl font-bold text-[#1e40af]">
                15+ años
              </p>
            </div>
          </div>

          {/* Insurers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/30 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1e40af] mb-2">
              Las Mejores Aseguradoras
            </h3>
            <p className="text-gray-600 mb-4">
              Trabajamos con las compañías más sólidas del mercado
            </p>
            <div className="grid grid-cols-2 gap-2">
              {insurers.map((insurer) => (
                <div
                  key={insurer}
                  className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-medium"
                >
                  {insurer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
