import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { NEWS_CATEGORIES, fetchNewsByCategory } from '../services/newsApi';

function LoadingState() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div key={item} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[16/10] animate-pulse bg-slate-200" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-28 animate-pulse rounded bg-slate-200" />
            <div className="h-5 animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LiveNewsSection() {
  const [activeCategory, setActiveCategory] = useState(NEWS_CATEGORIES[0].id);
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadNews() {
      setStatus('loading');
      setError('');

      try {
        const nextArticles = await fetchNewsByCategory(activeCategory, controller.signal);

        if (!controller.signal.aborted) {
          setArticles(nextArticles);
          setStatus(nextArticles.length ? 'success' : 'empty');
        }
      } catch (nextError) {
        if (!controller.signal.aborted) {
          setArticles([]);
          setError(nextError.message);
          setStatus('error');
        }
      }
    }

    loadNews();

    return () => controller.abort();
  }, [activeCategory]);

  const activeLabel =
    NEWS_CATEGORIES.find((category) => category.id === activeCategory)?.label || 'General';
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 7);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-950 px-4 py-5 text-white sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
              Live News
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Latest headlines across {activeLabel}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Real-time stories from trusted publishers, updated by NewsAPI.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Live news categories">
            {NEWS_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition ${
                    isActive
                      ? 'bg-white text-slate-950'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        {status === 'loading' && <LoadingState />}

        {status === 'error' && (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-900">
            <h3 className="text-lg font-black">Unable to load live news</h3>
            <p className="mt-2 text-sm leading-6">{error}</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            <h3 className="text-lg font-black text-slate-950">No headlines found</h3>
            <p className="mt-2 text-sm leading-6">
              There are no live stories available for this category right now. Try another topic.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="grid gap-6">
            {featuredArticle && <NewsCard article={featuredArticle} featured />}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {secondaryArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
