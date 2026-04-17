import { Users, Check } from "lucide-react";
import { Button } from "./ui/button";

export function VehicleCard({ vehicle }) {
  const handleBook = () => {
    const text = encodeURIComponent(`Hi! I would like to book the ${vehicle.name} (${vehicle.type}). Please let me know the availability.`);
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!vehicle.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-1.5 rounded-full font-medium text-sm">
              Currently Booked
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {vehicle.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold font-serif text-foreground">{vehicle.name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <Users className="w-4 h-4" />
              <span>{vehicle.seats} Seater</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-primary">₹{vehicle.pricePerDay}</div>
            <div className="text-xs text-muted-foreground">per day</div>
          </div>
        </div>

        <div className="my-4 pt-4 border-t flex flex-wrap gap-2">
          {vehicle.features.map(feature => (
            <div key={feature} className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs font-medium">
              <Check className="w-3 h-3 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={handleBook}
          disabled={!vehicle.available}
          className="w-full rounded-xl font-semibold"
          variant={vehicle.available ? "default" : "secondary"}
        >
          {vehicle.available ? "Book This Car" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}
