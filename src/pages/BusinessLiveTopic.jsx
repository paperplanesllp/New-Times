import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LiveBusinessNewsSection, { businessTopics, liveBusinessContent } from '../component/LiveBusinessNewsSection';

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
    return (
      <main className="min-h-screen bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-5xl">
          <Link to={`/business-live/${topicId}`} className="news-source-link text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Home / Business Live / {topic.label}
          </Link>

          <header className="mt-5 border-b border-gray-200 pb-8">
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
              {topic.label}
            </span>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-black sm:text-5xl">
              {story.title}
            </h1>
            {story.description && (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {story.description}
              </p>
            )}
          </header>

          <img
            src={story.image}
            alt={story.title}
            className="mt-8 h-[320px] w-full object-cover sm:h-[430px]"
          />

          <div className="mt-10 space-y-7 text-[19px] leading-8 text-slate-800">
            {(story.body || [story.description]).filter(Boolean).map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
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
