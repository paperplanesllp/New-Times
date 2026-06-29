import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newTimesLogo from '../assets/New Times final-02.png';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [openDrawerSections, setOpenDrawerSections] = useState({
    spotlight: false,
  });

  const moreLinks = [
    { label: 'CREATORS ECONOMY', to: '/creators-economy' },
    { label: 'BLOGS', to: '/blogs' },
  ];

  const spotlightLinks = [
    { label: 'BUSINESS FEATURES', to: '/spotlight/business-features' },
    { label: 'RECOGNITION SERIES', to: '/spotlight/recognise-series' },
    { label: 'STARTUP', to: '/spotlight/startup' },
    { label: 'COVER FEATURE', to: '/spotlight/cover-feature' },
  ];

  const drawerLinks = [
    { label: 'HOME', to: '/' },
    {
      label: 'SPOTLIGHT',
      key: 'spotlight',
      children: spotlightLinks,
    },
    { label: 'TECHNOLOGY', to: '/tech' },
    { label: 'BUSINESS ENQUIRY', to: '/subscribe' },
  ];

  const drawerSocials = ['f', 't', '◎', '▶', 'in'];

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen((current) => !current);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
  };

  const toggleDrawerSection = (section) => {
    setOpenDrawerSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  const Brand = () => (
    <Link
      to="/"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      className="relative block h-9 w-[176px] overflow-hidden no-underline sm:h-10 sm:w-[192px]"
      aria-label="New Times home"
    >
      <img
        src={newTimesLogo}
        alt="New Times"
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          width: '220px',
          height: '220px',
          left: '-13px',
          top: '-90px',
        }}
      />
    </Link>
  );

  const navLink =
    'relative inline-flex items-center justify-center whitespace-nowrap px-2 py-[22px] pb-4 text-[13px] font-extrabold uppercase tracking-[0.03em] text-white no-underline transition hover:text-white';

  const navBadge =
    'absolute left-1/2 top-1 inline-flex h-[16px] min-w-[38px] -translate-x-1/2 items-center justify-center rounded-full bg-[#ff2d55] px-2 text-[9px] font-black uppercase leading-none tracking-[0.04em] text-white';

  return (
    <>
      <header className="sticky top-0 z-[1000] w-full bg-black font-sans text-white">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 sm:px-6">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex w-8 cursor-pointer flex-col gap-1.5 p-1"
            aria-label="Open menu"
          >
            <span className="h-[3px] w-full rounded bg-white" />
            <span className="h-[3px] w-3/4 rounded bg-white" />
            <span className="h-[3px] w-full rounded bg-white" />
          </button>

          <Brand />

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/subscribe"
              className="hidden bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 px-5 py-2.5 text-sm font-black text-black sm:block"
            >
              Subscribe
            </Link>

            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              {isSearchOpen && (
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search"
                  className="h-9 w-[150px] border border-white/20 bg-white px-3 font-sans text-sm font-semibold text-black outline-none placeholder:text-slate-500 sm:w-[220px]"
                  aria-label="Search New Times"
                />
              )}
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
                className="flex h-10 w-10 items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <nav className="flex min-h-[64px] w-full items-center justify-start gap-5 overflow-x-auto bg-black px-4 sm:justify-center sm:px-6 lg:gap-6 lg:overflow-visible">
          <Link to="/" className={navLink}>HOME</Link>
          <Link to="/magazine" className={navLink}>MAGAZINE</Link>
          <Link to="/billionaires" className={navLink}>NT BILLIONAIRES</Link>
          <Link to="/economy" className={navLink}>ECONOMY</Link>
          <div className="relative items-center self-stretch hidden lg:flex group">
            <Link to="/spotlight" className={navLink}>
              <span className={navBadge}>NEW</span>
              NT SPOTLIGHT
            </Link>
            <div className="invisible absolute left-0 top-full w-[250px] border-t border-slate-200 bg-white px-3 pb-1 pt-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <span className="absolute -top-1 left-3 h-1 w-[42px] bg-red-600" />
              {spotlightLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block border-b border-slate-200 py-2.5 font-serif text-[13px] font-bold text-black no-underline last:border-b-0 hover:text-red-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/spotlight" className={`${navLink} lg:hidden`}>
            <span className={navBadge}>NEW</span>
            NT SPOTLIGHT
          </Link>
          <Link to="/tech" className={navLink}>TECH</Link>
          <Link to="/industry" className={navLink}>INDUSTRY</Link>
          <Link to="/money" className={navLink}>MONEY TODAY</Link>

          <div className="relative items-center self-stretch hidden lg:flex group">
            <Link to="/creators-economy" className={navLink}>MORE</Link>
            <div className="invisible absolute right-0 top-full w-[230px] border-t border-slate-200 bg-white px-3 pb-1 pt-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <span className="absolute -top-1 right-3 h-1 w-[42px] bg-red-600" />
              {moreLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block border-b border-slate-200 py-2.5 font-serif text-[13px] font-bold text-black no-underline last:border-b-0 hover:text-red-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/creators-economy" className={`${navLink} lg:hidden`}>MORE</Link>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/65 font-sans text-white">
          <div className="flex min-h-screen w-full max-w-[463px] flex-col overflow-y-auto bg-black px-6 pb-8 pt-2 shadow-2xl">
            <div className="relative flex min-h-[82px] items-start justify-center">
              <Link
                to="/"
                onClick={closeMenu}
                className="relative mt-2 block h-10 w-[182px] overflow-hidden no-underline"
                aria-label="New Times home"
              >
                <img
                  src={newTimesLogo}
                  alt="New Times"
                  className="absolute pointer-events-none select-none max-w-none"
                  style={{
                    width: '190px',
                    height: '190px',
                    left: '0px',
                    top: '-76px',
                  }}
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-0 flex items-center justify-center w-10 h-10 transition top-1 text-slate-500 hover:text-white"
                aria-label="Close menu"
              >
                <span className="absolute h-[4px] w-9 rotate-45 rounded bg-current" />
                <span className="absolute h-[4px] w-9 -rotate-45 rounded bg-current" />
              </button>
            </div>
            <nav className="mt-2">
              {drawerLinks.map((item) => {
                const expanded = item.key ? openDrawerSections[item.key] : false;
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleDrawerSection(item.key)}
                        className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-sans text-[16px] font-semibold uppercase leading-none text-white"
                      >
                        <span>{item.label}</span>
                        <span className="text-[28px] font-semibold leading-none text-pink-600">
                          {expanded ? '-' : '+'}
                        </span>
                      </button>
                      {expanded && (
                        <div className="pb-1 border-b border-white/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={closeMenu}
                              className="ml-4 block border-b border-white/10 py-[14px] font-sans text-[15px] font-semibold uppercase leading-none text-white no-underline last:border-b-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={closeMenu}
                    className="block border-b border-white/10 py-4 font-sans text-[16px] font-semibold uppercase leading-none text-white no-underline"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-16 text-center">
              <p className="font-sans text-[13px] font-medium uppercase text-zinc-500">
                Connect With Us
              </p>
              <div className="flex justify-center gap-3 mt-5">
                {drawerSocials.map((item) => (
                  <a
                    key={item}
                    href={`#drawer-social-${item}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 font-sans text-[17px] font-black text-white no-underline"
                    aria-label={`Social ${item}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
