import { useEffect, useState, useRef } from "react";

export function StatCounter({ end, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={elementRef} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold font-serif text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-foreground/80 uppercase tracking-wider">{label}</div>
    </div>
  );
}
