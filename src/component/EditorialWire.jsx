import React from 'react';

const STORIES = [
  {
    category: 'GLOBAL LIQUIDITY',
    title: 'Global Liquidity Tightens as Central Banks Maintain Higher Interest Rate Environment',
    excerpt: 'Borrowing costs remain elevated, reshaping investment strategies across markets and slowing speculative capital flows.',
  },
  {
    category: 'MUTUAL FUNDS',
    title: 'Indian Retail Investors Drive Record Mutual Fund Inflows Amid Strong Market Participation',
    excerpt: 'Systematic investment plans continue to fuel long-term wealth creation and market stability.',
  },
  {
    category: 'FOREIGN CAPITAL',
    title: 'Foreign Capital Returns to Emerging Markets as Risk Appetite Improves',
    excerpt: 'Improving macro conditions and valuation comfort are attracting renewed global investment inflows.',
  },
  {
    category: 'BANKING CREDIT',
    title: 'Banking Sector Credit Growth Accelerates on Strong Consumer and SME Demand',
    excerpt: 'Rising loan disbursements signal improving economic activity and business expansion.',
  },
  {
    category: 'GOLD',
    title: 'Gold Prices Gain Momentum as Investors Seek Safe-Haven Assets',
    excerpt: 'Uncertainty in global markets is pushing capital toward traditional wealth-preserving instruments.',
  },
  {
    category: 'EARNINGS',
    title: 'Corporate Earnings Strengthen Amid Cost Control and Stable Demand Conditions',
    excerpt: 'Improved profitability is supporting higher valuations across key listed companies.',
  },
  {
    category: 'DIGITAL PAYMENTS',
    title: 'Digital Payments Ecosystem Expands as Cashless Transactions Reach New High',
    excerpt: 'Rapid fintech adoption continues to transform everyday financial behavior and money flow systems.',
  },
  {
    category: 'PRIVATE WEALTH',
    title: 'Private Wealth Management Industry Sees Strong Growth in High-Net-Worth Segments',
    excerpt: 'Rising affluence is driving demand for personalized investment and advisory services.',
  },
  {
    category: 'REAL ESTATE',
    title: 'Real Estate Investment Activity Rises as Property Markets Show Stable Appreciation',
    excerpt: 'Investor interest remains strong in residential and commercial segments across major cities.',
  },
  {
    category: 'INFLATION',
    title: 'Inflation Trends Stabilize, Supporting Market Confidence and Investment Outlook',
    excerpt: 'Moderating price pressures are improving consumer sentiment and financial planning stability.',
  },
];

export default function EditorialWire() {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ borderBottom: '2px solid #1c1b18', paddingBottom: '6px', marginBottom: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '700', letterSpacing: '1px', color: '#1c1b18' }}>THE STRATEGIC WIRE</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {STORIES.map((story, i) => (
          <div key={story.title} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', paddingBottom: '24px', borderBottom: i !== STORIES.length - 1 ? '1px solid #edebe6' : 'none' }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: '800', letterSpacing: '1px', color: '#ffffff', backgroundColor: '#1c1b18', padding: '3px 8px', borderRadius: '3px', marginBottom: '12px' }}>
                {story.category}
              </span>
              <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '700', color: '#1c1b18', margin: 0, lineHeight: '1.3' }}>
                {story.title}
              </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#545048', lineHeight: '1.6', fontFamily: 'system-ui' }}>
                {story.excerpt}
              </p>
              <span style={{ fontSize: '12px', color: '#a19c91', fontWeight: '500' }}>By Money Today Desk</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
