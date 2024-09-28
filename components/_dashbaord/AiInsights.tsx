// src/components/dashboard/AiInsights.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

export function AiInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          AI-Powered Coding Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Your most productive coding hours are between 10 AM and 2 PM.</li>
          <li>You could save 20% more time by utilizing our refactoring suggestions.</li>
          <li>Consider using more keyboard shortcuts - they can boost your efficiency by up to 15%.</li>
        </ul>
      </CardContent>
    </Card>
  )
}