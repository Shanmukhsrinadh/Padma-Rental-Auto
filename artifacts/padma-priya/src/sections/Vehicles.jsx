import { useState } from 'react';
import vehicles from '../data/vehicles.json';

const FILTERS = ['All', 'Hatchback', 'Sedan', 'SUV'];

function VehicleCard({ v }) {
  const handleBook = () => {
    const msg = encodeURIComponent(`Hi! I'd like to book the ${v.name} (${v.type}). Please let me know its availability.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div style={{
      background: 'white', borderRadius: 18, overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)',
      transition: 'box-shadow .25s, transform .25s', display: 'flex', flexDirection: 'column',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
        <img src={v.image} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
        {/* Type badge */}
        <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--navy)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999, letterSpacing: '.04em' }}>
          {v.type}
        </div>
        {/* Unavailable overlay */}
        {!v.available && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ background: '#ef4444', color: 'white', padding: '6px 18px', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Currently Booked</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>{v.name}</div>
            <div style={{ fontSize: 13, color: 'var(--gray-400)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {v.seats} Seater
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 800, color: 'var(--orange)' }}>₹{v.pricePerDay.toLocaleString()}</div>
            <div style={{ fontSize: 11, color: 'var(--gray-400)', fontWeight: 500 }}>per day</div>
          </div>
        </div>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {v.features.map(f => (
            <span key={f} style={{ background: 'var(--gray-100)', color: 'var(--gray-600)', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--orange)' }} />
              {f}
            </span>
          ))}
        </div>

        <button onClick={handleBook} disabled={!v.available}
          className="btn"
          style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', background: v.available ? 'var(--orange)' : 'var(--gray-200)', color: v.available ? 'white' : 'var(--gray-400)', cursor: v.available ? 'pointer' : 'not-allowed', borderRadius: 12, padding: '12px 0', fontWeight: 700, fontSize: 14 }}>
          {v.available ? 'Book This Car' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}

export default function Vehicles() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? vehicles : vehicles.filter(v => v.type === filter);

  return (
    <section id="vehicles" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Our Fleet</div>
          <h2 className="section-title">Choose Your Ride</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            All vehicles are GPS-enabled, well-maintained, and come with a professional driver.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding: '9px 22px', borderRadius: 999, fontSize: 13, fontWeight: 700,
                border: '2px solid', cursor: 'pointer', transition: 'all .2s',
                background: filter === f ? 'var(--navy)' : 'white',
                borderColor: filter === f ? 'var(--navy)' : 'var(--gray-200)',
                color: filter === f ? 'white' : 'var(--gray-600)',
              }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
          {filtered.map(v => <VehicleCard key={v.id} v={v} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { #vehicles .container > div:last-child { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { #vehicles .container > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
