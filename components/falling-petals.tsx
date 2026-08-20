"use client"

import { useEffect, useState } from "react"

type Petal = {
  left: number
  delay: number
  duration: number
  scale: number
  drift: number
  hue: number
}

export function FallingPetals({ count = 18 }: { count?: number }) {
  // Generate randomized petals only on the client to avoid SSR hydration mismatch.
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        left: (i * 100) / count + Math.random() * 4,
        delay: Math.random() * 12,
        duration: 9 + Math.random() * 9,
        scale: 0.5 + Math.random() * 0.9,
        drift: (Math.random() - 0.5) * 160,
        hue: Math.random() > 0.5 ? 0 : 1,
      })),
    )
  }, [count])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error custom property
            "--drift": `${p.drift}px`,
          }}
        >
          <svg
            width={22 * p.scale}
            height={22 * p.scale}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: 0.85 }}
          >
            <path
              d="M12 2c3.5 3 7 6 7 10a7 7 0 0 1-14 0c0-4 3.5-7 7-10z"
              fill={p.hue === 0 ? "var(--rose)" : "var(--rose-deep)"}
              opacity={p.hue === 0 ? 0.75 : 0.5}
            />
          </svg>
        </span>
      ))}
    </div>
  )
}
