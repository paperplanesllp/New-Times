import React from 'react';
import { Link } from 'react-router-dom';
import newTimesLogo from '../assets/New Times final-02.png';

const companyLinks = [
  'CONTACT US',
  'COOKIE POLICY',
  'TERMS & CONDITIONS',
  'PRIVACY POLICY',
  'DISCLAIMER',
];

const partnerLinks = [
  { label: 'GET FEATURED', to: '/partner/get-featured' },
  { label: 'AD OPTIONS', to: '/partner/ad-options' },
  { label: 'AGENCY PARTNERSHIP', to: '/partner/agency-partnership' },
  { label: 'MEDIA PARTNERSHIP', to: '/partner/media-partnership' },
];

const categoryLinks = [
  'SpotLight',
  'BILLIONAIRES',
  'STARTUPS',  
  'MAGAZINE',
];

const specialLinks = [
  'LISTS',
  'NT AWARDS',
  
];

const socials = [
  {
    label: 'Instagram',
    text: 'ig',
    href: 'https://www.instagram.com/newtimesindia/',
  },
  {
    label: 'LinkedIn',
    text: 'in',
    href: 'https://www.newtimes.in/',
  },
];

function FooterColumn({ title, children, items, showPartnerLinks = false, showFeaturedButton = false }) {
  return (
    <div>
      <h3 className="text-[16px] font-semibold uppercase leading-tight text-white">
        {children || title}
      </h3>
      <div className="mt-5 space-y-[17px]">
        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className="block text-[14px] font-semibold uppercase leading-tight text-white no-underline hover:text-slate-300"
          >
            {item}
          </a>
        ))}
        {showPartnerLinks && (
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-semibold uppercase leading-tight text-white hover:text-slate-300">
              <span>Partner With Us</span>
              <span className="text-lg leading-none transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-4 space-y-3 border-l border-white/25 pl-4">
              {partnerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-[13px] font-semibold uppercase leading-tight text-white/85 no-underline hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        )}
        {showFeaturedButton && (
          <Link
            to="/partner/get-featured"
            className="group/featured mt-2 inline-flex min-h-12 items-center justify-center border border-white bg-white px-5 text-[12px] font-black uppercase leading-none tracking-[0.18em] text-black no-underline shadow-[0_14px_35px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white hover:shadow-[0_18px_45px_rgba(29,78,216,0.35)]"
          >
            Get Featured
            <span className="ml-2 transition duration-300 group-hover/featured:translate-x-1">-&gt;</span>
          </Link>
        )}
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
            <div className="relative h-12 w-[230px] overflow-hidden" aria-label="New Times">
              <img
                src={newTimesLogo}
                alt="New Times"
                className="absolute pointer-events-none select-none max-w-none"
                style={{
                  width: '265px',
                  height: '265px',
                  left: '-14px',
                  top: '-108px',
                }}
              />
            </div>

            <p className="mt-[50px] inline-block px-1 text-[13px] font-medium uppercase leading-[16px] tracking-[0.02em] text-white">
              © Copyright 2026, NewTimes.in All Rights Reserved
            </p>

            <div className="mt-[46px] flex flex-wrap gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-[14px] font-semibold text-black no-underline"
                  aria-label={item.label}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" items={companyLinks} showPartnerLinks />
          <FooterColumn title="Categories" items={categoryLinks} />
          <FooterColumn items={specialLinks} showFeaturedButton>
            NewTimes
            <br />
            Specials
          </FooterColumn>
        </div>

        <div className="pt-8 border-t mt-7 border-white/80">
          <div className="flex justify-center">
          
          </div>
        </div>
      </div>
    </footer>
  );
}
