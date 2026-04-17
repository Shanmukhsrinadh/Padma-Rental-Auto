export function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
