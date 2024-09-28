"use client"

// src/components/CallToAction.tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="w-full max-w-4xl mx-auto mb-10">
      <CardHeader>
        <CardTitle className={`text-3xl font-bold tracking-tighter md:text-4xl text-center transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          Ready to Supercharge Your Development?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 text-center">
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Join thousands of developers who are already benefiting from AI-powered coding assistance. 
          Try CursorAI today and experience the future of software development.
        </p>
        <Button 
          size="lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Get Started Now
        </Button>
      </CardContent>
    </Card>
  )
}