// src/components/analytics/AnalyticsCharts.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart, LineChart, PieChart } from 'recharts'

// Sample data for charts
const retentionData = {
  daily: [
    { name: 'Mon', users: 100 },
    { name: 'Tue', users: 120 },
    { name: 'Wed', users: 115 },
    { name: 'Thu', users: 130 },
    { name: 'Fri', users: 140 },
  ],
  weekly: [
    { name: 'Week 1', users: 500 },
    { name: 'Week 2', users: 550 },
    { name: 'Week 3', users: 600 },
    { name: 'Week 4', users: 580 },
  ],
  monthly: [
    { name: 'Jan', users: 2000 },
    { name: 'Feb', users: 2200 },
    { name: 'Mar', users: 2400 },
    { name: 'Apr', users: 2600 },
  ],
}

const churnRateData = [
  { name: 'Retained', value: 85 },
  { name: 'Churned', value: 15 },
]

const sessionDurationData = [
  { name: '0-5 min', users: 300 },
  { name: '5-15 min', users: 450 },
  { name: '15-30 min', users: 350 },
  { name: '30+ min', users: 200 },
]

const userEngagementData = [
  { name: 'Week 1', engagement: 70 },
  { name: 'Week 2', engagement: 75 },
  { name: 'Week 3', engagement: 80 },
  { name: 'Week 4', engagement: 85 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>User Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="daily">
              <LineChart data={retentionData.daily} />
            </TabsContent>
            <TabsContent value="weekly">
              <LineChart data={retentionData.weekly} />
            </TabsContent>
            <TabsContent value="monthly">
              <LineChart data={retentionData.monthly} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Churn Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={churnRateData} />
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Session Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={sessionDurationData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>User Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={userEngagementData} />
        </CardContent>
      </Card>
    </div>
  )
}