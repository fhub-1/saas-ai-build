// src/components/ServicesOverview.tsx
import { Code, Zap, Sparkles, Brain, Shield, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Intelligent Code Completion',
    description: 'AI-powered suggestions to write code faster and with fewer errors.'
  },
  {
    icon: Zap,
    title: 'Automated Refactoring',
    description: 'Instantly improve your code quality with smart refactoring suggestions.'
  },
  {
    icon: Sparkles,
    title: 'Natural Language to Code',
    description: 'Transform your ideas into code snippets using plain English.'
  },
  {
    icon: Brain,
    title: 'AI-Assisted Problem Solving',
    description: 'Get intelligent solutions to complex coding challenges.'
  },
  {
    icon: Shield,
    title: 'Code Security Analysis',
    description: 'Identify and fix potential security vulnerabilities in your code.'
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Boost your code efficiency with AI-driven performance tips.'
  }
]

export function ServicesOverview() {
  return (
    <section id="services" className="container py-8 md:py-12 lg:py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center md:text-4xl lg:text-5xl">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:border-primary hover:-translate-y-1"
          >
            <service.icon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}