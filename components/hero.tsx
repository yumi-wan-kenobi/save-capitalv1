"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1e40af] via-[#1e40af] to-[#1e3a8a] pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8 animate-fade-in-up">
            <Badge className="bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/30 hover:bg-[#d4af37]/30 px-4 py-1.5 text-sm font-medium">
              Agente Certificado CNSF
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
              Protegemos lo que{" "}
              <span className="text-[#d4af37]">más te importa</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Asesoría profesional en seguros de vida, gastos médicos y planes de ahorro.
              Más de 15 años de experiencia en Tijuana y toda la región.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 leading-relaxed">
                <span className="font-semibold text-[#d4af37]">Lic. Carolina Zamora</span>
                {" "}Especialista en seguros personales y protección financiera.
                Trabajo con las mejores aseguradoras del país para encontrar la solución
                que se adapte a TUS necesidades, no a mis comisiones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://wa.me/526647575359" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-[#d4af37] hover:bg-[#c9a030] text-[#1e40af] font-semibold px-8 py-6 text-base w-full sm:w-auto gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Habla conmigo por WhatsApp
                </Button>
              </Link>
              <Link href="#servicios">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-6 text-base w-full sm:w-auto bg-transparent"
                >
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-4 border-[#d4af37]/30" />
              <div className="absolute -inset-8 rounded-full border-2 border-[#d4af37]/15" />
              
              {/* Main Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-2xl">
                <Image
                  src="/images/carolina-hero.jpg"
                  alt="Carolina Zamora - Agente de Seguros"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badges */}
              <div className="absolute -bottom-2 -left-4 md:bottom-4 md:-left-8 bg-white rounded-xl p-3 md:p-4 shadow-xl animate-fade-in animation-delay-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#1e40af]" />
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-[#1e40af]">Certificada CNSF</p>
                    <p className="text-xs text-gray-500">Comisión Nacional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-4 md:top-8 md:-right-8 bg-white rounded-xl p-3 md:p-4 shadow-xl animate-fade-in animation-delay-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-[#1e40af]">15+ años</p>
                    <p className="text-xs text-gray-500">de experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
        </svg>
      </div>
    </section>
  )
}
