import React from 'react';

export default function TvVideoGrid({ videos, onSelect, activeId }) {
  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#1e293b', borderLeft: '4px solid #0ea5e9', paddingLeft: '10px' }}>
        Recommended Broadcasts
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {videos.map((video) => (
          <div 
            key={video.id} 
            onClick={() => onSelect(video)}
            style={{ 
              cursor: 'pointer', 
              backgroundColor: activeId === video.id ? '#f0f9ff' : '#ffffff',
              border: activeId === video.id ? '2px solid #0ea5e9' : '1px solid #e2e8f0',
              borderRadius: '8px', 
              overflow: 'hidden',
              transition: 'all 0.2s'
            }}
          >
            <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '135px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4' }}>
                {video.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}