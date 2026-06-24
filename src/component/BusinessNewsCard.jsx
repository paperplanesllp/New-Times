import React from 'react';

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});

export default function BusinessNewsCard({ article, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] ${
        featured ? 'lg:grid lg:grid-cols-[1.2fr_1fr]' : ''
      }`}
    >
      <div
        className={`block overflow-hidden bg-neutral-100 ${featured ? 'min-h-[320px]' : 'aspect-[16/10]'}`}
        aria-hidden="true"
      >
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className={featured ? 'p-6 sm:p-8 lg:p-10' : 'p-5'}>
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-neutral-950">
            {article.topic}
          </span>
          <span>{article.source}</span>
          <span aria-hidden="true">/</span>
          <time dateTime={article.publishedAt}>
            {dateFormatter.format(new Date(article.publishedAt))}
          </time>
        </div>

        <h3
          className={`news-headline mt-4 text-neutral-950 transition group-hover:text-neutral-700 ${
            featured ? 'featured-headline text-2xl leading-[1.05]' : 'story-headline text-xl leading-tight'
          }`}
        >
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-source-link mt-5 inline-flex items-center border-b border-neutral-950 pb-1 text-sm font-black uppercase tracking-[0.16em] text-neutral-950 transition hover:border-neutral-500 hover:text-neutral-600"
        >
          Read Original Source
          <span className="ml-2" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}
