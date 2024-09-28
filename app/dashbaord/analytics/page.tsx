import { AnalyticsCharts } from "@/components/_dashbaord/analytics/AnalyticsCharts";
import { KeyMetrics } from "@/components/_dashbaord/KeyMetrics";
import { AiInsights } from "@/components/_dashbaord/AiInsights";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <KeyMetrics />
      <AnalyticsCharts />
      <AiInsights />
    </div>
  )
}