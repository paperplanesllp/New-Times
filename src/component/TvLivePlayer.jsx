import React from 'react';

export default function TvLivePlayer({ activeVideo }) {
  return (
    <div style={{ backgroundColor: '#111315', borderRadius: '12px', padding: '24px', color: '#fff', marginBottom: '24px' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', backgroundColor: '#000' }}>
        <video 
          src={activeVideo.videoUrl} 
          controls 
          autoPlay 
          muted
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
      <h1 style={{ fontSize: '24px', fontWeight: '700', marginTop: '20px', marginBottom: '8px', color: '#fff' }}>
        {activeVideo.title}
      </h1>
      <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
        {activeVideo.description}
      </p>
    </div>
  );
}