// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import OnboardingForm from "@/components/OnboardingForm";
import { auth } from "@clerk/nextjs/server";

export default function OnboardingPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Welcome! Let's get you set up.</h1>
      <OnboardingForm />
    </div>
  );
}