"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
  currentPage: string
}

export function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1 text-white/70 hover:text-[#d4af37] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-white/50" />
        </li>
        <li>
          <span className="text-[#d4af37] font-medium">{currentPage}</span>
        </li>
      </ol>
    </nav>
  )
}
