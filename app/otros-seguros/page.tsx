import { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { QuoteForm, FormField } from "@/components/quote-form"
import { Car, Home, Plane, Building2, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Otros Seguros | Carolina Zamora - Save Capital",
  description: "Seguros de auto, hogar, viajes y empresariales. Protección integral para cada aspecto de tu vida. Cotiza con Carolina Zamora.",
}

const formFields: FormField[] = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "tu@email.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "664-000-0000", required: true },
  {
    name: "tipoSeguro",
    label: "Tipo de seguro de interés",
    type: "select",
    required: true,
    options: [
      { value: "auto", label: "Seguro de Auto" },
      { value: "hogar", label: "Seguro de Hogar" },
      { value: "viajes", label: "Seguro de Viajes" },
      { value: "empresarial", label: "Seguro Empresarial" },
      { value: "otro", label: "Otro tipo de seguro" },
    ]
  },
  { name: "descripcion", label: "Descripción de tu necesidad", type: "textarea", placeholder: "Describe lo que necesitas proteger y cualquier detalle relevante...", required: true },
]

const insuranceTypes = [
  {
    icon: Car,
    title: "Seguro de Auto",
    description: "Protege tu vehículo contra accidentes, robo y daños a terceros.",
    features: [
      "Cobertura amplia o limitada",
      "Asistencia vial 24/7",
      "Auto sustituto",
      "Daños a terceros",
      "Robo total y parcial",
      "Gastos médicos ocupantes",
    ],
  },
  {
    icon: Home,
    title: "Seguro de Hogar",
    description: "Protección integral para tu casa y sus contenidos.",
    features: [
      "Incendio y explosión",
      "Fenómenos naturales",
      "Robo con violencia",
      "Responsabilidad civil",
      "Contenidos del hogar",
      "Cristales y vidrios",
    ],
  },
  {
    icon: Plane,
    title: "Seguro de Viajes",
    description: "Viaja tranquilo con cobertura médica internacional.",
    features: [
      "Gastos médicos internacionales",
      "Cancelación de viaje",
      "Pérdida de equipaje",
      "Repatriación",
      "Asistencia legal",
      "COVID-19 incluido",
    ],
  },
  {
    icon: Building2,
    title: "Seguros Empresariales",
    description: "Protege tu negocio, empleados y patrimonio empresarial.",
    features: [
      "Seguro de grupo para empleados",
      "Responsabilidad civil empresarial",
      "Daños a inmuebles",
      "Equipo y maquinaria",
      "Interrupción de negocio",
      "Seguro hombre clave",
    ],
  },
]

export default function OtrosSegurosPage() {
  return (
    <ServicePageLayout
      title="Otros Seguros"
      subtitle="Soluciones personalizadas de protección para cada aspecto de tu vida y negocio."
      heroImage="/images/insurance-variety.jpg"
    >
      {/* Seguros Disponibles */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)] mb-4 text-center">
            Seguros Disponibles
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Encuentra la protección adecuada para cada área de tu vida
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {insuranceTypes.map((insurance, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[hsl(215,72%,20%)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <insurance.icon className="w-7 h-7 text-[hsl(215,72%,20%)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(215,72%,20%)]">{insurance.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{insurance.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {insurance.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Más Información */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(215,72%,20%)] mb-12 text-center">
            Más Información
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Seguro de Auto */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[hsl(40,76%,55%)]" />
                <h3 className="text-xl font-bold text-[hsl(215,72%,20%)]">Seguro de Auto</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                El seguro de auto es obligatorio en México y te protege ante accidentes de tránsito,
                robo y daños a terceros. Ofrezco planes de cobertura amplia que incluyen asistencia
                vial las 24 horas, auto sustituto mientras tu vehículo está en reparación, y cobertura
                de gastos médicos para ti y tus pasajeros. Trabajo con las mejores aseguradoras
                para ofrecerte las primas más competitivas del mercado.
              </p>
            </div>

            {/* Seguro de Hogar */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-[hsl(40,76%,55%)]" />
                <h3 className="text-xl font-bold text-[hsl(215,72%,20%)]">Seguro de Hogar</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tu hogar es probablemente tu mayor inversión. El seguro de hogar protege tanto la
                estructura de tu casa como sus contenidos contra incendios, robos, fenómenos naturales
                y daños por agua. Además incluye responsabilidad civil en caso de que alguien se
                lesione en tu propiedad. Los planes pueden personalizarse para incluir objetos de
                valor específico como joyas, obras de arte y equipos electrónicos.
              </p>
            </div>

            {/* Seguro de Viajes */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-[hsl(40,76%,55%)]" />
                <h3 className="text-xl font-bold text-[hsl(215,72%,20%)]">Seguro de Viajes</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Viajar sin seguro puede resultar extremadamente costoso en caso de una emergencia
                médica en el extranjero. Los seguros de viaje que ofrezco incluyen cobertura médica
                internacional, cancelación de viaje, pérdida de equipaje y asistencia las 24 horas
                en tu idioma. Planes disponibles para viajes individuales, anuales multiviaje,
                y cobertura familiar. Todos los planes incluyen cobertura por COVID-19.
              </p>
            </div>

            {/* Seguros Empresariales */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-[hsl(40,76%,55%)]" />
                <h3 className="text-xl font-bold text-[hsl(215,72%,20%)]">Seguros Empresariales</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Protege tu negocio con soluciones integrales de seguros empresariales. Ofrezco
                seguros de grupo para empleados (vida y gastos médicos), responsabilidad civil
                empresarial, cobertura de inmuebles y equipo, e interrupción de negocio. También
                cuento con seguros de hombre clave para proteger a la empresa ante la pérdida
                de ejecutivos esenciales. Cada plan se diseñará de acuerdo a las necesidades
                específicas de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="cotizar" className="py-16 md:py-20 bg-gradient-to-br from-[hsl(215,72%,20%)] to-[#0a2351]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <QuoteForm
              fields={formFields}
              serviceName="Seguro"
              submitButtonText="Enviar Consulta"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
