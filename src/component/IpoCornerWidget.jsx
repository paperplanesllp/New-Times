import React from 'react';

export default function IpoCornerWidget() {
  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0f172a', marginBottom: '6px' }}>IPO Corner</div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#111827' }}>Upcoming listings to watch</h3>
        </div>
        <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: '700' }}>View all</div>
      </div>

      <div style={{ display: 'grid', gap: '14px' }}>
        {[
          { symbol: 'GLXY', name: 'Galaxy FinTech', date: 'Jun 16, 2026', price: '₹112 - ₹118' },
          { symbol: 'NXT', name: 'NextGen Mobility', date: 'Jun 18, 2026', price: '₹320 - ₹335' },
          { symbol: 'FND', name: 'Fundrise Industries', date: 'Jun 21, 2026', price: '₹81 - ₹88' },
        ].map((ipo) => (
          <div key={ipo.symbol} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>{ipo.symbol}</span>
              <span style={{ fontSize: '12px', color: '#475569' }}>{ipo.date}</span>
            </div>
            <div style={{ fontSize: '13px', color: '#475569', marginBottom: '6px' }}>{ipo.name}</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>{ipo.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
