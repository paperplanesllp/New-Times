import React from 'react';
import IndustryMetrics from '../component/IndustryMetrics';
import IndustryAnalysis from '../component/IndustryAnalysis';
import CorporateRegistry from '../component/CorporateRegistry';

export default function IndustrySpace() {
  return (
    <main className="min-h-screen px-4 py-10 bg-white sm:px-6 lg:px-8">
      <div className="max-w-6xl p-5 mx-auto bg-white border border-gray-200 sm:p-8 lg:p-10">
        <IndustryMetrics />
        <IndustryAnalysis />
        <CorporateRegistry />
      </div>
    </main>
  );
}
