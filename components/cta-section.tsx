"use client"

import React, { useState } from "react"
import { ArrowRight, Mail, CheckCircle2, AlertCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { BrandIcon } from "@/components/brand-icon"
import { siWhatsapp } from "simple-icons/icons"
import { sendContactEmail } from "@/lib/send-email"
import { CONTACT_EMAIL, PHONE_NUMBER_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site-config"

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || undefined,
      message: formData.get("message") as string,
    }

    try {
      await sendContactEmail(data)
      setSubmitted(true)
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t.cta.subtitle}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl text-balance">
              {t.cta.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.cta.description}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label="Enviar email para Oceano Web"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                {CONTACT_EMAIL}
              </a>
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label="Ligar para Oceano Web"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                {PHONE_NUMBER_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label="Falar no WhatsApp"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BrandIcon icon={siWhatsapp} className="h-5 w-5 text-primary" />
                </div>
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                  {t.cta.successTitle}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.cta.successDescription}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t.cta.labelName}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={loading}
                      placeholder={t.cta.placeholderName}
                      className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t.cta.labelEmail}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={loading}
                      placeholder={t.cta.placeholderEmail}
                      className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    {t.cta.labelCompany} <span className="text-muted-foreground font-normal">{t.cta.labelCompanyOptional}</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    disabled={loading}
                    placeholder={t.cta.placeholderCompany}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t.cta.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={loading}
                    rows={4}
                    placeholder={t.cta.placeholderMessage}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? "Enviando..." : t.cta.submit}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
