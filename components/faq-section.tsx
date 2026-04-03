"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta una consulta conmigo?",
    answer: "La consulta inicial es completamente GRATUITA y sin compromiso. Mi objetivo es conocer tu situación y orientarte sobre las mejores opciones de protección para ti y tu familia.",
  },
  {
    question: "¿Cuánto tiempo tarda contratar un seguro?",
    answer: "El proceso es rápido. Una vez que defines el plan ideal, la contratación puede completarse en 24-48 horas. Solo necesitas algunos documentos básicos y responder un cuestionario de salud en algunos casos.",
  },
  {
    question: "¿Puedo cambiar de seguro después de contratarlo?",
    answer: "Sí, puedes hacer cambios en tu póliza o incluso cambiar de aseguradora. Te asesoro sobre el mejor momento para hacerlo y cómo evitar períodos sin cobertura.",
  },
  {
    question: "¿Qué documentos necesito para solicitar un seguro?",
    answer: "Generalmente necesitas: identificación oficial (INE/pasaporte), comprobante de domicilio, CURP y en algunos casos, estudios médicos. Te guío en cada paso del proceso.",
  },
  {
    question: "¿Hay límite de edad para asegurarse?",
    answer: "Depende del tipo de seguro. Para gastos médicos, generalmente hasta 64 años. Para seguros de vida, puede variar. Existen opciones para diferentes edades; te ayudo a encontrar la mejor para ti.",
  },
  {
    question: "¿Qué hago si tengo una emergencia médica?",
    answer: "Primero, atiende la emergencia. Luego contáctame de inmediato. Te guío paso a paso: qué hospital elegir, cómo notificar a la aseguradora y qué documentos reunir. Estoy disponible en WhatsApp.",
  },
  {
    question: "¿Ofrecen seguros para empresas?",
    answer: "Sí, ofrezco seguros de grupo para empresas: gastos médicos, vida y ahorro para empleados. Son una excelente prestación para tu equipo y tienen beneficios fiscales para tu negocio.",
  },
  {
    question: "¿Puedo renovar mi póliza contigo?",
    answer: "Por supuesto. Te contacto antes del vencimiento para revisar tu póliza, actualizar coberturas si es necesario y asegurar que sigas protegido sin interrupciones.",
  },
  {
    question: "¿Cómo sé que puedo confiar en ti?",
    answer: "Soy agente certificada por la CNSF (Comisión Nacional de Seguros y Fianzas). Tengo más de 15 años de experiencia y puedes verificar mi registro. Además, trabajo con las aseguradoras más sólidas del país.",
  },
  {
    question: "¿Puedes asesorarme aunque no contrate?",
    answer: "Absolutamente. Mi trabajo es orientarte para que tomes la mejor decisión. Si después de conocer las opciones decides que no es el momento, lo respeto completamente. Sin presiones, nunca.",
  },
]

export function FaqSection() {
  return (
    <section id="preguntas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1e40af] mb-4">
            Dudas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg">
            Respuestas claras a las preguntas más comunes sobre seguros
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#fafafa] rounded-xl border border-gray-100 px-6 data-[state=open]:border-[#d4af37]/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left text-[#1e40af] font-semibold hover:text-[#d4af37] py-5 [&[data-state=open]>svg]:text-[#d4af37]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
