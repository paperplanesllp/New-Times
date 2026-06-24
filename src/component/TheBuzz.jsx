import React from 'react';


export default function TheBuzz() {
  // Mock Data for "THE BUZZ" section
  const buzzArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80",
      title: "ITMI-IIMT alliance: A Shared Vision",
      excerpt: "Greater Noida campus partnership ushers in a new era of 'digital media education.'",
      author: "Team BT"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-15ccba5c78652-32a76fbd0754?w=400&q=80",
      title: "RBI's monetary policy addresses concerns about imported inflation due to the tariffs",
      excerpt: "The RBI noted that though there is a risk of imported inflation because of the tariffs, the potential impact on...",
      author: "Teena Jain Kaushal"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
      title: "UBER: 'Safety key for popularity of autonomous cars', says Sachin Kansal, Chief Product Officer, Uber",
      excerpt: "Sachin Kansal, Chief Product Officer, Uber, shares insights on the company's autonomous vehicle...",
      author: "Chetan Bhutani"
    }
  ];

  // Mock Data for the Sponsored section below it
  const sponsoredArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
      title: "Option Trading: Mr. Gopal Reveals His Powerful Laxman Rekha Strategy For Free",
      excerpt: "Master the Art of Precise Option Trading with Gopal Sir's Laxman Rekha Strategy - for Free!",
      sponsor: "TradeWise",
      linkText: "Learn More"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=80",
      title: "Mr. Bala's Powerful Intraday Strategy Revealed — No More Guesswork",
      excerpt: "Join Bala Sir's Market Profile Masterclass and Book Your Profit By 11 AM, Sign Up Now For...",
      sponsor: "TradeWise",
      linkText: "Learn More"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=400&q=80",
      title: "Indians over 65 are switching from hearing aids to this new device.",
      excerpt: "Recommended by audiologist",
      sponsor: "Hearing Aids",
      linkText: "Learn More"
    }
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '3fr 1fr', 
      gap: '32px', 
      fontFamily: 'system-ui, sans-serif',
      marginBottom: '40px',
      alignItems: 'start'
    }}>
      
   
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* Header with "More" link */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #000', marginBottom: '20px' }}>
          <SectionHeader title="THE BUZZ" />
          <a href="#" style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', marginBottom: '12px' }}>
            More ▸
          </a>
        </div>

        {/* The Buzz Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {buzzArticles.map((article) => (
            <div key={article.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: '100%', height: '160px', objectFit: 'cover', marginBottom: '12px' }} 
              />
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111827', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                {article.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#4b5563', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                {article.excerpt}
              </p>
              <div style={{ color: '#dc2626', fontStyle: 'italic', fontSize: '14px', marginTop: 'auto' }}>
                {article.author}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {sponsoredArticles.map((article) => (
            <div key={article.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: '100%', height: '140px', objectFit: 'cover', marginBottom: '12px' }} 
              />
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', margin: '0 0 6px 0', lineHeight: '1.3' }}>
                {article.title}
              </h4>
              <p style={{ fontSize: '13px', color: '#4b5563', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                {article.excerpt}
              </p>
              
              {/* Sponsor Footer with Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase' }}>
                  {article.sponsor} | Sponsored
                </span>
                <button style={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #111827', 
                  color: '#111827', 
                  padding: '4px 12px', 
                  borderRadius: '16px', 
                  fontSize: '12px', 
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  {article.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>


      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', fontSize: '10px', color: '#9ca3af', marginBottom: '8px', letterSpacing: '0.5px' }}>ADVERTISEMENT</div>
        
        {/* Placeholder for the large vertical Ad */}
        <div style={{ 
          width: '100%', 
          height: '600px', // Tall ad space
          backgroundColor: '#f3f4f6', 
          border: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          padding: '20px',
          textAlign: 'center'
        }}>
          <span style={{ fontWeight: 'bold', marginBottom: '10px' }}>GoDaddy</span>
          <p style={{ fontSize: '14px', color: '#4b5563' }}>Build customer trust with an SSL plan from GoDaddy</p>
        </div>
      </div>

    </div>
  );
}