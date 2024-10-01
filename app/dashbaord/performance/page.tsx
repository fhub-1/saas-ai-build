// src/app/dashboard/performance/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Performance Metrics</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Coding Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Display coding speed metrics and improvements</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Show time saved through AI-assisted coding</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}