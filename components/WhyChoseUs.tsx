import { Shield, Zap, Users, Code, Globe, Lock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Shield,
    title: 'Advanced AI Integration',
    description: 'Leverage the power of GPT-4 for unparalleled code assistance and generation.'
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Performance',
    description: 'Experience seamless coding with our optimized, low-latency platform.'
  },
  {
    icon: Users,
    title: 'Collaborative Features',
    description: 'Enhance team productivity with built-in collaboration tools and shared workspaces.'
  },
  {
    icon: Code,
    title: 'Intelligent Code Suggestions',
    description: 'Get smart code completions and suggestions as you type, boosting your productivity.'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Work with a wide range of programming languages and frameworks seamlessly.'
  },
  {
    icon: Lock,
    title: 'Secure and Private',
    description: 'Your code and data are protected with enterprise-grade security measures.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="animate-fade-in-down mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Why Choose Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="animate-fade-in-up group transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}