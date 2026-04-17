import { Star } from "lucide-react";

export function TestimonialCard({ name, role, text, rating = 5 }) {
  return (
    <div className="bg-card p-8 rounded-2xl border relative">
      <div className="flex gap-1 mb-6 text-primary">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-foreground italic mb-8 relative z-10 leading-relaxed">
        "{text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg font-serif">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
