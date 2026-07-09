import React, { useState } from 'react';
import { generateArticleSummary } from '../api/aiSummaryApi';

function getArticleText(article = {}) {
  const value = article.content || article.text || article.description || article.body;

  if (Array.isArray(value)) {
    return value.filter(Boolean).join('\n\n').trim();
  }

  return String(value || '').trim();
}

export default function AISummaryBox({ article }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const articleText = getArticleText(article);
  const isTextTooShort = articleText.length < 100;

  async function handleGenerateSummary() {
    setIsLoading(true);
    setHasError(false);

    try {
      const nextSummary = await generateArticleSummary(article);
      setSummary(nextSummary);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mb-8 border border-slate-950 bg-white p-5 text-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="block text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-950">
          AI Summary
        </span>

        <button
          type="button"
          onClick={handleGenerateSummary}
          disabled={isLoading || isTextTooShort}
          className="inline-flex min-h-11 items-center justify-center bg-slate-950 px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
        >
          Generate AI Summary
        </button>
      </div>

      {isLoading && (
        <p className="mt-5 text-sm font-semibold text-slate-700">
          Generating AI summary...
        </p>
      )}

      {summary && !isLoading && (
        <p className="mt-5 whitespace-pre-line text-base leading-7 text-slate-800">
          {summary}
        </p>
      )}

      {hasError && !isLoading && (
        <p className="mt-4 text-sm font-semibold text-slate-700">
          Unable to generate summary. Please try again.
        </p>
      )}
    </section>
  );
}
