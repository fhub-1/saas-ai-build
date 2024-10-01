import { AboutUs } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import  ClientTestimonials   from "@/components/ClientTestimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import WelcomSub from "@/components/welcom-sub";
import { WhyChooseUs } from "@/components/WhyChoseUs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


 

export default function Home() {
  const { userId } = auth()
  if (userId != null) redirect("/dashbaord")
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero/>
        <ServicesOverview />
        <AboutUs />
        <WhyChooseUs />
        <ClientTestimonials />
        <CallToAction />
      </main>
      <Footer />
    </section>
    // <WelcomSub />
  )
}