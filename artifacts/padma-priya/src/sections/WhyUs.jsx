import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Well-Maintained Vehicles",
    description: "Every vehicle undergoes regular servicing and safety checks before every trip.",
  },
  {
    title: "Professional Drivers",
    description: "Experienced, licensed, and courteous drivers who know the routes inside out.",
  },
  {
    title: "24/7 Customer Support",
    description: "Our team is always available to assist you — day or night, before or during your trip.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges or surprise fees. What you see is exactly what you pay.",
  },
  {
    title: "GPS-Enabled Fleet",
    description: "All vehicles are equipped with GPS for real-time tracking and route optimisation.",
  },
  {
    title: "Door-to-Door Service",
    description: "We pick you up and drop you off at your doorstep — no waiting at pickup points.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The Padma Priya Difference
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We're not just a rental service — we're your travel partner. For over a decade, families and businesses in our community have trusted us to get them there safely and comfortably.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi! I'd like to know more about your services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all"
            >
              Talk to Us
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-4 p-6 bg-muted/50 rounded-2xl border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
