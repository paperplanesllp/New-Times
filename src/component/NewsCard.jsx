import React from 'react';

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export default function NewsCard({ article, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured ? 'lg:grid lg:grid-cols-[1.15fr_1fr]' : ''
      }`}
    >
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className={`block overflow-hidden bg-slate-100 ${featured ? 'min-h-[280px]' : 'aspect-[16/10]'}`}
        aria-label={article.title}
      >
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
      </a>

      <div className={featured ? 'p-6 sm:p-8' : 'p-5'}>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <span className="text-red-600">{article.source}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={article.publishedAt}>
            {dateFormatter.format(new Date(article.publishedAt))}
          </time>
        </div>

        <h3
          className={`mt-3 font-serif font-bold leading-tight text-slate-950 group-hover:text-red-700 ${
            featured ? 'text-2xl sm:text-4xl' : 'text-xl'
          }`}
        >
          <a href={article.url} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center text-sm font-black uppercase tracking-[0.16em] text-slate-950 transition hover:text-red-600"
        >
          Read More
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}
