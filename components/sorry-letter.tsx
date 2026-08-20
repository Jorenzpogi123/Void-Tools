"use client"

import { useState } from "react"
import { Heart, Lock, LockKeyhole } from "lucide-react"

const PASSWORD = "1410"

const paragraphs = [
  "Lablab, gusto ko lang pong mag-sorry sa mga nagawa kong pagkakamali. Hindi ko na sinunod ang boundaries ko sayo na wag lumapit sa ibang babae.",
  "Sorry rin po, lablab, na hindi ko po nasabi sayo na ex ko si Zyrrle. Nag-isip po ako na pag sinabi ko ay magtatampo ka — yun ang akala ko. Pero yun pala, mas magtatampo ka pa pag hindi ko sinabi sayo. Sorry po talaga, lablab ko.",
  "Hindi naman po perpekto ang lahat ng tao, diba? Lahat po tayo ay hindi perpekto, kaya sorry po, lablab ko.",
  "Lagi mo pong tatandaan na mahal na mahal kita, at hinding-hindi kita iiwan kahit ilang taon pa yan.",
  "Labyou po, lablab ko. Mwahh²",
]

export function SorryLetter() {
  const [unlocked, setUnlocked] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value.trim() === PASSWORD) {
      setError(false)
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  if (!unlocked) {
    return (
      <div className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-16">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm animate-fade-rise flex-col items-center gap-8 rounded-2xl border border-border bg-card px-7 py-12 shadow-[0_30px_80px_-30px_rgba(120,20,40,0.5)]"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg [animation:soft-pulse_2.4s_ease-in-out_infinite]">
            <LockKeyhole className="h-7 w-7" />
          </div>

          <div className="text-center">
            <h1 className="font-script text-4xl text-primary">A letter is waiting</h1>
            <p className="mt-2 font-serif text-base text-muted-foreground text-balance">
              Enter our little secret to unlock it
            </p>
          </div>

          <div className="w-full">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="password"
                type="password"
                inputMode="numeric"
                autoComplete="off"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  if (error) setError(false)
                }}
                placeholder="••••"
                aria-invalid={error}
                className="w-full rounded-full border border-border bg-secondary/40 py-3 pl-11 pr-4 text-center font-serif text-xl tracking-[0.5em] text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            {error && (
              <p className="mt-3 text-center font-serif text-sm text-primary">
                That&apos;s not quite it, my love. Try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 font-serif text-lg text-primary-foreground shadow-lg transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Unlock
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-16">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="group flex flex-col items-center gap-8 focus:outline-none"
          aria-label="Open the letter"
        >
          <div className="relative h-52 w-80 max-w-[86vw] rounded-md bg-card shadow-[0_20px_60px_-20px_rgba(120,20,40,0.45)] transition-transform duration-500 group-hover:-translate-y-2">
            {/* envelope body */}
            <div className="absolute inset-0 overflow-hidden rounded-md border border-border">
              <div className="absolute bottom-0 left-0 h-1/2 w-full bg-secondary/60" />
              <div
                className="absolute inset-x-0 bottom-0 top-1/2 border-t border-border/60"
                style={{
                  clipPath: "polygon(0 100%, 50% 30%, 100% 100%)",
                  background: "var(--secondary)",
                }}
              />
            </div>
            {/* flap */}
            <div
              className="absolute inset-x-0 top-0 h-1/2 origin-top border border-border bg-muted transition-transform duration-500 group-hover:[transform:rotateX(18deg)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
            {/* wax seal */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg [animation:soft-pulse_2.4s_ease-in-out_infinite]">
              <Heart className="h-6 w-6 fill-current" />
            </div>
          </div>
          <span className="font-serif text-lg tracking-wide text-primary/80">
            A letter for you — tap to open
          </span>
        </button>
      ) : (
        <article className="w-full max-w-xl animate-fade-rise rounded-2xl border border-border bg-card px-7 py-10 shadow-[0_30px_80px_-30px_rgba(120,20,40,0.5)] sm:px-12 sm:py-14">
          <header className="mb-8 text-center">
            <p className="font-serif text-sm uppercase tracking-[0.35em] text-muted-foreground">
              From Jorenz, to Crizha
            </p>
            <h1 className="mt-3 font-script text-5xl leading-tight text-primary sm:text-6xl">
              I&apos;m sorry po lablab
            </h1>
            <div className="mx-auto mt-5 flex items-center justify-center gap-3 text-accent">
              <span className="h-px w-12 bg-border" />
              <Heart className="h-4 w-4 fill-current" />
              <span className="h-px w-12 bg-border" />
            </div>
          </header>

          <div className="space-y-5">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="animate-fade-rise font-serif text-xl leading-relaxed text-foreground/90"
                style={{ animationDelay: `${0.25 + i * 0.28}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <footer
            className="animate-fade-rise mt-10 text-right"
            style={{ animationDelay: `${0.25 + paragraphs.length * 0.28}s` }}
          >
            <p className="font-serif text-lg text-muted-foreground">Always yours,</p>
            <p className="font-script text-4xl text-primary">Me</p>
          </footer>
        </article>
      )}
    </div>
  )
}
