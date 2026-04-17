import { useState } from "react";
import { VehicleCard } from "../components/VehicleCard";
import vehiclesData from "../data/vehicles.json";

const FILTERS = ["All", "Hatchback", "Sedan", "SUV"];

export function Vehicles() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? vehiclesData
    : vehiclesData.filter((v) => v.type === activeFilter);

  return (
    <section id="vehicles" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Fleet
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Choose Your Ride
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From budget-friendly hatchbacks to spacious SUVs — all vehicles are well-maintained, GPS-enabled, and come with a professional driver.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              data-testid={`filter-${filter.toLowerCase()}`}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === filter
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
