import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WelcomeMessageProps {
  name: string
  codeCompletions: number
  timeSaved: string
}

export function WelcomeMessage({ name, codeCompletions, timeSaved }: WelcomeMessageProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Welcome back, {name}!</CardTitle>
        <CardDescription>Here's how our AI has boosted your productivity recently.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You've used {codeCompletions} AI-powered code completions, saving approximately {timeSaved} of coding time.</p>
      </CardContent>
    </Card>
  )
}