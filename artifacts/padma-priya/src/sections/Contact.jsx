const WA = 'https://wa.me/919876543210?text=Hi!%20I%20need%20help%20with%20a%20booking.';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Reach us on WhatsApp for the fastest response — we typically reply within minutes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📍', label: 'Office Address', value: '123 Main Street, City Center, Tamil Nadu, India 600001' },
              { icon: '📞', label: 'Phone Number', value: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: '✉️', label: 'Email Address', value: 'contact@padmapriya.com', href: 'mailto:contact@padmapriya.com' },
              { icon: '🕐', label: 'Working Hours', value: '24 hours a day, 7 days a week' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'white', borderRadius: 16, padding: '20px 22px', border: '1px solid var(--gray-200)', transition: 'box-shadow .2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(245,97,43,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)', transition: 'color .2s' }}
                       onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                       onMouseLeave={e => e.target.style.color = 'var(--navy)'}>
                      {c.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--navy)' }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA card */}
          <div style={{ background: 'var(--navy)', borderRadius: 24, padding: '52px 40px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(245,97,43,.08)', pointerEvents: 'none' }} />
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.32-.46-4.71-1.27l-.34-.2-3.01.8.81-2.96-.22-.36A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Chat on WhatsApp</h3>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
              The quickest way to reach us. Tell us your travel needs and we'll take care of everything — booking confirmation in minutes.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px', borderRadius: 12 }}>
              Start a Conversation
            </a>
            <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,.35)' }}>Usually responds within 5 minutes</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
