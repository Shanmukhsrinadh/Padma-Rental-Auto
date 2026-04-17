const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Business Traveler · Chennai',
    stars: 5,
    text: 'Padma Priya has been my go-to for airport transfers for over three years. The driver is always on time, the car is spotless, and the pricing never changes. Total peace of mind every single time.',
    initials: 'RK',
    color: '#f5612b',
  },
  {
    name: 'Priya Lakshmi',
    role: 'Family Trip · Bangalore to Mysore',
    stars: 5,
    text: 'We booked the Innova for our family trip and it was fantastic. The driver was knowledgeable and helped with our luggage — made the whole day easy and memorable. Highly recommended!',
    initials: 'PL',
    color: '#0b1d35',
  },
  {
    name: 'Arun Selvam',
    role: 'Tourist · Visiting from Dubai',
    stars: 5,
    text: "I needed a reliable car for a week of sightseeing. Booking via WhatsApp was effortless, and the driver felt like a local guide. Perfectly maintained car \u2014 couldn't ask for more.",
    initials: 'AS',
    color: '#2563eb',
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5612b">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">Customer Reviews</div>
          <h2 className="section-title">Trusted by Hundreds</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Don't take our word for it — here's what real customers say.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{
              border: '1.5px solid var(--gray-200)', borderRadius: 20, padding: '36px 30px',
              display: 'flex', flexDirection: 'column', gap: 20, transition: 'box-shadow .25s, border-color .25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(245,97,43,.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--gray-200)'; }}
            >
              <Stars count={t.stars} />
              <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--gray-100)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: t.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
