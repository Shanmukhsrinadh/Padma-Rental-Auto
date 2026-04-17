import { StatCounter } from "../components/StatCounter";

export function Stats() {
  return (
    <section id="about" className="py-16 bg-accent text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCounter end={500} suffix="+" label="Happy Customers" />
          <StatCounter end={50} suffix="+" label="Vehicles in Fleet" />
          <StatCounter end={10} suffix="+" label="Years Experience" />
          <StatCounter end={24} suffix="/7" label="Customer Support" />
        </div>
      </div>
    </section>
  );
}
