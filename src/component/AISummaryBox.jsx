import React, { useState } from 'react';
import { fetchAISummary } from '../api/aiSummaryApi';

export default function AISummaryBox({ title, excerpt, body }) {
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleGenerateSummary() {
    setStatus('loading');
    setError('');

    try {
      const nextSummary = await fetchAISummary({ title, excerpt, body });
      setSummary(nextSummary);
      setStatus('success');
    } catch (summaryError) {
      setError(summaryError.message || 'Unable to generate summary right now.');
      setStatus('error');
    }
  }

  const isLoading = status === 'loading';

  return (
    <section className="mb-8 border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-700">
            AI Summary
          </span>
          <h2 className="mt-2 text-xl font-extrabold leading-tight text-slate-950">
            Get the quick version
          </h2>
        </div>

        <button
          type="button"
          onClick={handleGenerateSummary}
          disabled={isLoading}
          className="inline-flex min-h-11 items-center justify-center bg-slate-950 px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading ? 'Summarizing...' : summary ? 'Refresh Summary' : 'Generate Summary'}
        </button>
      </div>

      {summary && (
        <p className="mt-5 whitespace-pre-line text-base leading-7 text-slate-700">
          {summary}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-4 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </section>
  );
}
