const WA = 'https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query.';

const cols = [
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Our Fleet', href: '#vehicles' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Car Rentals' },
      { label: 'Driver-Assisted Travel' },
      { label: 'Airport Transfers' },
      { label: 'Outstation Packages' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'white', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, background: 'var(--orange)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m-4 12h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 16 }}>Padma Priya</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.45)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Enterprises</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Your trusted local vehicle rental partner since 2014. Reliable cars, professional drivers, and 24/7 support.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ fontSize: 13, padding: '10px 18px' }}>
              Chat on WhatsApp
            </a>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map(item => (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, transition: 'color .2s' }}
                         onMouseEnter={e => e.target.style.color = 'white'}
                         onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.7)'}>
                        {item.label}
                      </a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 14 }}>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📍', text: '123 Main Street, City Center, Tamil Nadu, India' },
                { icon: '📞', text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: '✉️', text: 'contact@padmapriya.com', href: 'mailto:contact@padmapriya.com' },
              ].map(c => (
                <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 14 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, lineHeight: 1.5, transition: 'color .2s' }}
                       onMouseEnter={e => e.target.style.color = 'white'}
                       onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.7)'}>
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, lineHeight: 1.5 }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,.35)', fontSize: 13 }}>
            &copy; {new Date().getFullYear()} Padma Priya Enterprises. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,.25)', fontSize: 12 }}>
            Vehicle Rental &nbsp;|&nbsp; Driver Services &nbsp;|&nbsp; Airport Transfers
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
