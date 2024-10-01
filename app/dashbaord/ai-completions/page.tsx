// src/app/dashboard/ai-completions/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AiCompletionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">AI Completions</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Completions</CardTitle>
          </CardHeader>
          
          <CardContent>
            <p>List of recent AI-powered code completions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completion Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Display statistics on AI completions usage</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}