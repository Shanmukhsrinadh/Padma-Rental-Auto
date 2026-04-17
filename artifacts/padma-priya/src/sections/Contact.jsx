import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, City Center, Tamil Nadu, India 600001",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@padmapriya.com",
    href: "mailto:contact@padmapriya.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24 hours a day, 7 days a week",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question or want to make a booking? Reach us on WhatsApp for the fastest response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-5 p-5 bg-muted/50 rounded-2xl border hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent text-white p-10 rounded-3xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Fastest Response on WhatsApp
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              We typically respond within minutes. Click below to start a conversation — tell us your travel needs and we'll sort it out.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi! I need help with a booking."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-[#128C7E] transition-colors"
              data-testid="button-contact-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
