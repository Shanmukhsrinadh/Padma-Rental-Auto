import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    vehicleType: "Any",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Pickup: ${formData.pickup}%0A
Drop: ${formData.drop}%0A
Date: ${formData.date}%0A
Vehicle Type: ${formData.vehicleType}`;

    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-border/50 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            required 
            value={formData.name}
            onChange={handleChange}
            className="h-12 bg-muted/50 border-transparent focus:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="+91 98765 43210" 
            required
            value={formData.phone}
            onChange={handleChange}
            className="h-12 bg-muted/50 border-transparent focus:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pickup">Pickup Location</Label>
          <Input 
            id="pickup" 
            name="pickup" 
            placeholder="Airport, Hotel, etc." 
            required
            value={formData.pickup}
            onChange={handleChange}
            className="h-12 bg-muted/50 border-transparent focus:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="drop">Drop Location</Label>
          <Input 
            id="drop" 
            name="drop" 
            placeholder="Destination" 
            required
            value={formData.drop}
            onChange={handleChange}
            className="h-12 bg-muted/50 border-transparent focus:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Travel Date</Label>
          <Input 
            id="date" 
            name="date" 
            type="date" 
            required
            value={formData.date}
            onChange={handleChange}
            className="h-12 bg-muted/50 border-transparent focus:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <select 
            id="vehicleType" 
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="flex h-12 w-full rounded-md border border-transparent bg-muted/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white"
          >
            <option value="Any">Any Vehicle</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
      </div>
      
      <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-md">
        Book via WhatsApp
      </Button>
    </form>
  );
}
