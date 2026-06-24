import React from 'react';
import FinanceTickerGrid from '../component/FinanceTickerGrid';
import EditorialWire from '../component/EditorialWire';
import InteractiveToolbox from '../component/InteractiveToolbox';

export default function MoneyTodaySpace() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <FinanceTickerGrid />
        <EditorialWire />
        <InteractiveToolbox />
      </div>
    </main>
  );
}
