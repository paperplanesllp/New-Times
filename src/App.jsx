import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import BreakingTicker from './components/BreakingTicker';
import Footer from './component/Footer';
import DailyQuote from './component/DailyQuote';
import ScrollToTop from './component/ScrollToTop';
import Home from './pages/Home';

import Magazines from './pages/Magazines'; 
import Billionaires from './pages/Billionaires';
import TopStories from './pages/TopStories';

import Economy from './pages/Economy';
import NTSpotlight from './pages/NTSpotlight';
import SpotlightFeaturePage from './pages/SpotlightFeaturePage';
import CoverStories from './pages/CoverStories';
import CreatorsEconomy from './pages/CreatorsEconomy';
import Blogs from './pages/Blogs';

import TechSpace from './pages/TechSpace';
import IndustrySpace from './pages/IndustrySpace';
import MoneyTodaySpace from './pages/MoneyTodaySpace';
import Subscribe from './pages/Subscribe';
import Search from './pages/Search';

export default function App() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen font-sans bg-white text-gray-950">
      <ScrollToTop />
      <Navbar />
      {isHomePage && <BreakingTicker />}

      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/magazine" element={<Magazines />} />
        <Route path="/billionaires" element={<Billionaires />} />
        <Route path="/top-stories" element={<TopStories />} />
       
        <Route path="/economy" element={<Economy />} />
        <Route path="/spotlight" element={<NTSpotlight />} />
        <Route path="/spotlight/business-features" element={<SpotlightFeaturePage type="business-features" />} />
        <Route path="/spotlight/recognise-series" element={<SpotlightFeaturePage type="recognise-series" />} />
        <Route path="/spotlight/startup" element={<SpotlightFeaturePage type="startup" />} />
        <Route path="/spotlight/cover-feature" element={<SpotlightFeaturePage type="cover-feature" />} />
        <Route path="/cover-stories" element={<CoverStories />} />
        <Route path="/creators-economy" element={<CreatorsEconomy />} />
        <Route path="/blogs" element={<Blogs />} />
        
        <Route path="/tech" element={<TechSpace />} />
        <Route path="/industry" element={<IndustrySpace />} />
        <Route path="/money" element={<MoneyTodaySpace />} />
        <Route path="/subscribe" element={<Subscribe />} /> 
        <Route path="/search" element={<Search />} />
      </Routes>

      {isHomePage && <DailyQuote />}
      <Footer />
    </div>
  );
}
    
