'use server'

import { z } from 'zod'

const schema = z.object({ email: z.string().email('Email inválido.') })

// Public Brevo form endpoint — no API key required
const BREVO_FORM_ENDPOINT =
  'https://28b9c75d.sibforms.com/serve/MUIFAGy-Q2o6OcEPUgI_gWUTzRg6Fk_q1tVcCCthBcanDhBhMSbpogv2f-kYe-KF-OFA38jwj9J9Htn2mOU3c3w9vFhS4Jw9ZqN9IMM8vtKL8jiDLtrWLrveaQURrnuh4fb_Rbx7jCi8mCCIrbrb5YRp32EVIDGjtopHuR1vVJpxBdHuvI6_UeDd5lZu8olzpvPZt49p_vT-y6-IkA=='

export type BrevoFormError = 'invalid_email' | 'server_error'

export async function submitBrevoForm(formData: FormData): Promise<{ error?: BrevoFormError }> {
  const parsed = schema.safeParse({ email: formData.get('email') })

  if (!parsed.success) {
    return { error: 'invalid_email' }
  }

  const body = new URLSearchParams({
    EMAIL: parsed.data.email,
    email_address_check: '',
    locale: 'en',
  })

  try {
    const res = await fetch(BREVO_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Referer: 'https://www.oceanoweb.com',
        Origin: 'https://www.oceanoweb.com',
      },
      body: body.toString(),
      redirect: 'follow',
    })

    // 5xx = server-side Brevo error; treat everything else as success
    // (400 = duplicate subscription, still counts as OK)
    if (res.status >= 500) {
      return { error: 'server_error' }
    }
  } catch {
    return { error: 'server_error' }
  }

  return {}
}
