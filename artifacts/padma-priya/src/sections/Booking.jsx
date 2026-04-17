import { BookingForm } from "../components/BookingForm";
import { MessageCircle, Clock, Shield } from "lucide-react";

export function Booking() {
  return (
    <section id="booking" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Quick Booking
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Book Your Ride
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the details below and click Book via WhatsApp — we'll confirm your booking instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          <div className="md:col-span-2">
            <BookingForm />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Instant Confirmation</h4>
                  <p className="text-sm text-muted-foreground">
                    Get a booking confirmation via WhatsApp within minutes of submitting your request.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Available 24/7</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept bookings round the clock — early morning flights or late-night arrivals, we're always ready.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Safe & Insured</h4>
                  <p className="text-sm text-muted-foreground">
                    All vehicles are fully insured and regularly serviced. Your safety is our top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
