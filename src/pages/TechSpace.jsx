import React from 'react';
import TechHubHeader from '../component/TechHubHeader';
import TechLaunchTable from '../component/TechLaunchTable';
import TechNewsGrid from '../component/TechNewsGrid';

export default function TechSpace() {
  return (
    <main className="mx-auto min-h-[85vh] max-w-6xl bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <TechHubHeader />
      <TechLaunchTable />
      <TechNewsGrid />
    </main>
  );
}
