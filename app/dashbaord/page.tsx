import { AiInsights } from "@/components/_dashbaord/AiInsights";
import { InteractiveCharts } from "@/components/_dashbaord/InteractiveCharts";
import { KeyMetrics } from "@/components/_dashbaord/KeyMetrics";
import { WelcomeMessage } from "@/components/_dashbaord/WelcomeMessage";
import { auth, currentUser } from "@clerk/nextjs/server";

 
export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId || !user) {
    return null // or redirect to sign-in page
  }
  return (
    <div className="space-y-8">
      <WelcomeMessage
        name={user.fullName ?? ''}
        codeCompletions={1483}
        timeSaved="45h 31m"
      />
      <KeyMetrics />
      <div className="grid gap-4 md:grid-cols-2">
        <InteractiveCharts />
        <AiInsights />
      </div>
    </div>
  )
}