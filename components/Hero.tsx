// src/components/Hero.tsx
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Revolutionize Your Workflow with AI-Powered Assistance
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Boost productivity and streamline your development process with our intelligent coding companion.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  )
}