import React from 'react';

export default function BillionairesTable() {
  const billionairesData = [
    { rank: 1, name: "Mukesh Ambani", wealth: "$92.5B", company: "Reliance Industries", industry: "Energy, Telecom, Retail", globalRank: "18" },
    { rank: 2, name: "Gautam Adani", wealth: "$56.3B", company: "Adani Group", industry: "Infrastructure, Ports, Energy", globalRank: "28" },
    { rank: 3, name: "Savitri Jindal & family", wealth: "$35.5B", company: "JSW Group / Jindal Steel & Power", industry: "Steel, Energy", globalRank: "-" },
    { rank: 4, name: "Shiv Nadar", wealth: "$34.5B", company: "HCL Technologies", industry: "IT Services", globalRank: "-" },
    { rank: 5, name: "Dilip Shanghvi", wealth: "$24.9B", company: "Sun Pharmaceutical", industry: "Pharmaceuticals", globalRank: "-" },
    { rank: 6, name: "Cyrus Poonawalla", wealth: "$23.1B", company: "Serum Institute of India", industry: "Vaccines", globalRank: "-" },
    { rank: 7, name: "Kumar Mangalam Birla", wealth: "$20.9B", company: "Aditya Birla Group", industry: "Textiles, Telecom, Cement", globalRank: "-" },
    { rank: 8, name: "Lakshmi Mittal", wealth: "$19.2B", company: "ArcelorMittal", industry: "Steel", globalRank: "-" },
    { rank: 9, name: "Radhakishan Damani", wealth: "$15.4B", company: "Avenue Supermarts (DMart)", industry: "Retail", globalRank: "-" },
    { rank: 10, name: "Kushal Pal Singh", wealth: "$14.5B", company: "DLF", industry: "Real Estate", globalRank: "-" },
  ];

  return (
    <section className="px-1 mt-12 font-serif bg-white text-gray-950">
      <div className="pb-2 border-b border-gray-300 mb-7">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-bold text-black">
          India's Billionaires: A Growing Force in Global Wealth
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 pb-3 font-sans border-b border-gray-100 mb-7">
        {['2025 FORBES LIST', '205 BILLIONAIRES', '$941B TOTAL WEALTH', 'INDIA RANKS THIRD'].map((label, index) => (
          <span
            key={label}
            className={`border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] ${index === 0 ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-slate-600'}`}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="mb-7 max-w-5xl font-serif text-[15px] leading-7 text-slate-700">
        India ranks third in the world by billionaire count, with 205 billionaires on the 2025 Forbes list, trailing only the United States (902) and China including Hong Kong (516). Collectively, Indian billionaires are worth $941 billion, a slight dip from $954 billion the previous year, largely due to stock declines at the conglomerates of the country's two richest individuals.
      </p>

      <div className="overflow-x-auto border-b border-gray-200">
        <table className="w-full min-w-[900px] border-collapse text-left font-sans text-sm">
          <thead>
            <tr className="border-b border-gray-300 bg-white text-[11px] uppercase tracking-[0.04em] text-slate-500">
              <th className="px-4 py-3 font-bold">Rank (India)</th>
              <th className="px-4 py-3 font-bold">Person</th>
              <th className="px-4 py-3 font-bold">Net Worth ($B)</th>
              <th className="px-4 py-3 font-bold">Company</th>
              <th className="px-4 py-3 font-bold">Industry</th>
              <th className="px-4 py-3 font-bold">Global Rank</th>
            </tr>
          </thead>
          <tbody>
            {billionairesData.map((person) => (
              <tr key={person.rank} className="bg-white border-b border-gray-100 last:border-b-0">
                <td className="px-4 py-4 font-bold text-black">{person.rank}</td>
                <td className="px-4 py-4 font-semibold text-black">{person.name}</td>
                <td className="px-4 py-4 font-bold text-black">{person.wealth}</td>
                <td className="px-4 py-4 text-slate-600">{person.company}</td>
                <td className="px-4 py-4 text-slate-600">{person.industry}</td>
                <td className="px-4 py-4 text-slate-600">{person.globalRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     

      <div className="pt-5 mt-10 border-t border-black">
        <h3 className="mb-3 font-sans text-lg font-extrabold text-black">India Wealth Notes</h3>
        <p className="m-0 max-w-4xl font-serif text-[15px] leading-7 text-slate-700">
          Mukesh Ambani has held the title of India's richest person for 14 consecutive years, while Savitri Jindal is currently India's wealthiest woman. Beyond the top 10, India's billionaire base reflects a mix of legacy industrial families (Birla, Jindal, Mittal) and newer wealth from pharmaceuticals, IT services, and retail.
        </p>
      </div>
    </section>
  );
}
