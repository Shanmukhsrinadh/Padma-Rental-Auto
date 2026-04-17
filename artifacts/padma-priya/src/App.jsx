import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Vehicles } from "./sections/Vehicles";
import { Services } from "./sections/Services";
import { Booking } from "./sections/Booking";
import { WhyUs } from "./sections/WhyUs";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Vehicles />
      <Services />
      <WhyUs />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
