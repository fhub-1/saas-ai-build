import SupportTicketForm from "@/components/_dashbaord/support/SupportTicketForm";

 
export default function SupportPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Support</h1>
        <SupportTicketForm />
      </div>
    )
  }