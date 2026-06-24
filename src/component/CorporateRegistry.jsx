import React from 'react';

const SECTOR_COMPANIES = [
  { group: 'HDFC Bank Ltd', sector: 'Banking & Credit', marketCap: '₹11.46 L Cr', performance: '+2.08%', outlook: 'Overweight' },
  { group: 'Infosys Technologies', sector: 'Information Systems', marketCap: '₹4.52 L Cr', performance: '-2.68%', outlook: 'Neutral' },
  { group: 'DLF Residential Assets', sector: 'Real Estate / Land', marketCap: '₹1.39 L Cr', performance: '+1.50%', outlook: 'Positive' },
  { group: 'Oracle Financial Software', sector: 'FinTech Enterprise', marketCap: '₹0.80 L Cr', performance: '-2.16%', outlook: 'Accumulate' },
  { group: 'Prestige Estates Proj.', sector: 'Commercial Realty', marketCap: '₹0.57 L Cr', performance: '+1.99%', outlook: 'Strong Buy' }
];

export default function CorporateRegistry() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.5px', margin: 0 }}>
          Market Weight & Allocations Index
        </h3>
      </div>
      
      <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '14px 16px', fontWeight: '700', color: '#334155' }}>Enterprise Entity</th>
              <th style={{ padding: '14px 16px', fontWeight: '700', color: '#334155' }}>Sector Verticals</th>
              <th style={{ padding: '14px 16px', fontWeight: '700', color: '#334155' }}>Capital Weight</th>
              <th style={{ padding: '14px 16px', fontWeight: '700', color: '#334155' }}>Intraday Delta</th>
              <th style={{ padding: '14px 16px', fontWeight: '700', color: '#334155' }}>Stance</th>
            </tr>
          </thead>
          <tbody>
            {SECTOR_COMPANIES.map((company, index) => (
              <tr key={index} style={{ borderBottom: index === SECTOR_COMPANIES.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                <td style={{ padding: '14px 16px', fontWeight: '600', color: '#0f172a' }}>{company.group}</td>
                <td style={{ padding: '14px 16px', color: '#475569' }}>{company.sector}</td>
                <td style={{ padding: '14px 16px', fontWeight: '500', color: '#0f172a' }}>{company.marketCap}</td>
                <td style={{ padding: '14px 16px', fontWeight: '700', color: company.performance.startsWith('+') ? '#16a34a' : '#dc2626' }}>
                  {company.performance}
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f1f5f9', color: '#334155' }}>
                    {company.outlook}
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