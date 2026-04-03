import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { QuoteForm, FormField } from "@/components/quote-form"
import { GraduationCap, TrendingUp, Shield, Clock, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Ahorros Educativos | Carolina Zamora - Save Capital",
  description: "Garantiza la educación de tus hijos con un plan de ahorro educativo. Planes para primaria, preparatoria y licenciatura.",
}

const formFields: FormField[] = [
  { name: "nombrePadre", label: "Nombre del padre/madre", type: "text", placeholder: "Tu nombre", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "664-000-0000", required: true },
  { name: "nombreHijo", label: "Nombre del hijo(a)", type: "text", placeholder: "Nombre del beneficiario", required: true },
  { name: "edadHijo", label: "Edad del hijo(a)", type: "number", placeholder: "5", required: true, min: 0, max: 17 },
  {
    name: "aporteMensual",
    label: "Aporte mensual deseado",
    type: "select",
    required: true,
    options: [
      { value: "300", label: "$300 MXN" },
      { value: "500", label: "$500 MXN" },
      { value: "800", label: "$800 MXN" },
      { value: "1000", label: "$1,000 MXN" },
      { value: "otro", label: "Otro monto" },
    ]
  },
  {
    name: "planPreferido",
    label: "Plan preferido",
    type: "select",
    required: true,
    options: [
      { value: "primaria", label: "Primaria" },
      { value: "preparatoria", label: "Preparatoria" },
      { value: "licenciatura", label: "Licenciatura" },
    ]
  },
]

const stats = [
  { value: "65%", label: "De familias no pueden pagar universidad privada" },
  { value: "8%", label: "Incremento anual de colegiaturas" },
  { value: "12 años", label: "Tiempo promedio para ahorrar" },
]

const features = [
  {
    icon: Shield,
    title: "Protección garantizada",
    description: "Si algo te pasara, el plan continúa y tu hijo recibe la educación prometida.",
  },
  {
    icon: TrendingUp,
    title: "Rendimientos competitivos",
    description: "Tu dinero crece por encima de la inflación, protegiendo tu poder adquisitivo.",
  },
  {
    icon: Clock,
    title: "Disciplina de ahorro",
    description: "Aportaciones automáticas que te ayudan a cumplir tu meta sin esfuerzo.",
  },
  {
    icon: Award,
    title: "Beneficios adicionales",
    description: "Bonos por puntualidad, becas por excelencia académica y más.",
  },
]

const educationPlans = [
  {
    nivel: "Primaria",
    edadInicio: "0-5 años",
    duracion: "6-12 años de ahorro",
    descripcion: "Ideal para cubrir los primeros años de educación formal.",
  },
  {
    nivel: "Preparatoria",
    edadInicio: "0-10 años",
    duracion: "5-15 años de ahorro",
    descripcion: "Cubre preparatoria en escuelas privadas de calidad.",
  },
  {
    nivel: "Licenciatura",
    edadInicio: "0-12 años",
    duracion: "6-18 años de ahorro",
    descripcion: "Plan completo para universidades privadas de prestigio.",
  },
]

export default function AhorrosEducativosPage() {
  return (
    <ServicePageLayout
      title="Ahorros Educativos"
      subtitle="Garantiza la educación de tus hijos sin importar lo que pase. Su futuro académico está asegurado."
      heroImage="/images/education-future.jpg"
    >
      {/* Por qué es importante */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1e40af] mb-4 text-center">
            ¿Por qué es importante ahorrar para educación?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            La educación es la mejor herencia que puedes dejar a tus hijos.
            Estos datos muestran la realidad de los costos educativos en México.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características del Plan */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1e40af] mb-12 text-center">
            Características del Plan
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#1e40af]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-[#1e40af]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e40af] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Disponibles */}
      <section className="py-16 md:py-20 bg-[#1e40af]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 text-center">
            Planes Disponibles
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Elige el nivel educativo que deseas asegurar para tu hijo
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {educationPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af]">{plan.nivel}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Edad de inicio:</span>
                    <span className="font-medium text-gray-800">{plan.edadInicio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duración:</span>
                    <span className="font-medium text-gray-800">{plan.duracion}</span>
                  </div>
                </div>

                <p className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm">
                  {plan.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section id="cotizar" className="py-16 md:py-20 bg-gradient-to-br from-[#1e40af] to-[#0a2351]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <QuoteForm
              fields={formFields}
              serviceName="Ahorro Educativo"
              submitButtonText="Cotizar Plan"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
