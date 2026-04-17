import { Car, Users, Plane, Map } from "lucide-react";
import { ServiceCard } from "../components/ServiceCard";

const services = [
  {
    icon: Car,
    title: "Car Rentals",
    description:
      "Hatchbacks, sedans, and SUVs available for hourly, daily, or weekly hire. Transparent pricing with no hidden charges.",
  },
  {
    icon: Users,
    title: "Driver-Assisted Travel",
    description:
      "All our vehicles come with trained, courteous, and experienced drivers so you can sit back and enjoy the journey.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "On-time airport transfers with flight tracking. We monitor your flight and adjust for any delays — stress-free every time.",
  },
  {
    icon: Map,
    title: "Outstation Packages",
    description:
      "Comfortable multi-day outstation trips to popular destinations. Customised itineraries for families and groups.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether it's a quick city ride or a long outstation trip, Padma Priya Enterprises has you covered every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
