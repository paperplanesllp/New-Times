import React from 'react';

const TRACKING_INDEX = [
  { platform: 'IndiaAI Mission', architecture: 'Sovereign AI Compute', benchmark: 'GPU Cluster Expansion', tier: 'National Infrastructure', availability: 'Active' },
  { platform: 'Tata Semiconductor Fab', architecture: '28nm Node', benchmark: 'Production Capacity', tier: 'Manufacturing', availability: 'Construction' },
  { platform: 'Micron Gujarat Facility', architecture: 'ATMP Packaging', benchmark: 'Output Scale', tier: 'Semiconductor', availability: 'Operational' },
  { platform: 'ISRO NISAR Integration', architecture: 'Earth Observation', benchmark: 'Satellite Capacity', tier: 'SpaceTech', availability: 'Deployment' },
  { platform: 'Bharat 6G Mission', architecture: 'Indigenous Telecom', benchmark: 'Spectrum Readiness', tier: 'Telecom', availability: 'Pilot Stage' }
];

export default function TechLaunchTable() {
  return (
    <div style={{ marginBottom: '48px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#09090b', letterSpacing: '-0.5px', margin: '0 0 6px 0' }}>
          Hardware Pipeline & Silicon Registry
        </h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#71717a' }}>
          Tracking sovereign compute, semiconductor manufacturing, space systems, and indigenous telecom infrastructure.
        </p>
      </div>

      <div style={{ overflowX: 'auto', border: '1px solid #e4e4e7', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
              <th style={{ padding: '16px', fontWeight: '700', color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Platform</th>
              <th style={{ padding: '16px', fontWeight: '700', color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Architecture</th>
              <th style={{ padding: '16px', fontWeight: '700', color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core Metric</th>
              <th style={{ padding: '16px', fontWeight: '700', color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Market Band</th>
              <th style={{ padding: '16px', fontWeight: '700', color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {TRACKING_INDEX.map((row, idx) => (
              <tr 
                key={idx} 
                style={{ 
                  borderBottom: idx === TRACKING_INDEX.length - 1 ? 'none' : '1px solid #f4f4f5',
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f4f4f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : '#fafafa'}
              >
                <td style={{ padding: '16px', fontWeight: '700', color: '#09090b' }}>{row.platform}</td>
                <td style={{ padding: '16px', color: '#27272a', fontWeight: '500' }}>{row.architecture}</td>
                <td style={{ padding: '16px', color: '#52525b', fontFamily: 'monospace', fontSize: '13px' }}>{row.benchmark}</td>
                <td style={{ padding: '16px', color: '#27272a', fontWeight: '600' }}>{row.tier}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    backgroundColor: row.availability === 'Active' || row.availability === 'Operational' ? '#e0f2fe' : '#f4f4f5', 
                    color: row.availability === 'Active' || row.availability === 'Operational' ? '#0369a1' : '#18181b', 
                    padding: '4px 10px', 
                    borderRadius: '6px', 
                    fontSize: '12px', 
                    fontWeight: '700' 
                  }}>
                    {row.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
