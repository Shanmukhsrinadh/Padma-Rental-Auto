import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: '+', label: 'Happy Customers', desc: 'Families and travelers served' },
  { value: 50, suffix: '+', label: 'Fleet Size', desc: 'Well-maintained vehicles' },
  { value: 10, suffix: '+', label: 'Years Active', desc: 'Trusted since 2014' },
  { value: 100, suffix: '%', label: 'Safe Journeys', desc: 'Zero major incidents' },
];

export default function Stats() {
  return (
    <section style={{ background: 'var(--navy)', padding: '72px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'rgba(255,255,255,.06)', borderRadius: 20, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '40px 32px', textAlign: 'center', background: i % 2 === 0 ? 'rgba(255,255,255,.03)' : 'transparent', borderRight: i < 3 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 44, fontWeight: 800, color: 'var(--orange)', lineHeight: 1, marginBottom: 6 }}>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
