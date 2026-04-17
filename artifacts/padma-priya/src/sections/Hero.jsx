const WA = 'https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20make%20a%20booking.';

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80')",
        backgroundSize: 'cover', backgroundPosition: 'center 40%',
      }} />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(11,29,53,.94) 0%, rgba(11,29,53,.78) 55%, rgba(11,29,53,.40) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,97,43,.18)', border: '1px solid rgba(245,97,43,.35)',
            color: '#ff8c62', fontSize: 12, fontWeight: 700, letterSpacing: '.08em',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: 999, marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--orange)', borderRadius: '50%', animation: 'dot 1.4s ease infinite' }} />
            Trusted Vehicle Rentals Since 2014
          </div>

          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(36px,5.5vw,68px)', fontWeight: 800, color: 'white', lineHeight: 1.08, marginBottom: 24, letterSpacing: '-.02em' }}>
            Your Journey,<br />
            <span style={{ color: 'var(--orange)' }}>Our Commitment.</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 18, lineHeight: 1.72, marginBottom: 40, maxWidth: 520 }}>
            Reliable, affordable, and well-maintained vehicles for every trip — daily commutes, outstation tours, and airport transfers. Always with a professional driver.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.32-.46-4.71-1.27l-.34-.2-3.01.8.81-2.96-.22-.36A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a href="#vehicles" className="btn btn-outline">
              View Our Fleet
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Mini stats */}
          <div style={{ display: 'flex', gap: 32, marginTop: 56, flexWrap: 'wrap' }}>
            {[['500+','Customers'],['50+','Vehicles'],['24/7','Support'],['10+','Years']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily:"'Sora',sans-serif", fontSize: 26, fontWeight: 800, color: 'white' }}>{num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: .6 }}>
        <div style={{ width: 24, height: 40, border: '2px solid rgba(255,255,255,.5)', borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 3, height: 8, background: 'white', borderRadius: 2, animation: 'scrollDot 1.6s ease infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes dot { 0%,100%{opacity:1}50%{opacity:.3} }
        @keyframes scrollDot { 0%{transform:translateY(0);opacity:1}100%{transform:translateY(12px);opacity:0} }
      `}</style>
    </section>
  );
}
