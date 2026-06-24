import React from 'react';

export default function IndustryMetrics() {
  return (
    <div style={{ fontFamily: '"Playfair Display", Georgia, serif', marginBottom: '48px' }}>
      <div style={{ width: '100%', height: '4px', backgroundColor: '#0f172a', marginBottom: '20px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', color: '#64748b', display: 'block', marginBottom: '4px' }}>
            Industry
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.5px' }}>
            Artificial Intelligence
          </h1>
        </div>
        <span style={{ fontSize: '13px', color: '#16a34a', fontFamily: 'monospace', fontWeight: '700', textTransform: 'uppercase' }}>
          Accelerating
        </span>
      </div>

      <div style={{ border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', padding: '28px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0', lineHeight: '1.2' }}>
          India's Sovereign Compute Push Enters Commercial Deployment Phase
        </h2>
        <p style={{ maxWidth: '820px', margin: '0 0 18px 0', fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '16px', lineHeight: '1.7', color: '#334155' }}>
          Government-backed AI infrastructure and enterprise adoption are moving from policy announcements to operational deployment across India's technology ecosystem.
        </p>
        <p style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px', lineHeight: '1.6', color: '#64748b', fontWeight: '600' }}>
          Based on recent developments in the IndiaAI Mission, domestic AI model launches, and enterprise AI investments.
        </p>
      </div>
    </div>
  );
}
