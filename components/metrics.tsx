"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, isVisible])

  return count
}

function StatCard({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible)
  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" ref={ref} className="relative py-24 md:py-32 border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {t.metrics.subtitle}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl text-balance">
            {t.metrics.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          {t.metrics.stats.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
