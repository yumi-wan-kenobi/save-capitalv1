"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María Elena Rodríguez",
    location: "Cliente online",
    type: "Seguro de Vida",
    quote: "Carolina me ayudó a entender la importancia de proteger a mi familia. Su asesoría fue clara y sin presiones. Hoy tengo tranquilidad sabiendo que mis hijos están respaldados.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    location: "Cliente online",
    type: "Gastos Médicos",
    quote: "Cuando tuve mi cirugía, Carolina estuvo conmigo en todo el proceso. La aseguradora cubrió todo sin problemas gracias a que ella me asesoró correctamente desde el inicio.",
    rating: 5,
  },
  {
    name: "Ana Patricia Mendoza",
    location: "Cliente online",
    type: "Plan de Retiro",
    quote: "Llevaba años pensando en mi retiro pero no sabía cómo empezar. Carolina me diseñó un plan que se ajusta a mi presupuesto y me da beneficios fiscales. Excelente servicio.",
    rating: 5,
  },
  {
    name: "Carlos y Lucía Martínez",
    location: "Cliente online",
    type: "Seguro Educativo",
    quote: "Como padres, queríamos asegurar la educación de nuestros hijos. Carolina nos mostró opciones que no conocíamos y ahora tenemos la certeza de que podrán estudiar lo que quieran.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-br from-[hsl(215,72%,20%)] to-[hsl(215,50%,30%)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Quote className="w-32 h-32 text-white rotate-180" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-white/70 text-lg">
            Historias reales de familias que han confiado en nosotros
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col items-center text-center">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(40,76%,55%)] to-[hsl(40,80%,70%)] flex items-center justify-center mb-6 border-4 border-[hsl(40,76%,55%)]/30">
                <span className="text-2xl font-bold text-white">
                  {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(40,76%,55%)] text-[hsl(40,76%,55%)]" />
                ))}
              </div>

              {/* Type Badge */}
              <span className="inline-block bg-[hsl(40,76%,55%)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                {testimonials[currentIndex].type}
              </span>

              {/* Quote */}
              <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {`"${testimonials[currentIndex].quote}"`}
              </blockquote>

              {/* Name and Location */}
              <div>
                <p className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-white/60">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[hsl(40,76%,55%)] text-white border border-white/20 hover:border-[hsl(40,76%,55%)]"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[hsl(40,76%,55%)] w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[hsl(40,76%,55%)] text-white border border-white/20 hover:border-[hsl(40,76%,55%)]"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
