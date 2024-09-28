"use client"

import { useState } from "react"
import { Youtube, YoutubeIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function WelcomSub() {
  const [subscribers, setSubscribers] = useState(436)
  const goal = 5000
  const progress = (subscribers / goal) * 100

  const handleSubscribe = () => {
    if (subscribers < goal) {
      setSubscribers(subscribers + 1)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Join Our YouTube Journey!</CardTitle>
        <CardDescription>Help us reach 5,000 subscribers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center space-x-2 text-4xl font-bold">
          <YoutubeIcon className="h-8 w-8 text-red-600" />
          <span>{subscribers.toLocaleString()}</span>
        </div>
        <div className="space-y-2">
          <Progress value={progress} className="w-full h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>0</span>
            <span>Goal: 5,000</span>
          </div>
        </div>
        <p className="text-center text-sm font-medium">
          {(goal - subscribers).toLocaleString()} more to go!
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" onClick={handleSubscribe}>
          Subscribe Now
        </Button>
      </CardFooter>
    </Card>
  )
}