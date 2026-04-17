import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Stats from './sections/Stats.jsx';
import Vehicles from './sections/Vehicles.jsx';
import Services from './sections/Services.jsx';
import WhyUs from './sections/WhyUs.jsx';
import Booking from './sections/Booking.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Vehicles />
        <Services />
        <WhyUs />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
