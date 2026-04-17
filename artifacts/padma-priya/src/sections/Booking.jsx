import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: '', drop: '', date: '', type: 'Any' });

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Booking Request*\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nVehicle Type: ${form.type}`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  const inputStyle = {
    height: 48, padding: '0 16px', borderRadius: 10,
    border: '1.5px solid #e5e7eb', fontSize: 14,
    color: '#111827', outline: 'none', background: 'white', width: '100%',
    fontFamily: 'inherit', transition: 'border-color .2s',
  };

  const labelStyle = {
    fontSize: 12, fontWeight: 700, color: '#4b5563',
    textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6, display: 'block',
  };

  const highlights = [
    { icon: '\u26a1', title: 'Instant Response', desc: 'Booking confirmation in minutes via WhatsApp.' },
    { icon: '\ud83d\udd50', title: 'Available 24/7', desc: "Early flights, late arrivals \u2014 we're always on standby." },
    { icon: '\ud83d\udee1\ufe0f', title: 'Safe & Insured', desc: 'All vehicles fully insured and regularly serviced.' },
  ];

  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Ravi Kumar' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
    { id: 'pickup', label: 'Pickup Location', type: 'text', placeholder: 'Airport, Hotel...' },
    { id: 'drop', label: 'Drop Location', type: 'text', placeholder: 'Destination' },
    { id: 'date', label: 'Travel Date', type: 'date', placeholder: '' },
  ];

  return (
    <section id="booking" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="section-label">Quick Booking</div>
            <h2 className="section-title">Book Your Ride in 30 Seconds</h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Fill in the details and hit the button. We respond on WhatsApp within minutes.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {highlights.map(i => (
                <div key={i.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 22, lineHeight: 1, marginTop: 2 }}>{i.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 2 }}>{i.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.55 }}>{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} style={{ background: 'white', borderRadius: 20, padding: '40px 36px', boxShadow: '0 4px 16px rgba(0,0,0,.10)', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              {fields.map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                  <input
                    id={f.id} name={f.id} type={f.type}
                    placeholder={f.placeholder} required
                    value={form[f.id]} onChange={handle}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--orange)'; }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="type" style={labelStyle}>Vehicle Type</label>
                <select id="type" name="type" value={form.type} onChange={handle}
                  style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>Any</option>
                  <option>Hatchback</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '15px', borderRadius: 12, marginTop: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.32-.46-4.71-1.27l-.34-.2-3.01.8.81-2.96-.22-.36A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              Book via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #booking .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          #booking form > div:first-child { grid-template-columns: 1fr !important; }
          #booking form { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
