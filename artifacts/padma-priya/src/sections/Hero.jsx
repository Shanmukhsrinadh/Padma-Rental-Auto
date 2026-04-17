import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I would like to make a booking.", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(220 60% 8%) 0%, hsl(220 60% 18%) 50%, hsl(25 70% 20%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <div className="inline-block bg-primary/20 border border-primary/40 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
          Trusted Vehicle Rentals Since 2014
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Your Journey,{" "}
          <span className="text-primary">Our Commitment</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Reliable, affordable, and well-maintained vehicles for every trip — daily commutes, outstation tours, airport transfers, and more. With a professional driver, always.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="h-14 px-8 text-base font-bold rounded-full shadow-xl bg-[#25D366] hover:bg-[#128C7E] text-white border-0 gap-2"
            data-testid="button-hero-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </Button>
          <a href="#vehicles">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-bold rounded-full border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm gap-2"
              data-testid="button-hero-fleet"
            >
              View Our Fleet
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "50+", label: "Vehicles" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
