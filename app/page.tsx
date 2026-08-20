import { FallingPetals } from "@/components/falling-petals"
import { SorryLetter } from "@/components/sorry-letter"

export default function Page() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-background">
      <FallingPetals />
      <SorryLetter />
    </main>
  )
}
