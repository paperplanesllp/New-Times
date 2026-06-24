import React from 'react';

const companyLinks = [
  'RSS',
  'CONTACT US',
  'COOKIE POLICY',
  'TERMS & CONDITIONS',
  'PRIVACY POLICY',
  'ADVERTISE WITH US',
  'DISCLAIMER',
];

const categoryLinks = [
  'LEADERSHIP',
  'BILLIONAIRES',
  'INNOVATION',
  'STARTUPS',
  'VIDEOS',
  'PODCASTS',
  'PHOTOGALLERY',
  'AI TRACKER',
];

const specialLinks = [
  'NEWSLETTERS',
  'W-POWER 2026',
  'LISTS',
  'LEADERSHIP AWARDS',
  'INDIA RICH LIST 2025',
];

const socials = ['◉', '◍', '▶', '◎', 'f', 'in', 'X'];

function FooterColumn({ title, children, items }) {
  return (
    <div>
      <h3 className="font-sans text-[16px] font-semibold uppercase leading-tight text-white">
        {children || title}
      </h3>
      <div className="mt-5 space-y-[17px]">
        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className="block font-sans text-[14px] font-semibold uppercase leading-tight text-white no-underline hover:text-slate-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-screen mt-0 text-white -translate-x-1/2 bg-black left-1/2 right-1/2">
      <div className="mx-auto max-w-[1350px] px-6 pb-7 pt-10">
        <div className="grid gap-10 lg:grid-cols-[48%_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-[38px] font-semibold leading-none text-white">
              NewTimes
              <span className="ml-1 align-top font-sans text-[8px] font-semibold uppercase leading-none">
                India
              </span>
            </div>

            <p className="mt-[50px] inline-block px-1 font-sans text-[13px] font-medium uppercase leading-[16px] tracking-[0.02em] text-white">
              © Copyright 2026, NewTimes.com All Rights Reserved
            </p>

            <div className="mt-[46px] flex flex-wrap gap-4">
              {socials.map((item) => (
                <a
                  key={item}
                  href={`#social-${item}`}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white font-sans text-[14px] font-semibold text-black no-underline"
                  aria-label={`Social ${item}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" items={companyLinks} />
          <FooterColumn title="Categories" items={categoryLinks} />
          <FooterColumn items={specialLinks}>
            New-Times
            <br />
            Specials
          </FooterColumn>
        </div>

        <div className="pt-8 border-t mt-7 border-white/80">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 font-sans text-[23px] font-semibold leading-none text-white">
              <span>Network</span>
              <span className="bg-red-600 px-1.5 py-1 text-white">18</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
