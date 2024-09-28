import { AboutUs } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import  ClientTestimonials   from "@/components/ClientTestimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import WelcomSub from "@/components/welcom-sub";
import { WhyChooseUs } from "@/components/WhyChoseUs";

 

export default function Home() {
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
    
  )
}