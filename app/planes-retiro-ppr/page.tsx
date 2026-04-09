import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { QuoteForm, FormField } from "@/components/quote-form"
import { TrendingUp, Gift, Settings, PiggyBank } from "lucide-react"

export const metadata: Metadata = {
  title: "Planes de Retiro PPR | Carolina Zamora - Save Capital",
  description: "Construye tu futuro financiero con un Plan Personal de Retiro. Beneficios fiscales y rendimientos garantizados. Cotiza tu PPR hoy.",
}

const formFields: FormField[] = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "664-000-0000", required: true },
  { name: "edad", label: "Edad", type: "number", placeholder: "35", required: true, min: 18, max: 65 },
  {
    name: "ocupacion",
    label: "Ocupación",
    type: "select",
    required: true,
    options: [
      { value: "empleado", label: "Empleado" },
      { value: "independiente", label: "Independiente / Freelance" },
      { value: "profesional", label: "Profesional (Médico, Abogado, etc.)" },
      { value: "empresario", label: "Empresario" },
      { value: "otro", label: "Otro" },
    ]
  },
  {
    name: "aporteMensual",
    label: "Aporte mensual estimado",
    type: "select",
    required: true,
    options: [
      { value: "500", label: "$500 MXN" },
      { value: "1000", label: "$1,000 MXN" },
      { value: "2000", label: "$2,000 MXN" },
      { value: "5000", label: "$5,000 MXN" },
      { value: "10000", label: "$10,000 MXN o más" },
    ]
  },
  { name: "rfc", label: "RFC (opcional)", type: "text", placeholder: "XAXX010101000" },
]

const advantages = [
  {
    icon: TrendingUp,
    title: "Deducibilidad Fiscal",
    description: "Tus aportaciones son deducibles de impuestos hasta el 10% de tu ingreso anual o 5 UMAs anuales, lo que sea menor.",
  },
  {
    icon: PiggyBank,
    title: "Rendimiento Garantizado",
    description: "Tu dinero crece con rendimientos competitivos y garantizados por las aseguradoras más sólidas del mercado.",
  },
  {
    icon: Gift,
    title: "Heredable",
    description: "En caso de fallecimiento, el saldo acumulado pasa directamente a tus beneficiarios sin trámites complejos.",
  },
  {
    icon: Settings,
    title: "Flexible",
    description: "Puedes ajustar tus aportaciones según tu capacidad económica en cualquier momento.",
  },
]

const exampleData = {
  edadInicio: 35,
  anosAhorro: 25,
}

export default function PlanesRetiroPPRPage() {
  return (
    <ServicePageLayout
      title="Planes Personales de Retiro (PPR)"
      subtitle="Construye tu futuro financiero desde hoy. Ahorro inteligente con beneficios fiscales para un retiro digno."
      heroImage="/images/retirement-peace.jpg"
    >
      {/* Qué es un PPR */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)] mb-6 text-center">
              ¿Qué es un Plan Personal de Retiro?
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                Un Plan Personal de Retiro (PPR) es un instrumento de ahorro a largo plazo
                diseñado específicamente para complementar tu pensión y asegurar un retiro cómodo.
                A diferencia de las cuentas de ahorro tradicionales, los PPR ofrecen
                <strong className="text-[hsl(215,72%,20%)]"> beneficios fiscales significativos</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cada aportación que realizas puede ser deducida de tus impuestos,
                lo que significa que <strong className="text-[hsl(215,72%,20%)]">el gobierno te ayuda a ahorrar</strong>
                al reducir tu carga fiscal anual.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los PPR son ideales para personas que buscan construir un patrimonio para su retiro
                de manera disciplinada, aprovechando al máximo los incentivos fiscales que ofrece la ley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Principales */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)] mb-12 text-center">
            Ventajas Principales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-[hsl(40,76%,55%)]/20 rounded-xl flex items-center justify-center mb-4">
                  <advantage.icon className="w-7 h-7 text-[hsl(40,76%,55%)]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(215,72%,20%)] mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section id="cotizar" className="py-16 md:py-20 bg-gradient-to-br from-[hsl(215,72%,20%)] to-[#0a2351]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <QuoteForm
              fields={formFields}
              serviceName="Plan Personal de Retiro (PPR)"
              submitButtonText="Cotizar Plan"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
