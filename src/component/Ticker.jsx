import React from 'react';

const Ticker = ({ items }) => {
  if (!items || items.length === 0) return null;

  // --- Exact Styling from New Video ---
  const wrapperStyle = {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #eaeaea',
    borderBottom: '1px solid #eaeaea',
    padding: '12px 0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
  };

  const trackStyle = {
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    animation: 'ticker-scroll 25s linear infinite', // Smoothed out scroll speed
  };

  const itemStyle = {
    display: 'inline-flex',
    alignItems: 'baseline', // Aligns the text baselines perfectly
    padding: '0 30px', // Spacing between different stocks
    gap: '8px', // Spacing between name, value, and change
  };

  const nameStyle = {
    fontWeight: '700', // Matches the bolder stock names in the video
    color: '#000000',
  };

  const valueStyle = {
    color: '#000000',
    fontWeight: '400',
  };

  const renderTickerItems = (keyPrefix) => {
    return items.map((item, index) => {
      if (item.type === 'headline') {
        return (
          <div style={itemStyle} key={`${keyPrefix}-${index}`}>
            <span style={nameStyle}>{item.name}</span>
            <span style={valueStyle}>{item.value}</span>
          </div>
        );
      }

      const isNegative = String(item.change).startsWith('-');
      
      const changeStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: '400',
        // Matches the specific soft pinkish-red seen in the video for negatives
        color: isNegative ? '#f05261' : '#16a34a', 
        gap: '4px'
      };

      return (
        <div style={itemStyle} key={`${keyPrefix}-${index}`}>
          <span style={nameStyle}>{item.name}</span>
          <span style={valueStyle}>{item.value}</span>
          <span style={changeStyle}>
            {isNegative ? (
              /* Smaller, thicker downward arrow to match video */
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ position: 'relative', top: '1px' }}>
                <path d="M11 4v11.17l-4.59-4.59L5 12l7 7 7-7-1.41-1.41L13 15.17V4h-2z" />
              </svg>
            ) : (
              /* Smaller, thicker upward arrow */
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ position: 'relative', top: '1px' }}>
                <path d="M13 20V8.83l4.59 4.59L19 12l-7-7-7 7 1.41 1.41L11 8.83V20h2z" />
              </svg>
            )}
            {item.change} ({item.percent})
          </span>
        </div>
      );
    });
  };

  return (
    <div style={wrapperStyle} className="video-ticker-wrapper">
      <style>
        {`
          @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .video-ticker-wrapper:hover .video-ticker-track {
            animation-play-state: paused !important;
            cursor: default;
          }
        `}
      </style>

      <div style={trackStyle} className="video-ticker-track">
        {/* Original Set */}
        {renderTickerItems('orig')}
        
        {/* Duplicated Set to ensure smooth infinite loop */}
        {renderTickerItems('dup')}
      </div>
    </div>
  );
};

export default Ticker;
