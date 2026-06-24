import React from 'react';

const DAILY_QUOTES = [
  {
    quote:
      "When your strategy, discipline, and ambition point in the same direction, momentum becomes easier to sustain.",
    author: 'New Times Editorial',
    role: 'Business Desk',
  },
  {
    quote:
      "Great companies are not built by chasing every opportunity. They are built by choosing the right few and executing with patience.",
    author: 'Anika Rao',
    role: 'Founder Advisor',
  },
  {
    quote:
      "Capital rewards clarity. The sharper the story, the easier it becomes for teams, customers, and investors to believe.",
    author: 'Dev Mehta',
    role: 'Investor',
  },
  {
    quote:
      "Leadership is the ability to turn uncertainty into a useful operating rhythm before the market catches up.",
    author: 'Maya Kapoor',
    role: 'Writer',
  },
  {
    quote:
      "The strongest businesses protect their focus as carefully as they protect their cash.",
    author: 'Rohan Sen',
    role: 'Operator',
  },
  {
    quote:
      "A durable founder learns when to move fast, when to wait, and when to say no with conviction.",
    author: 'Isha Malhotra',
    role: 'Entrepreneur',
  },
  {
    quote:
      "Growth becomes powerful when it is supported by trust, repeatability, and the discipline to measure what matters.",
    author: 'Karan Shah',
    role: 'Business Strategist',
  },
];

const shareIcons = [
  {
    label: 'Share',
    icon: (
      <path d="M18 8a3 3 0 1 0-2.82-4H15a3 3 0 0 0 .18 1L8.9 8.64a3 3 0 1 0 0 2.72l6.28 3.65A3 3 0 1 0 16 13.2l-6.28-3.65a3.2 3.2 0 0 0 0-.9L16 5a3 3 0 0 0 2 3Z" />
    ),
  },
  {
    label: 'Facebook',
    icon: <path d="M13.5 8H16V4h-2.5C10.6 4 9 5.8 9 8.6V11H6v4h3v7h4v-7h3l.5-4H13V8.9c0-.6.2-.9.5-.9Z" />,
  },
  {
    label: 'X',
    icon: <path d="M5 4h4.4l3.1 4.3L16.2 4H20l-5.5 6.4L21 20h-4.4l-3.5-5-4.3 5H5l6.1-7.1L5 4Z" />,
  },
  {
    label: 'LinkedIn',
    icon: <path d="M5 8h4v12H5V8Zm2-5a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 7 3Zm5 5h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.4 2.7 4.4 6.1V20h-4v-5.4c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V20h-4V8Z" />,
  },
  {
    label: 'Email',
    icon: <path d="M4 6h16v12H4V6Zm2 2v.4l6 4.1 6-4.1V8H6Zm12 8v-5.2l-6 4-6-4V16h12Z" />,
  },
];

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function DailyQuote() {
  const quote = DAILY_QUOTES[getDayOfYear(new Date()) % DAILY_QUOTES.length];

  return (
    <section className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative border-[10px] border-[#efe6bd] bg-white px-5 pb-10 pt-9 text-center sm:px-10 lg:px-20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-6 text-sm font-medium uppercase tracking-[0.12em] text-slate-700 sm:text-lg">
          Quote of the Day
        </div>

        <blockquote className="mx-auto max-w-6xl font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
          &ldquo;{quote.quote}&rdquo;
        </blockquote>

        <div className="mt-5 text-base text-slate-950">
          <span className="font-bold">{quote.author}</span>
          <span className="text-slate-600">, {quote.role}</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 text-slate-500">
          {shareIcons.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex h-6 w-6 items-center justify-center transition hover:text-slate-950"
              aria-label={item.label}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                {item.icon}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
