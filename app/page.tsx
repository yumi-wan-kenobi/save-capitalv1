import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { WhyAgentSection } from "@/components/why-agent-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CredibilitySection } from "@/components/credibility-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyAgentSection />
      <TestimonialsSection />
      <FaqSection />
      <CredibilitySection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
