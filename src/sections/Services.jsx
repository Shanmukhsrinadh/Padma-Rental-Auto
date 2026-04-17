const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Car Rentals',
    desc: 'Hatchbacks, sedans, and SUVs available hourly, daily, or weekly. Transparent pricing, zero hidden charges.',
    accent: '#f5612b',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Driver-Assisted Travel',
    desc: 'All vehicles come with trained, courteous, and experienced drivers. Sit back and enjoy the ride.',
    accent: '#0b1d35',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Airport Transfers',
    desc: 'On-time airport pickups and drops. We track your flight and adjust for any delays — always stress-free.',
    accent: '#f5612b',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'Outstation Trips',
    desc: 'Comfortable multi-day outstation packages to popular destinations. Custom itineraries for families and groups.',
    accent: '#0b1d35',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left text */}
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Services Built Around Your Journey</h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Whether it's a quick city ride or a week-long tour, we have the right vehicle and the right team to get you there comfortably.
            </p>
            <a href="https://wa.me/919876543210?text=Hi!%20I%20need%20help%20choosing%20a%20service." target="_blank" rel="noreferrer" className="btn btn-navy">
              Talk to Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {services.map((s, i) => (
              <div key={s.title} style={{
                padding: '28px 24px', borderRadius: 16, border: '1px solid var(--gray-200)',
                transition: 'border-color .2s, box-shadow .2s',
                ...(i % 2 !== 0 ? { marginTop: 24 } : {}),
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.accent; e.currentTarget.style.boxShadow = `0 8px 32px ${s.accent}18`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-200)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: 50, height: 50, borderRadius: 14, background: `${s.accent}12`, color: s.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 15, color: 'var(--navy)', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          #services .container > div > div:last-child { grid-template-columns: 1fr !important; }
          #services .container > div > div:last-child > div { margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
