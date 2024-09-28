import Image from 'next/image'
import Link from 'next/link'

// src/components/AboutUs.tsx
export function AboutUs() {
    return (
      <section id="about" className="container py-8 md:py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h2>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate developers and AI enthusiasts, dedicated to revolutionizing the coding experience. 
              Our mission is to empower developers with cutting-edge AI tools, built on modern technologies like Next.js and TypeScript, 
              to enhance productivity and creativity in software development.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/team" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                Meet Our Team
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/team-photo.jpg" alt="Our Team" width={300} height={200} className="rounded-lg" />
            <Image src="/images/office.jpg" alt="Our Office" width={300} height={200} className="rounded-lg" />
            <Image src="/images/coding.jpg" alt="Coding" width={300} height={200} className="rounded-lg" />
            <Image src="/images/ai-tools.jpg" alt="AI Tools" width={300} height={200} className="rounded-lg" />
          </div>
        </div>
      </section>
    )
  }