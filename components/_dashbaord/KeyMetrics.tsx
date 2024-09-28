// src/components/dashboard/KeyMetrics.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Zap, Clock, FileCode } from 'lucide-react'

const metrics = [
  { title: 'Code Completions', value: '1,483', icon: Code, change: '+12%' },
  { title: 'Time Saved', value: '45h 31m', icon: Clock, change: '+8%' },
  { title: 'Bugs Prevented', value: '284', icon: Zap, change: '+3%' },
  { title: 'Files Improved', value: '145', icon: FileCode, change: '+18%' },
]

export function KeyMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.change} from last week
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}