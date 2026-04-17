const reasons = [
  { icon: '🔧', title: 'Well-Maintained Vehicles', desc: 'Every vehicle is serviced and safety-checked before every trip.' },
  { icon: '👤', title: 'Professional Drivers', desc: 'Licensed, experienced, and courteous drivers who know the roads.' },
  { icon: '📍', title: 'GPS-Enabled Fleet', desc: 'All vehicles have GPS for real-time tracking and efficient routing.' },
  { icon: '💬', title: '24/7 Customer Support', desc: "We're available around the clock \u2014 before, during, and after your trip." },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. What you see is exactly what you pay.' },
  { icon: '🚪', title: 'Door-to-Door Service', desc: 'We pick you up and drop you off at your exact location, every time.' },
];

export default function WhyUs() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(245,97,43,.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(245,97,43,.04)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: reasons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {reasons.map(r => (
              <div key={r.title} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '22px 20px', transition: 'background .2s, border-color .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.09)'; e.currentTarget.style.borderColor = 'rgba(245,97,43,.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{r.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'white', marginBottom: 6 }}>{r.title}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,97,43,.15)', border: '1px solid rgba(245,97,43,.3)', color: '#ff8c62', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 999, marginBottom: 24 }}>
              Why Choose Us
            </div>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-.02em' }}>
              The Padma Priya<br />
              <span style={{ color: 'var(--orange)' }}>Difference</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              We're not just a rental service — we're your travel partner. For over a decade, families and businesses across our community have trusted us to get them there safely, comfortably, and on time.
            </p>
            <a href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20know%20more." target="_blank" rel="noreferrer" className="btn btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          #about .container > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
