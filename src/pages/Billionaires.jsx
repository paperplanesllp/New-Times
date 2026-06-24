import React from 'react';
import BillionairesTable from '../component/BillionairesTable';
import BillionairesNewsGrid from '../component/BillionairesNewsGrid';

export default function Billionaires() {
  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <BillionairesTable />
       <BillionairesNewsGrid/>
    </main>
  );
}
