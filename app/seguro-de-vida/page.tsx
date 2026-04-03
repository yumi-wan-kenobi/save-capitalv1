import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { QuoteForm, FormField } from "@/components/quote-form"
import Image from "next/image"
import { Shield, Heart, Users, Clock, CheckCircle, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro de Vida | Carolina Zamora - Save Capital",
  description: "Protege a tu familia con un seguro de vida. Planes temporales y permanentes adaptados a tus necesidades. Cotiza hoy con Carolina Zamora.",
}

const formFields: FormField[] = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "664-000-0000", required: true },
  { name: "edad", label: "Edad", type: "number", placeholder: "35", required: true, min: 18, max: 85 },
  {
    name: "cobertura",
    label: "Cobertura deseada",
    type: "select",
    required: true,
    options: [
      { value: "500k", label: "$500,000 MXN" },
      { value: "1m", label: "$1,000,000 MXN" },
      { value: "2m", label: "$2,000,000 MXN" },
      { value: "5m", label: "$5,000,000 MXN" },
    ]
  },
  {
    name: "tipoPlan",
    label: "Tipo de plan",
    type: "select",
    required: true,
    options: [
      { value: "temporal10", label: "Temporal 10 años" },
      { value: "temporal20", label: "Temporal 20 años" },
      { value: "permanente", label: "Permanente" },
    ]
  },
  {
    name: "fumador",
    label: "Fumador",
    type: "select",
    required: true,
    options: [
      { value: "no", label: "No" },
      { value: "si", label: "Sí" },
    ]
  },
]

const audienceItems = [
  { icon: Users, text: "Padres y madres de familia" },
  { icon: Heart, text: "Personas con dependientes económicos" },
  { icon: DollarSign, text: "Quienes tienen deudas o hipotecas" },
  { icon: Shield, text: "Empresarios y profesionales" },
  { icon: Clock, text: "Personas que planean su retiro" },
]

const planTypes = [
  {
    title: "Seguro Temporal",
    description: "Cobertura por un período determinado (10, 15, 20 o 30 años)",
    features: [
      "Primas más accesibles",
      "Ideal para cubrir deudas específicas",
      "Protección durante años laborales",
      "Opción de renovación al término",
    ],
  },
  {
    title: "Seguro Permanente",
    description: "Cobertura de por vida con componente de ahorro",
    features: [
      "Protección vitalicia garantizada",
      "Acumula valor en efectivo",
      "Beneficios fiscales",
      "Puede usarse como garantía",
    ],
  },
]

export default function SeguroDeVidaPage() {
  return (
    <ServicePageLayout
      title="Seguros de Vida"
      subtitle="Protege el futuro de tu familia y asegura su bienestar económico ante cualquier eventualidad."
      heroImage="/images/family-protection.jpg"
    >
      {/* Qué es Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1e40af] mb-4">
                ¿Qué es un Seguro de Vida?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un seguro de vida es un contrato que garantiza una suma de dinero a tus beneficiarios
                en caso de fallecimiento. Es la forma más efectiva de proteger económicamente a
                quienes dependen de ti.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Además de la protección por fallecimiento, muchos planes incluyen beneficios
                adicionales como cobertura por invalidez, enfermedades terminales, y componentes
                de ahorro que puedes utilizar en vida.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La tranquilidad de saber que tu familia estará protegida no tiene precio.
                Un seguro de vida te permite vivir con la certeza de que, pase lo que pase,
                los tuyos tendrán un respaldo financiero.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/family-protection.jpg"
                alt="Familia protegida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A quién le sirve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1e40af] mb-10 text-center">
            ¿A quién le sirve un Seguro de Vida?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#1e40af]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#1e40af]" />
                </div>
                <p className="text-gray-700 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Planes */}
      <section className="py-16 md:py-20 bg-[#1e40af]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-10 text-center">
            Tipos de Planes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planTypes.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1e40af]">{plan.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              serviceName="Seguro de Vida"
              submitButtonText="Cotizar Ahora"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
