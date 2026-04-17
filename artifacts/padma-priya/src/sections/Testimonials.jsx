import { TestimonialCard } from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Business Traveler, Chennai",
    text: "Padma Priya Enterprises has been my go-to for airport transfers for three years now. The driver is always on time, the car is spotless, and the fare never changes. Absolute peace of mind every time.",
    rating: 5,
  },
  {
    name: "Priya Lakshmi",
    role: "Family Trip, Bangalore to Mysore",
    text: "We booked the Innova for a family trip and it was fantastic. The driver was knowledgeable, helpful with luggage, and made the whole day easy and enjoyable. Highly recommend for outstation trips!",
    rating: 5,
  },
  {
    name: "Arun Selvam",
    role: "Tourist, Visiting from Dubai",
    text: "I was visiting family and needed a reliable cab for a week. The booking process via WhatsApp was so easy and the driver felt like a local guide. Perfectly maintained car — couldn't ask for more.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            What Customers Say
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Trusted by Hundreds
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't take our word for it — here's what our customers have to say after travelling with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
