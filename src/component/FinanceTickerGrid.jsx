import React from 'react';

export default function FinanceTickerGrid() {
  const financialSnaps = [
    { label: 'USD/INR', metric: '~Rs 83.1', delta: 'Snapshot', context: 'Rupee-dollar reference range' },
    { label: 'EUR/INR', metric: '~Rs 90.2', delta: 'Snapshot', context: 'Euro cross-rate monitor' },
    { label: 'GBP/INR', metric: '~Rs 105.8', delta: 'Snapshot', context: 'Sterling cross-rate monitor' },
    { label: 'Gold (10g India)', metric: '~Rs 72,000', delta: 'Firm', context: 'Safe-haven demand remains active' },
    { label: 'Crude Oil (Brent)', metric: '~$82/bbl', delta: 'Watch', context: 'Energy cost benchmark' },
    { label: 'Sensex', metric: '~80,000+', delta: 'Strong', context: 'Strong market momentum' },
    { label: 'Nifty 50', metric: '~24,000+', delta: 'Steady', context: 'Steady upward trend' }
  ];

  return (
    <div style={{ backgroundColor: '#fcfbf7', padding: '24px', borderRadius: '12px', border: '1px solid #e7e5e0', marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#857f72' }}>Money Today</span>
          <h2 style={{ fontSize: '26px', margin: '4px 0 0 0', fontWeight: '800', color: '#1c1b18', fontFamily: 'Georgia, serif' }}>Money Today Value</h2>
        </div>
        <div style={{ padding: '6px 12px', backgroundColor: '#f1efe9', borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#4a4740' }}>
          Market Snapshot
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {financialSnaps.map((item, idx) => (
          <div key={idx} style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #edebe6', boxShadow: '0 2px 8px rgba(28,27,24,0.02)' }}>
            <span style={{ fontSize: '12px', color: '#857f72', fontWeight: '500', display: 'block', marginBottom: '6px' }}>{item.label}</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '22px', fontWeight: '700', color: '#1c1b18', fontFamily: 'system-ui' }}>{item.metric}</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#2e7d32', backgroundColor: '#e8f5e9', padding: '1px 6px', borderRadius: '4px' }}>{item.delta}</span>
            </div>
            <span style={{ fontSize: '11px', color: '#a19c91', display: 'block' }}>{item.context}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
