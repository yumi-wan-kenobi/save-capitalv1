"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, MessageCircle, Send } from "lucide-react"

export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "number" | "select" | "textarea"
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  min?: number
  max?: number
}

interface QuoteFormProps {
  fields: FormField[]
  serviceName: string
  submitButtonText?: string
}

export function QuoteForm({ 
  fields, 
  serviceName, 
  submitButtonText = "Cotizar Ahora" 
}: QuoteFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^[\d\s\-+()]{10,}$/.test(phone)
  }

  const validateField = (field: FormField, value: string): string => {
    if (field.required && !value) {
      return "Este campo es requerido"
    }
    if (field.type === "email" && value && !validateEmail(value)) {
      return "Email no válido"
    }
    if (field.type === "tel" && value && !validatePhone(value)) {
      return "Teléfono no válido (mín. 10 dígitos)"
    }
    if (field.type === "number" && value) {
      const num = parseInt(value)
      if (field.min !== undefined && num < field.min) {
        return `El valor mínimo es ${field.min}`
      }
      if (field.max !== undefined && num > field.max) {
        return `El valor máximo es ${field.max}`
      }
    }
    return ""
  }

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    const field = fields.find(f => f.name === name)
    if (field) {
      const error = validateField(field, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const generateWhatsAppMessage = () => {
    let message = `Hola Carolina, me interesa cotizar ${serviceName}.\n\nMis datos:\n`
    fields.forEach(field => {
      if (formData[field.name]) {
        message += `- ${field.label}: ${formData[field.name]}\n`
      }
    })
    return encodeURIComponent(message)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    let hasErrors = false

    fields.forEach(field => {
      const error = validateField(field, formData[field.name] || "")
      if (error) {
        newErrors[field.name] = error
        hasErrors = true
      }
    })

    setErrors(newErrors)

    if (!hasErrors) {
      setIsLoading(true)
      try {
        const res = await fetch("/api/cotizacion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            serviceName,
            formData,
            fields: fields.map(f => ({ name: f.name, label: f.label })),
          }),
        })
        if (!res.ok) throw new Error("Error al enviar")
        setIsSubmitted(true)
      } catch {
        setErrors(prev => ({ ...prev, _submit: "Hubo un error al enviar. Intenta por WhatsApp." }))
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleWhatsApp = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/526647575359?text=${message}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[hsl(215,72%,20%)] mb-2">
          Solicitud Enviada
        </h3>
        <p className="text-gray-600 mb-6">
          Gracias por tu interés. Carolina se pondrá en contacto contigo pronto.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline"
            className="border-[hsl(215,72%,20%)] text-[hsl(215,72%,20%)] hover:bg-[hsl(215,72%,20%)]/5"
          >
            Enviar otra solicitud
          </Button>
          <Button 
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#22c55e] text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
      <h3 className="text-2xl font-serif font-bold text-[hsl(215,72%,20%)] mb-6 text-center">
        Solicita tu Cotización
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {fields.map((field) => (
            <div 
              key={field.name} 
              className={field.type === "textarea" ? "sm:col-span-2" : ""}
            >
              <Label 
                htmlFor={field.name} 
                className="text-gray-700 font-medium mb-1.5 block"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              
              {field.type === "select" ? (
                <Select
                  value={formData[field.name] || ""}
                  onValueChange={(value) => handleChange(field.name, value)}
                >
                  <SelectTrigger 
                    id={field.name}
                    className={`h-11 ${errors[field.name] ? "border-red-500" : "border-gray-200"}`}
                  >
                    <SelectValue placeholder={field.placeholder || "Seleccionar..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : field.type === "textarea" ? (
                <Textarea
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className={`min-h-[100px] ${errors[field.name] ? "border-red-500" : "border-gray-200"}`}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  min={field.min}
                  max={field.max}
                  className={`h-11 ${errors[field.name] ? "border-red-500" : "border-gray-200"}`}
                />
              )}
              
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {errors._submit && (
          <p className="text-red-500 text-sm text-center -mb-1">{errors._submit}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-[hsl(215,72%,20%)] hover:bg-[hsl(215,50%,30%)] text-white h-12 text-base font-semibold"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                {submitButtonText}
              </span>
            )}
          </Button>
          <Button 
            type="button"
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#22c55e] text-white h-12 text-base font-semibold"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contactar por WhatsApp
          </Button>
        </div>
      </form>
    </div>
  )
}
