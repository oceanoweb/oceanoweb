"use server"

import { Resend } from "resend"
import { z } from "zod"
import { CONTACT_EMAIL, FROM_EMAIL } from "@/lib/site-config"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Nome inválido").max(100).trim(),
  email: z.string().email("Email inválido").max(200),
  company: z.string().max(200).trim().optional(),
  message: z.string().min(10, "Mensagem muito curta").max(2000).trim(),
})

/** Escapes HTML special characters to prevent injection in the email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendContactEmail(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Dados inválidos")
  }

  const { name, email, company, message } = parsed.data

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Oceano Web: Nova mensagem de ${escapeHtml(name)}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a;">Nova mensagem de contacto</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p style="margin: 8px 0;"><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 8px 0;"><strong>Empresa:</strong> ${escapeHtml(company ?? "Não informado")}</p>
        </div>
        <div style="margin-top: 20px;">
          <p style="color: #666;"><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap; color: #333;">${escapeHtml(message)}</p>
        </div>
      </div>
    `,
  })

  if (result.error) {
    throw new Error(result.error.message)
  }

  return result
}
