export const LEAD_SUBMITTED_COOKIE = 'lead_magnet_submitted'
export const EXIT_DISMISSED_COOKIE = 'exit_intent_dismissed'
export const BANNER_DISMISSED_COOKIE = 'banner_dismissed'

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split(';').find((c) => c.trim().startsWith(`${name}=`))
  return match ? match.trim().slice(name.length + 1) : null
}

export function setCookie(name: string, value: string, days: number): void {
  const expires = new Date()
  expires.setDate(expires.getDate() + days)
  document.cookie = `${name}=${value}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`
}

export function markLeadSubmitted(): void {
  setCookie(LEAD_SUBMITTED_COOKIE, '1', 30)
}
