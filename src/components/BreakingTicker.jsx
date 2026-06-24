import React, { useMemo, useState } from 'react';

const tickerItems = [
  {
    id: 1,
    tag: 'Breaking',
    time: '2 hours ago',
    title: 'Middle East Tensions Could Reduce Indian Airlines’ Profits by Up to 15% This Fiscal  ',
    
  },
  {
    id: 2,
    tag: 'Business',
    time: '12 hours ago',
    title: 'SpaceX Surpasses Amazon to Join the World’s Top 5 Most Valuable Companies ',
    
  },
  {
    id: 3,
    tag: 'Capital',
    time: '1 day ago',
    title: 'India Defies Global Headwinds to Achieve Record $863 Billion in Exports',
    
  },
  {
    id: 4,
    tag: 'Technology',
    time: '1 day ago',
    title: 'India-EU Free Trade Deal Expected to Be Signed by End of 2026',
   
  },
  {
    id: 5,
    tag: 'Leadership',
    time: '2 days ago',
    title: "India's IPO Market Continues Strong Run With Multiple New Issues Opening This Week",
    
  },
  {
    id: 6,
    tag: 'Economy',
    time: '2 days ago',
    title: 'NSE IPO Could Propel Exchange Into India’s Top 10 Most Valuable Companies at ₹5 Lakh Crore Valuation ',
    
  },
];

export default function BreakingTicker() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleItems = useMemo(
    () =>
      tickerItems.map((_, index) => {
        const itemIndex = (activeIndex + index) % tickerItems.length;
        return tickerItems[itemIndex];
      }),
    [activeIndex],
  );

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? tickerItems.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % tickerItems.length);
  };

  return (
    <section className="w-full bg-white border-y border-neutral-200">
      <div className="mx-auto flex min-h-[130px] max-w-[1500px] items-stretch px-4 sm:px-6 lg:min-h-[150px] lg:px-8">
        <div className="flex items-center pr-3 sm:pr-5">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dc2626] text-xl leading-none text-white transition hover:bg-red-700"
            aria-label="Previous breaking story"
          >
            &lsaquo;
          </button>
        </div>

        <div className="grid flex-1 min-w-0 grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.slice(0, 4).map((item, index) => (
            <article
              key={`${item.id}-${activeIndex}`}
              className={`flex min-h-[130px] flex-col justify-center px-5 py-5 transition duration-300 lg:min-h-[150px] ${
                index > 0 ? 'border-l border-neutral-200' : ''
              } ${index > 0 ? 'hidden sm:flex' : ''} ${
                index > 1 ? 'sm:hidden lg:flex' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {index === 0 && (
                  <span className="bg-[#dc2626] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Breaking
                  </span>
                )}
                {index !== 0 && (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {item.tag}
                  </span>
                )}
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {item.time}
                </span>
              </div>

              <a
                href={item.link}
                className="font-serif text-[20px] font-bold leading-tight text-black underline-offset-4 transition hover:underline"
              >
                {item.title}
              </a>
            </article>
          ))}
        </div>

        <div className="flex items-center pl-3 sm:pl-5">
          <button
            type="button"
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dc2626] text-xl leading-none text-white transition hover:bg-red-700"
            aria-label="Next breaking story"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
}
