import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const handleClick = () => {
    window.open("https://wa.me/919876543210?text=Hi! I have an inquiry.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group animate-pulse"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-foreground px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </button>
  );
}
