import { Car, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-white py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-2xl font-bold font-serif mb-4">
            <Car className="w-8 h-8 text-primary" />
            <span>Padma Priya</span>
          </div>
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            Your trusted local partner for vehicle rentals, travel assistance, and reliable financial services in the heart of the community.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 font-serif">Quick Links</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#vehicles" className="hover:text-primary transition-colors">Our Fleet</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 font-serif">Services</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li>Car Rentals</li>
            <li>Driver Assistance</li>
            <li>Airport Transfers</li>
            <li>Outstation Travel</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 font-serif">Contact</h4>
          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>123 Main Street, City Center, State, India 123456</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>contact@padmapriya.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Padma Priya Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
