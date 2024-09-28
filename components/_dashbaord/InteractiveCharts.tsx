"use client"

// src/components/dashboard/InteractiveCharts.tsx
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Legend, Line, Bar } from 'recharts'
import { Tooltip, TooltipProvider } from '../ui/tooltip'

export function InteractiveCharts() {
  const [timeRange, setTimeRange] = useState('daily')

  // Mock data - replace with actual data in a real application
  const dailyData = [
    { date: '2023-04-01', completions: 120, timeSaved: 2.5 },
    { date: '2023-04-02', completions: 150, timeSaved: 3.2 },
    // ... more daily data
  ]

  const weeklyData = [
    { week: 'Week 1', completions: 800, timeSaved: 16.5 },
    { week: 'Week 2', completions: 950, timeSaved: 20.1 },
    // ... more weekly data
  ]

  const monthlyData = [
    { month: 'January', completions: 3200, timeSaved: 68 },
    { month: 'February', completions: 3800, timeSaved: 82 },
    // ... more monthly data
  ]

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>AI Coding Assistance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={timeRange} onValueChange={setTimeRange}>
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily">
            <LineChart
              data={dailyData}
              width={500}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <TooltipProvider>
                <Tooltip />
              </TooltipProvider>
              <Legend />
              <Line type="monotone" dataKey="completions" stroke="#8884d8" />
              <Line type="monotone" dataKey="timeSaved" stroke="#82ca9d" />
            </LineChart>
          </TabsContent>
          <TabsContent value="weekly">
            <BarChart
              data={weeklyData}
              width={500}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="week" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <TooltipProvider>
                <Tooltip />
              </TooltipProvider>
              <Legend />
              <Bar dataKey="timeSaved" fill="#82ca9d" />
              <Bar dataKey="completions" fill="#8884d8" />
            </BarChart>
          </TabsContent>
          <TabsContent value="monthly">
            <LineChart
              data={monthlyData}
              width={500}
              height={300}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <TooltipProvider>
                <Tooltip />
              </TooltipProvider>
              <Legend />
              <Line type="monotone" dataKey="completions" stroke="#8884d8" />
              <Line type="monotone" dataKey="timeSaved" stroke="#82ca9d" />
            </LineChart>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}