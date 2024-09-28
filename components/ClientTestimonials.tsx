"use client"

import Image from 'next/image'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: 'Sarah Josephson',
    role: 'Senior Developer at TechCorp',
    content: 'CursorAI has dramatically improved our team\'s productivity. The AI-powered suggestions are incredibly accurate and have significantly reduced our development time.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    content: 'As a startup, we needed a tool that could help us move fast without compromising on quality. CursorAI delivered exactly that, and more. It\'s become an indispensable part of our tech stack.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  // New testimonials
  {
    name: 'Emily Rodriguez',
    role: 'Lead UX Designer at DesignHub',
    content: 'CursorAI\'s ability to understand context and provide relevant code snippets has been a game-changer for our design-to-development workflow.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Alex Patel',
    role: 'Freelance Full-Stack Developer',
    content: 'As a freelancer, CursorAI has been invaluable. It\'s like having a knowledgeable coding partner always ready to assist, no matter the project or language.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Lisa Thompson',
    role: 'Engineering Manager at FinTech Solutions',
    content: 'CursorAI has significantly improved our code quality and consistency across the team. It\'s like having a senior developer reviewing every line of code in real-time.',
    avatar: '/placeholder.svg?height=100&width=100'
  }
]

function ClientTestimonials() {
  return (
    <section id="testimonials" className="container py-8 md:py-12 lg:py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter md:text-4xl text-center">What Our Clients Say</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default ClientTestimonials;