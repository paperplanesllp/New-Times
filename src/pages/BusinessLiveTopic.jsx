import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LiveBusinessNewsSection, { businessTopics, liveBusinessContent } from '../component/LiveBusinessNewsSection';

export default function BusinessLiveTopic() {
  const { topicId = 'business' } = useParams();
  const topic = businessTopics.find((item) => item.id === topicId);

  if (!topic || !liveBusinessContent[topicId]) {
    return <Navigate to="/business-live/business" replace />;
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
