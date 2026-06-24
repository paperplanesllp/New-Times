import React from 'react';

export default function Magazine() {
  // Mock data perfectly matching the dates and style in your screenshot
  const magazineIssues = [
    {
      id: 1,
      date: "2026-06-21",
      cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32f7?w=400&q=80",
      alt: "India's Most Sustainable Companies"
    },
    {
      id: 2,
      date: "2026-06-07",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      alt: "Making of a Titan"
    },
    {
      id: 3,
      date: "2026-05-24",
      cover: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      alt: "Global Ambitions"
    },
    {
      id: 4,
      date: "2026-05-10",
      cover: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      alt: "The Handset Boom"
    },
    {
      id: 5,
      date: "2026-04-26",
      cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
      alt: "Time to Step Up"
    }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', marginBottom: '40px' }}>
      
      {/* Injected CSS for hiding scrollbars and adding smooth hover effects */}
      <style>
        {`
          .magazine-carousel::-webkit-scrollbar {
            display: none;
          }
          .magazine-card {
            transition: transform 0.3s ease;
          }
          .magazine-card:hover {
            transform: translateY(-5px);
          }
          .nav-btn:hover {
            background-color: #f3f4f6 !important;
            color: #000 !important;
          }
        `}
      </style>

      {/* Main Premium Container with Split Background */}
      <div style={{ 
        // This creates the exact 85% Dark Blue / 15% White split background seen in the image
        background: 'linear-gradient(to bottom, #0f224b 0%, #0f224b 82%, #ffffff 82%, #ffffff 100%)',
        padding: '20px 0 0 0',
        position: 'relative'
      }}>
        
        {/* Top Navigation Arrows */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 24px', marginBottom: '12px', gap: '8px' }}>
          <button className="nav-btn" style={{ 
            width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
          }}>
            &lt;
          </button>
          <button className="nav-btn" style={{ 
            width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: '#fff', color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
          }}>
            &gt;
          </button>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="magazine-carousel" style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '24px', 
          padding: '0 24px 20px 24px',
          scrollBehavior: 'smooth',
          // Required to hide scrollbar in Firefox
          scrollbarWidth: 'none' 
        }}>
          {magazineIssues.map((mag) => (
            <div key={mag.id} className="magazine-card" style={{ flex: '0 0 auto', width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Cyan Highlight Border (Exactly like the image) */}
              <div style={{ 
                border: '4px solid #00bbf9', 
                borderRadius: '2px', 
                overflow: 'hidden', 
                height: '290px', 
                width: '100%',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#fff'
              }}>
                <img 
                  src={mag.cover} 
                  alt={mag.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Date Text (Sits on the white part of the background) */}
              <div style={{ 
                marginTop: '16px', 
                fontWeight: '800', 
                fontSize: '15px', 
                color: '#000',
                letterSpacing: '0.5px'
              }}>
                {mag.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* "MONEY today" Footer Strip */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 24px',
        borderBottom: '2px solid #e5e7eb',
        borderTop: '1px solid #e5e7eb',
        marginTop: '10px'
      }}>
        {/* Mock Logo Layout */}
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: '900', fontSize: '24px', letterSpacing: '-1px' }}>
          <span style={{ color: '#000' }}>M</span>
          <span style={{ color: '#00bbf9' }}>O</span>
          <span style={{ color: '#000' }}>NEY</span>
          <span style={{ color: '#00bbf9', fontSize: '18px', marginLeft: '4px', letterSpacing: '0' }}>today</span>
        </div>

        <a href="#" style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          More <span style={{ fontSize: '16px' }}>▸</span>
        </a>
      </div>

    </div>
  );
}