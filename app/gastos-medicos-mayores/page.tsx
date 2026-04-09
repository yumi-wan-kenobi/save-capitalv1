import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { QuoteForm, FormField } from "@/components/quote-form"
import { CheckCircle, XCircle, Clock, Shield, Heart, Stethoscope } from "lucide-react"

export const metadata: Metadata = {
  title: "Gastos Médicos Mayores | Carolina Zamora - Save Capital",
  description: "Cobertura médica completa para ti y tu familia. Planes básico, intermedio y premium. Cotiza tu seguro de gastos médicos mayores.",
}

const formFields: FormField[] = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "664-000-0000", required: true },
  { name: "edad", label: "Edad", type: "number", placeholder: "35", required: true, min: 0, max: 99 },
  {
    name: "tipoCobertura",
    label: "Tipo de cobertura",
    type: "select",
    required: true,
    options: [
      { value: "individual", label: "Individual" },
      { value: "pareja", label: "Pareja" },
      { value: "familia", label: "Familia" },
    ]
  },
  {
    name: "planPreferido",
    label: "Plan preferido",
    type: "select",
    required: true,
    options: [
      { value: "basico", label: "Plan Básico" },
      { value: "intermedio", label: "Plan Intermedio" },
      { value: "premium", label: "Plan Premium" },
    ]
  },
  { name: "numFamiliares", label: "Familiares a incluir", type: "number", placeholder: "0", min: 0, max: 10 },
  { name: "problemasSalud", label: "Problemas de salud previos", type: "textarea", placeholder: "Describe cualquier condición médica preexistente..." },
]

const coverageItems = [
  "Hospitalización y cirugía",
  "Consultas médicas con especialistas",
  "Estudios de laboratorio y gabinete",
  "Medicamentos durante hospitalización",
  "Terapias y rehabilitación",
  "Ambulancia terrestre y aérea",
  "Tratamientos de enfermedades graves",
  "Maternidad y atención al recién nacido",
]

const exclusionItems = [
  "Enfermedades preexistentes no declaradas",
  "Cirugía estética y cosmética",
  "Tratamientos experimentales",
  "Lesiones autoinfligidas",
  "Accidentes bajo influencia del alcohol",
]

const plans = [
  {
    name: "Plan Básico",
    features: [
      "Red de hospitales nacional",
      "Cobertura de emergencias",
      "Consultas con médico general",
      "Estudios básicos de laboratorio",
    ],
  },
  {
    name: "Plan Intermedio",
    features: [
      "Red de hospitales ampliada",
      "Cobertura internacional limitada",
      "Especialistas sin restricción",
      "Maternidad incluida",
      "Check-up anual",
    ],
    recommended: true,
  },
  {
    name: "Plan Premium",
    features: [
      "Libre elección de hospital",
      "Cobertura internacional completa",
      "Tratamientos de última generación",
      "Segunda opinión médica",
      "Concierge médico 24/7",
      "Dental y visión incluidos",
    ],
  },
]

const waitingPeriods = [
  { condition: "Accidentes", periodo: "Sin espera" },
  { condition: "Enfermedades comunes", periodo: "30 días" },
  { condition: "Padecimientos especiales", periodo: "6 meses" },
  { condition: "Maternidad", periodo: "10 meses" },
  { condition: "Preexistencias declaradas", periodo: "12-24 meses" },
]

export default function GastosMedicosMayoresPage() {
  return (
    <ServicePageLayout
      title="Gastos Médicos Mayores"
      subtitle="Cobertura médica completa para ti y tu familia. Atención de primera sin preocupaciones económicas."
      heroImage="/images/medical-care.jpg"
    >
      {/* Qué Cubre Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Qué Cubre */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)]">
                  ¿Qué Cubre?
                </h2>
              </div>
              <ul className="space-y-3">
                {coverageItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué NO Cubre */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)]">
                  ¿Qué NO Cubre?
                </h2>
              </div>
              <ul className="space-y-3">
                {exclusionItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 bg-amber-50 p-4 rounded-lg border border-amber-200">
                Nota: Las exclusiones pueden variar según la aseguradora y el plan seleccionado.
                Consulta los términos específicos de cada póliza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Disponibles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)] mb-4 text-center">
            Planes Disponibles
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y presupuesto
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.recommended
                    ? "bg-[hsl(215,72%,20%)] text-white ring-4 ring-[hsl(40,76%,55%)]"
                    : "bg-white border-2 border-gray-100 shadow-lg"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[hsl(40,76%,55%)] text-white text-sm font-bold px-4 py-1 rounded-full">
                      Recomendado
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-6 ${plan.recommended ? "text-white" : "text-[hsl(215,72%,20%)]"}`}>
                  {plan.name}
                </h3>

                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.recommended ? "text-[hsl(40,76%,55%)]" : "text-green-500"
                      }`} />
                      <span className={`text-sm ${plan.recommended ? "text-white/90" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Período de Espera */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Clock className="w-8 h-8 text-[hsl(215,72%,20%)]" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)]">
              Períodos de Espera
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 bg-[hsl(215,72%,20%)] text-white">
                <div className="px-6 py-4 font-semibold">Tipo de Padecimiento</div>
                <div className="px-6 py-4 font-semibold">Tiempo de Espera</div>
              </div>
              {waitingPeriods.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <div className="px-6 py-4 text-gray-800">{item.condition}</div>
                  <div className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.periodo === "Sin espera"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {item.periodo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section id="cotizar" className="py-16 md:py-20 bg-gradient-to-br from-[hsl(215,72%,20%)] to-[#0a2351]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <QuoteForm
              fields={formFields}
              serviceName="Gastos Médicos Mayores"
              submitButtonText="Cotizar Ahora"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
