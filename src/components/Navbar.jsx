import { useState, useEffect } from 'react';

const WA = 'https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20make%20a%20booking.';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'all .3s',
    background: scrolled ? 'rgba(11,29,53,.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,.22)' : 'none',
    padding: scrolled ? '12px 0' : '20px 0',
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        {/* Logo */}
        <a href="#home" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
          <div style={{ width:38, height:38, background:'var(--orange)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m-4 12h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:16, color:'white', lineHeight:1.1 }}>Padma Priya</div>
            <div style={{ fontSize:10, color:'rgba(255,255,255,.55)', letterSpacing:'.06em', textTransform:'uppercase' }}>Enterprises</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display:'flex', alignItems:'center', gap:32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ color:'rgba(255,255,255,.82)', fontSize:14, fontWeight:500, transition:'color .2s' }}
               onMouseEnter={e => e.target.style.color='white'}
               onMouseLeave={e => e.target.style.color='rgba(255,255,255,.82)'}>
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding:'10px 22px', fontSize:14 }}>
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display:'none', flexDirection:'column', gap:5, padding:8 }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{ display:'block', width:24, height:2, background:'white', borderRadius:2,
              transform: open && i===0 ? 'rotate(45deg) translate(5px,5px)' : open && i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: open && i===1 ? 0 : 1, transition:'all .25s' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:'var(--navy)', padding:'16px 24px 24px', borderTop:'1px solid rgba(255,255,255,.08)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               style={{ display:'block', color:'rgba(255,255,255,.85)', fontSize:15, fontWeight:500, padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.06)' }}>
              {l.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary"
             style={{ display:'block', textAlign:'center', marginTop:16 }}>
            Book Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
