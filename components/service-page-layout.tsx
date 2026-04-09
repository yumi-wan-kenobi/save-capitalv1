"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroImage: string
  children: React.ReactNode
}

export function ServicePageLayout({ 
  title, 
  subtitle, 
  heroImage, 
  children 
}: ServicePageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Smaller */}
      <section className="relative pt-20 md:pt-24">
        <div className="relative h-[280px] md:h-[350px] overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,72%,20%)]/90 to-[hsl(215,72%,20%)]/70" />
          
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <Breadcrumb currentPage={title} />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-4 text-balance">
                {title}
              </h1>
              <p className="text-white/80 text-lg mt-3 max-w-xl">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {children}
      
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
