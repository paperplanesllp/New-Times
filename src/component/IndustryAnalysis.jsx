import React from 'react';

const WIRE_BRIEFS = [
  {
    tag: 'SEMICONDUCTOR ECOSYSTEM',
    title: "Tata, Micron and OSAT Expansion Reshape India's Silicon Ambitions",
    summary:
      'Fabrication, packaging, and testing investments are moving from announcement stage to execution, creating the foundations for a domestic semiconductor value chain capable of supporting electronics manufacturing at scale.',
  },
  {
    tag: 'DEFENCE TECHNOLOGY',
    title: 'Autonomous Systems Become the Fastest-Growing Segment of Defence Modernisation',
    summary:
      'Drone platforms, AI-assisted surveillance systems, and indigenous defence electronics are attracting increased procurement activity as India expands domestic capability across next-generation warfare technologies.',
  },
  {
    tag: 'SPACE ECONOMY',
    title: "Private Launch Providers Accelerate India's Commercial Space Market",
    summary:
      'A growing ecosystem of launch vehicle operators, satellite manufacturers, and geospatial intelligence companies is transforming space from a government-led initiative into a commercially scalable industry.',
  },
  {
    tag: 'DIGITAL PUBLIC INFRASTRUCTURE',
    title: 'UPI, ONDC and Digital Identity Continue Their Global Scale Experiment',
    summary:
      "India's digital public infrastructure stack is processing unprecedented transaction volumes while expanding into commerce, logistics, identity verification, and public-service delivery use cases.",
  },
  {
    tag: 'ADVANCED MANUFACTURING',
    title: 'Electronics Production Shifts from Assembly to Strategic Manufacturing',
    summary:
      "New investments in components, batteries, semiconductors, and export-oriented production are pushing India's manufacturing ecosystem beyond assembly-led growth toward higher-value industrial capabilities.",
  },
];

export default function IndustryAnalysis() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', marginBottom: '48px' }}>
      <div style={{ borderBottom: '1px solid #0f172a', paddingBottom: '8px', marginBottom: '24px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0f172a' }}>
          Executive Briefings & Dispatches
        </h3>
      </div>

      <div>
        {WIRE_BRIEFS.map((brief, idx) => (
          <article
            key={brief.tag}
            style={{
              borderBottom: idx !== WIRE_BRIEFS.length - 1 ? '1px solid #e2e8f0' : 'none',
              paddingBottom: '24px',
              marginBottom: idx !== WIRE_BRIEFS.length - 1 ? '24px' : 0,
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#b45309', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              {brief.tag}
            </span>
            <h4 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '24px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0', lineHeight: '1.25' }}>
              {brief.title}
            </h4>
            <p style={{ maxWidth: '900px', fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
              {brief.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
