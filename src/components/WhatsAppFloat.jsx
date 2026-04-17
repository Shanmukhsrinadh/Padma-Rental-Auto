import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query."
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#25d366',
        boxShadow: '0 4px 24px rgba(37,211,102,.45)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(.6)',
        transition: 'all .4s cubic-bezier(.34,1.56,.64,1)',
        animation: visible ? 'waPulse 2.4s ease infinite' : 'none',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.72 0-3.32-.46-4.71-1.27l-.34-.2-3.01.8.81-2.96-.22-.36A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,.45), 0 0 0 0 rgba(37,211,102,.4); }
          50% { box-shadow: 0 4px 24px rgba(37,211,102,.45), 0 0 0 14px rgba(37,211,102,0); }
        }
      `}</style>
    </a>
  );
}
