import { AiInsights } from "@/components/_dashbaord/AiInsights";
import { InteractiveCharts } from "@/components/_dashbaord/InteractiveCharts";
import { KeyMetrics } from "@/components/_dashbaord/KeyMetrics";
import { WelcomeMessage } from "@/components/_dashbaord/WelcomeMessage";
import WelcomSub from "@/components/welcom-sub";

 

export default function DashboardPage() {
  return (
    // <div className="space-y-8">
    //   <WelcomeMessage
    //     name="Joseph Ki" 
    //     codeCompletions={1483}
    //     timeSaved="45h 31m"
    //   />
    //   <KeyMetrics />
    //   <div className="grid gap-4 md:grid-cols-2">
    //     <InteractiveCharts />
    //     <AiInsights />
    //   </div>
    // </div>
    <WelcomSub />
  )
}