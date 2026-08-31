import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Reasons from "@/components/Reasons";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Locations />
        <Testimonials />
        <Process />
        <Reasons />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
