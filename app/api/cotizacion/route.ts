export const runtime = 'edge'

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

interface CotizacionRequest {
  serviceName: string
  formData: Record<string, string>
  fields: { name: string; label: string }[]
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { serviceName, formData, fields }: CotizacionRequest = await req.json()

    const fieldsHtml = fields
      .filter((f) => formData[f.name])
      .map(
        (f) =>
          `<tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 40%;">${f.label}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${formData[f.name]}</td>
          </tr>`
      )
      .join("")

    await resend.emails.send({
      from: "Carolina Zamora - Save Capital <cotizacion@savecapital.mx>",
      to: ["carolina@savecapital.mx"],
      replyTo: formData.email || undefined,
      subject: `Nueva solicitud de cotizacion: ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1e40af; padding: 32px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0; font-size: 24px;">Save Capital</h1>
            <p style="color: white; margin: 8px 0 0; font-size: 14px;">Nueva solicitud de cotizacion</p>
          </div>

          <div style="padding: 32px;">
            <h2 style="color: #1e40af; margin-top: 0;">${serviceName}</h2>
            <p style="color: #6b7280; margin-bottom: 24px;">
              Un cliente ha enviado una solicitud de cotizacion con los siguientes datos:
            </p>

            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <thead>
                <tr style="background: #f3f4f6;">
                  <th style="padding: 10px 12px; text-align: left; color: #374151; font-size: 13px; border-bottom: 2px solid #e5e7eb;">Campo</th>
                  <th style="padding: 10px 12px; text-align: left; color: #374151; font-size: 13px; border-bottom: 2px solid #e5e7eb;">Respuesta</th>
                </tr>
              </thead>
              <tbody>
                ${fieldsHtml}
              </tbody>
            </table>
          </div>

          <div style="background: #f9fafb; padding: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Solicitud recibida desde carolinazamora.savecapital.mx
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al enviar cotizacion:", error)
    return NextResponse.json(
      { success: false, error: "Error al enviar el formulario" },
      { status: 500 }
    )
  }
}
