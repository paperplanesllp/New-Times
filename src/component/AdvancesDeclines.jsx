import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SectionHeader, Card } from './MarketUI'; // Assuming you saved your UI components here!

export default function AdvancesDeclines() {
  const [exchange, setExchange] = useState('NSE');

  // --- MOCK DATA ---
  // NSE (NIFTY 50 - Total 50 Stocks)
  const nseData = {
    indexName: "NIFTY 50",
    value: "23,269.40",
    change: "(0.23%)",
    changeColor: "#16a34a",
    date: "Jun 11, 2026 12:00 IST",
    status: "OPEN",
    advances: 22,
    declines: 28,
    chartData: [
      { time: '9:00', advance: 25, decline: 25 },
      { time: '9:15', advance: 28, decline: 22 },
      { time: '9:45', advance: 36, decline: 14 },
      { time: '10:00', advance: 32, decline: 18 },
      { time: '10:15', advance: 25, decline: 25 },
      { time: '10:30', advance: 20, decline: 30 },
      { time: '10:45', advance: 24, decline: 26 },
      { time: '11:00', advance: 23, decline: 27 },
      { time: '11:15', advance: 25, decline: 25 },
      { time: '11:30', advance: 23, decline: 27 },
      { time: '11:45', advance: 22, decline: 28 },
      { time: '12:00', advance: 22, decline: 28 },
    ]
  };

  // BSE (SENSEX - Total 30 Stocks)
  const bseData = {
    indexName: "SENSEX",
    value: "76,693.36",
    change: "(-0.15%)",
    changeColor: "#e11d48",
    date: "Jun 11, 2026 12:00 IST",
    status: "OPEN",
    advances: 12,
    declines: 18,
    chartData: [
      { time: '9:00', advance: 15, decline: 15 },
      { time: '9:15', advance: 18, decline: 12 },
      { time: '9:45', advance: 20, decline: 10 },
      { time: '10:00', advance: 16, decline: 14 },
      { time: '10:15', advance: 15, decline: 15 },
      { time: '10:30', advance: 10, decline: 20 },
      { time: '10:45', advance: 14, decline: 16 },
      { time: '11:00', advance: 12, decline: 18 },
      { time: '11:15', advance: 13, decline: 17 },
      { time: '11:30', advance: 12, decline: 18 },
      { time: '11:45', advance: 12, decline: 18 },
      { time: '12:00', advance: 12, decline: 18 },
    ]
  };

  const activeData = exchange === 'NSE' ? nseData : bseData;
  const totalStocks = activeData.advances + activeData.declines;
  const advancePercent = (activeData.advances / totalStocks) * 100;
  const declinePercent = (activeData.declines / totalStocks) * 100;

  return (
    <div style={{ marginBottom: '24px' }}>
      
      {/* HEADER WITH TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <SectionHeader title="ADVANCES & DECLINES" />
        
        {/* Custom Toggle Button */}
        <div style={{ display: 'flex', border: '1px solid #d1d5db', borderRadius: '4px', overflow: 'hidden', fontSize: '12px', fontWeight: 'bold' }}>
          <button 
            onClick={() => setExchange('NSE')}
            style={{ padding: '4px 12px', border: 'none', cursor: 'pointer', outline: 'none', backgroundColor: exchange === 'NSE' ? '#e0f2fe' : '#fff', color: exchange === 'NSE' ? '#0284c7' : '#6b7280' }}
          >
            NSE
          </button>
          <div style={{ width: '1px', backgroundColor: '#d1d5db' }}></div>
          <button 
            onClick={() => setExchange('BSE')}
            style={{ padding: '4px 12px', border: 'none', cursor: 'pointer', outline: 'none', backgroundColor: exchange === 'BSE' ? '#e0f2fe' : '#fff', color: exchange === 'BSE' ? '#0284c7' : '#6b7280' }}
          >
            BSE
          </button>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: '#1f2937', marginBottom: '16px', lineHeight: '1.5' }}>
        Advances means the number of stocks closing at a higher price than the previous day's close and Declines is the number of stocks closing at a lower price than the previous day's close
      </p>

      {/* MAIN CARD */}
      <Card style={{ padding: '20px' }}>
        
        {/* Card Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{activeData.indexName}</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{activeData.value}</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: activeData.changeColor }}>{activeData.change}</span>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#111827' }}>
            {activeData.date} <span style={{ color: '#d1d5db', margin: '0 4px' }}>—</span> <span style={{ color: '#16a34a' }}>{activeData.status}</span>
          </div>
        </div>

        {/* CHART AREA */}
        <div style={{ width: '100%', height: '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            {/* Stacked Area Chart */}
            <AreaChart data={activeData.chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fill: '#6b7280' }} 
                dy={10} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fill: '#6b7280' }} 
                domain={[0, totalStocks]} 
                ticks={[0, Math.round(totalStocks/2), totalStocks]} // Dynamic Y-Axis based on NSE vs BSE
              />
              <Tooltip />
              
              {/* Decline Area (Rendered first so it acts as the top stacked layer visually) */}
              <Area 
                type="monotone" 
                dataKey="decline" 
                stackId="1" 
                stroke="#fca5a5" 
                fill="#fce7f3" // Very light pink fill to match image
                fillOpacity={1} 
              />
              {/* Advance Area (Rendered second so it sits at the bottom) */}
              <Area 
                type="monotone" 
                dataKey="advance" 
                stackId="1" 
                stroke="#fca5a5" // Matching the border color from image
                fill="#fecaca" // Slightly darker pink for contrast
                fillOpacity={1} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* ADVANCE / DECLINE PROGRESS BAR */}
        <div style={{ marginTop: '20px' }}>
          
          {/* The visual bar */}
          <div style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${advancePercent}%`, backgroundColor: '#10b981', transition: 'width 0.5s ease' }}></div>
            <div style={{ width: '4px', backgroundColor: '#fff' }}></div> {/* White Gap */}
            <div style={{ width: `${declinePercent}%`, backgroundColor: '#ef4444', transition: 'width 0.5s ease' }}></div>
          </div>

          {/* The labels below the bar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px', gap: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '18px', color: '#10b981' }}>{activeData.advances}</span> 
              <span style={{ color: '#10b981' }}>Advance</span>
              <div style={{ width: '20px', height: '3px', backgroundColor: '#10b981', marginLeft: '4px' }}></div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#ef4444' }}>Decline</span>
              <div style={{ width: '20px', height: '3px', backgroundColor: '#ef4444', marginRight: '4px' }}></div>
              <span style={{ fontSize: '18px', color: '#ef4444' }}>{activeData.declines}</span>
            </div>
          </div>
        </div>

      </Card>
      
      <p style={{ fontSize: '13px', color: '#6b7280' }}>The Adv/Dec chart updates every 15 minutes.</p>
    </div>
  );
}   