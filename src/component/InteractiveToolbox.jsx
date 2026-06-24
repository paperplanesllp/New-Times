import React, { useState } from 'react';

export default function InteractiveToolbox() {
  const [sip, setSip] = useState(10000);
  
  // Clean, straightforward mathematical approximation for rendering core compounding metrics
  const projectedWealth = (sip * 12 * 15 * 2.3).toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', background: '#1c1b18', color: '#ffffff', padding: '32px', borderRadius: '12px' }}>
      <div>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#c5a880', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Interactive Sandbox</span>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: '6px 0 12px 0', fontWeight: '600' }}>Wealth Blueprint Engine</h3>
        <p style={{ color: '#a19c91', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
          Adjust your monthly compounding exposure metrics to safely visualize your projected baseline retirement safety nets across a multi-decade arc.
        </p>
      </div>

      <div style={{ backgroundColor: '#2d2b27', padding: '20px', borderRadius: '8px', border: '1px solid #3d3a35' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
            <span style={{ color: '#d1ce7c' }}>Monthly Investment Allocation</span>
            <span style={{ fontWeight: '700' }}>₹{sip.toLocaleString('en-IN')}</span>
          </div>
          <input 
            type="range" 
            min="5000" 
            max="100000" 
            step="5000" 
            value={sip}
            onChange={(e) => setSip(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#c5a880', cursor: 'pointer' }}
          />
        </div>

        <div style={{ borderTop: '1px dashed #4a4740', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#a19c91', display: 'block', textTransform: 'uppercase' }}>Est. Corpus (15 Yrs @ 12%)</span>
            <span style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', fontFamily: 'monospace' }}>~ ₹{projectedWealth}</span>
          </div>
          <button style={{ backgroundColor: '#c5a880', color: '#1c1b18', border: 'none', padding: '8px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
            Full Report
          </button>
        </div>
      </div>
    </div>
  );
}