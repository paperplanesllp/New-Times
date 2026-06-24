import React from 'react';

const FOUNDER_STRATEGIES = [
  {
    id: 1,
    topic: 'Margin-First Playbook',
    insight: 'Trim growth spend and sharpen unit economics to make premium capital work harder.',
    priority: 'High',
    action: 'Identify three initiatives that improve gross margin by 8-12% over the next quarter.',
    difficulty: 'Strategic',
  },
  {
    id: 2,
    topic: 'Customer-Led Product Motion',
    insight: 'Turn loyal customers into proof for the next stage of growth.',
    priority: 'Medium',
    action: 'Build reference accounts, renewal stories, and expansion signals investors can trust.',
    difficulty: 'Tactical',
  },
  {
    id: 3,
    topic: 'Founder-Led Storytelling',
    insight: 'Shape the company story around durable demand and real ownership.',
    priority: 'High',
    action: 'Create a founder memo focused on customer economics, market timing, and long-term power.',
    difficulty: 'Executive',
  },
  {
    id: 4,
    topic: 'Operating Leverage',
    insight: 'Convert team spend into visible output before the next milestone.',
    priority: 'Medium',
    action: 'Audit hiring, tooling, and infrastructure so every major cost has a measurable return.',
    difficulty: 'Operational',
  },
];

export default function FounderSandbox() {
  const mainStrategy = FOUNDER_STRATEGIES[0];
  const sideStrategies = FOUNDER_STRATEGIES.slice(1);

  return (
    <section className="px-4 py-8 font-serif sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
         Founder Brief <span className="text-lg font-normal">-&gt;</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <div className="border-gray-200 lg:border-r lg:pr-6">
         
          <h3 className="m-0 font-serif text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
            Strategies That Turn Vision Into Growth
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
           A founder's guide to aligning vision, capital, and market opportunity
          </p>

          <div className="pt-5 mt-6 border-t border-gray-200">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Priority score
            </div>
            <div className="mt-3 font-serif text-5xl font-semibold text-slate-950">9.1</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This quarter's founder agenda should tilt toward repeatable growth with cash preservation in equal measure.
            </p>
          </div>
        </div>

        <div>
          <article className="pb-6 border-b border-gray-100">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {mainStrategy.topic} / {mainStrategy.difficulty}
            </div>
            <h3 className="m-0 font-serif text-2xl font-semibold leading-tight story-headline text-slate-950">
              {mainStrategy.insight}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{mainStrategy.action}</p>
            <span className="mt-4 inline-flex border border-gray-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              {mainStrategy.priority} priority
            </span>
          </article>

          <div className="grid gap-6 mt-6 md:grid-cols-3">
            {sideStrategies.map((strategy) => (
              <article key={strategy.id} className="pb-5 border-b border-gray-100">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {strategy.topic}
                </div>
                <h4 className="m-0 font-serif text-2xl font-semibold leading-tight tracking-tight text-slate-950">
                  {strategy.insight}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{strategy.action}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
