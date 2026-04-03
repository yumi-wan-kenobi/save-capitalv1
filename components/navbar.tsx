"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Heart, Activity, TrendingUp, GraduationCap, Umbrella, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/#por-que-agente", label: "¿Por qué un Agente?" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/#testimonios", label: "Testimonios" },
]

const serviceLinks = [
  { href: "/seguro-de-vida", label: "Seguro de Vida", icon: Heart },
  { href: "/gastos-medicos-mayores", label: "Gastos Médicos Mayores", icon: Activity },
  { href: "/planes-retiro-ppr", label: "Plan de Retiro (PPR)", icon: TrendingUp },
  { href: "/ahorros-educativos", label: "Ahorros Educativos", icon: GraduationCap },
  { href: "/otros-seguros", label: "Otros Seguros", icon: Umbrella },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1e40af]/95 backdrop-blur-sm shadow-lg"
          : "bg-[#1e40af]"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-serif font-bold text-[#d4af37]">
              Save Capital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-[#d4af37] transition-colors text-sm font-medium outline-none">
                Servicios
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-gray-100 shadow-xl">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="cursor-pointer hover:bg-[#1e40af]/5 hover:text-[#1e40af]"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#d4af37] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/#contacto">
              <Button className="bg-[#d4af37] hover:bg-[#c9a030] text-[#1e40af] font-semibold px-6">
                Contactar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1e3a8a] border-[#1e3a8a] w-[300px] p-0 [&>button]:text-white/70 [&>button]:hover:text-white [&>button]:top-5 [&>button]:right-5"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-white/10">
                <span className="text-xl font-serif font-bold text-[#d4af37]">
                  Save Capital
                </span>
              </div>

              <div className="flex flex-col gap-2 px-4 py-5 overflow-y-auto">
                {/* Services Section */}
                <p className="text-white/40 text-xs uppercase tracking-widest px-2 mb-1">Servicios</p>
                {serviceLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/85 hover:bg-white/10 hover:text-[#d4af37] transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  )
                })}

                {/* Divider */}
                <div className="border-t border-white/10 my-3" />

                {/* Other Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-white/85 hover:bg-white/10 hover:text-[#d4af37] transition-all group"
                  >
                    <span className="text-base font-medium">{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-4 pb-6 mt-auto border-t border-white/10 pt-4">
                <Link href="/#contacto" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#d4af37] hover:bg-[#c9a030] text-[#1e40af] font-semibold w-full py-5 text-base">
                    Contactar
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
