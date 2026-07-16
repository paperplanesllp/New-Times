import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LiveBusinessNewsSection, { businessTopics, liveBusinessContent } from '../component/LiveBusinessNewsSection';

function getBodyText(item) {
  return typeof item === 'string' ? item : item?.text;
}

function normalizeHeadingText(value = '') {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function getVisibleBodyItems(body = [], articleTitle = '') {
  const normalizedTitle = normalizeHeadingText(articleTitle);
  const seenHeadings = new Set();

  return body.filter((item) => {
    const isHeading = typeof item === 'object' && item?.type === 'heading';
    const normalizedText = normalizeHeadingText(getBodyText(item));

    if (!isHeading) return true;
    if (!normalizedText || normalizedText === normalizedTitle || seenHeadings.has(normalizedText)) {
      return false;
    }

    seenHeadings.add(normalizedText);
    return true;
  });
}

function ArticleBodyItem({ item }) {
  const text = getBodyText(item);

  if (!text) return null;

  if (typeof item === 'object' && item.type === 'heading') {
    return (
      <h2 className="m-0 pt-3 text-2xl font-extrabold leading-tight text-slate-950 md:text-3xl">
        {text}
      </h2>
    );
  }

  return <p className="m-0">{text}</p>;
}

function NextArticleCard({ article, topicId }) {
  if (!article?.slug) return null;

  return (
    <Link
      to={`/business-live/${topicId}/${article.slug}`}
      className="block w-full max-w-full border border-slate-200 bg-white p-4 text-left no-underline shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:border-slate-950"
    >
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-950 text-sm font-bold text-slate-950">
          &rarr;
        </span>
        <div className="min-w-0">
          <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-700">
            Next Article
          </span>
          <h3 className="mt-1 line-clamp-2 text-[17px] font-bold leading-snug text-slate-950">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function BusinessLiveSidebar({ stories, topicId }) {
  return (
    <aside className="min-w-0 border-slate-200 lg:self-stretch lg:border-l lg:pl-8">
      <section>
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Advertisement
        </span>
        <div className="flex h-64 items-center justify-center bg-slate-100 ring-1 ring-slate-200">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Ad Space
          </span>
        </div>
      </section>

      <section className="mt-8 border border-slate-200 bg-white p-5">
        <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-slate-950">
          Business Live Radar
        </h3>
        <div className="space-y-4">
          {stories.slice(0, 3).map((item, index) => {
            const content = (
              <>
                <div className="relative h-24 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-2 top-2 bg-slate-950 px-2 py-1 text-[10px] font-bold text-white">
                    #{index + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                    Business Live
                  </span>
                  <h4 className="mt-1 line-clamp-3 text-base font-bold leading-tight text-slate-950 group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    New Times Desk
                  </p>
                </div>
              </>
            );

            return item.slug ? (
              <Link
                key={item.id}
                to={`/business-live/${topicId}/${item.slug}`}
                className="group grid min-w-0 grid-cols-[84px_minmax(0,1fr)] gap-3 border-b border-slate-100 pb-4 text-slate-950 no-underline last:border-b-0 last:pb-0"
              >
                {content}
              </Link>
            ) : (
              <div
                key={item.id}
                className="grid min-w-0 grid-cols-[84px_minmax(0,1fr)] gap-3 border-b border-slate-100 pb-4 text-slate-950 last:border-b-0 last:pb-0"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8 overflow-hidden border border-slate-200 bg-slate-100">
        <img
          src="/aaro2.jpeg"
          alt="Business Live feature"
          className="h-auto w-full object-contain"
        />
      </section>
    </aside>
  );
}

export default function BusinessLiveTopic() {
  const { topicId = 'business', storySlug } = useParams();
  const topic = businessTopics.find((item) => item.id === topicId);

  if (!topic || !liveBusinessContent[topicId]) {
    return <Navigate to="/business-live/business" replace />;
  }

  const topicContent = liveBusinessContent[topicId];
  const topicStories = [
    topicContent.featured,
    ...(topicContent.sideStories || []),
    ...(topicContent.streamStories || []),
  ];
  const story = storySlug ? topicStories.find((item) => item.slug === storySlug) : null;

  if (storySlug && !story) {
    return <Navigate to={`/business-live/${topicId}`} replace />;
  }

  if (story) {
    const isOneArenaStory = story.slug === 'one-arena-kochi-football-anthem';
    const publishedDate = story.publishedDate || 'June 24, 2026';
    const currentIndex = topicStories.findIndex((item) => item.id === story.id);
    const nextArticle = topicStories[(currentIndex + 1) % topicStories.length];
    const relatedStories = topicStories.filter((item) => item.id !== story.id);
    const body = getVisibleBodyItems((story.body || [story.description]).filter(Boolean), story.title);
    const articleContent = (
      <section className="min-w-0">
        <div
          className={`space-y-8 break-words text-slate-800 ${
            isOneArenaStory
              ? 'text-[18px] leading-[1.8] md:text-[19px] lg:text-[18px] lg:leading-[1.82]'
              : 'text-[20px] leading-[1.8] md:text-[23px] lg:text-[25px]'
          }`}
        >
          {body.map((item, index) => (
            <ArticleBodyItem key={`${index}-${getBodyText(item)}`} item={item} />
          ))}
        </div>

        <section className="mt-12 border-t border-slate-200 pt-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            First Published: {publishedDate}
          </p>
        </section>

        {isOneArenaStory && (
          <div className="mt-8">
            <NextArticleCard article={nextArticle} topicId={topicId} />
          </div>
        )}
      </section>
    );

    return (
      <main className="min-h-[80vh] w-full bg-white px-4 py-6 text-slate-950 sm:px-6 lg:px-8 lg:py-10">
        <article className={`mx-auto w-full min-w-0 ${isOneArenaStory ? 'max-w-[1280px]' : 'max-w-[1380px]'}`}>
          <Link
            to={`/business-live/${topicId}`}
            className="mb-6 inline-flex text-[12px] font-bold uppercase tracking-[0.16em] text-slate-600 no-underline hover:text-red-700"
          >
            &larr; {topic.label}
          </Link>

          <header className={`${isOneArenaStory ? 'mx-auto max-w-4xl text-center' : 'grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-center xl:gap-12'} border-b border-slate-200 pb-10`}>
            <div className={`min-w-0 ${isOneArenaStory ? '' : 'text-center sm:text-left'}`}>
              <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-700">
                {topic.label}
              </span>
              <h1 className={`mx-auto break-words text-[30px] font-extrabold leading-[1.15] text-black sm:text-[36px] lg:text-[42px] xl:text-[46px] ${isOneArenaStory ? 'max-w-[820px]' : 'max-w-[700px] sm:mx-0'}`}>
                {story.title}
              </h1>
              <p className={`mx-auto mt-5 text-[19px] leading-8 text-slate-700 md:text-[22px] ${isOneArenaStory ? 'max-w-[760px]' : 'max-w-[700px] sm:mx-0'}`}>
                {story.description}
              </p>

              <div className={`mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 ${isOneArenaStory ? '' : 'sm:justify-start'}`}>
                <span>By New Times Desk</span>
                <span className="hidden text-slate-300 sm:inline">/</span>
                <span>Last updated {publishedDate}</span>
                <span className="hidden text-slate-300 sm:inline">/</span>
                <span>{Math.max(4, Math.ceil(body.map(getBodyText).join(' ').split(' ').length / 220))} min read</span>
              </div>

              <div className={`mt-6 flex max-w-full flex-wrap justify-center gap-3 ${isOneArenaStory ? '' : 'sm:justify-start'}`}>
                <Link
                  to="/partner/get-featured"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white no-underline transition hover:bg-red-700"
                >
                  Join Us
                </Link>
              </div>
            </div>

            {!isOneArenaStory && (
              <div className="relative min-w-0">
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  />
                </div>
                <div className="mt-5 lg:ml-auto lg:w-[360px]">
                  <NextArticleCard article={nextArticle} topicId={topicId} />
                </div>
              </div>
            )}
          </header>

          {isOneArenaStory ? (
            <section className="grid min-w-0 gap-8 pt-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 xl:gap-[72px]">
              <aside className="min-w-0 lg:self-start lg:sticky lg:top-[100px]" aria-label="Article feature image">
                <figure className="m-0">
                  <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[14px] border border-slate-200 bg-slate-50 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:rounded-[18px] sm:p-4 lg:max-h-[calc(100vh-130px)]">
                    <img
                      src="/aaro2.jpeg"
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full rounded-[10px] object-contain sm:rounded-[14px]"
                    />
                  </div>
                </figure>
              </aside>

              <div className="min-w-0 max-w-[720px]">
                {articleContent}
              </div>
            </section>
          ) : (
            <div className="grid min-w-0 gap-10 pt-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)] lg:gap-12">
              {articleContent}

              <BusinessLiveSidebar stories={relatedStories} topicId={topicId} />
            </div>
          )}
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 border-b border-gray-200 pb-5">
          <Link to="/" className="news-source-link text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Home / Business Live
          </Link>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-black sm:text-5xl">
            {topic.label}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Latest {topic.label.toLowerCase()} stories from the Business Live desk.
          </p>
        </div>

        <LiveBusinessNewsSection key={topicId} initialTopic={topicId} showTopicLinks />
      </div>
    </main>
  );
}
