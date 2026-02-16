"use server"

import { Resend } from "resend"
import { CONTACT_EMAIL, FROM_EMAIL } from "@/lib/site-config"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `Oceano Web: Nova mensagem de ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Nova mensagem de contato</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p style="margin: 8px 0;"><strong>Nome:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 8px 0;"><strong>Empresa:</strong> ${data.company || "Não informado"}</p>
          </div>
          <div style="margin-top: 20px;">
            <p style="color: #666;"><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; color: #333;">${data.message}</p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      throw new Error(result.error.message)
    }

    return result
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    throw error
  }
}
