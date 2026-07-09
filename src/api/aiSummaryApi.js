const AI_API_BASE_URL = import.meta.env.VITE_AI_API_BASE_URL || 'http://127.0.0.1:8000';

function normalizeArticleBody(body) {
  if (Array.isArray(body)) {
    return body.filter(Boolean).join('\n\n');
  }

  return body || '';
}

function readSummaryFromResponse(data) {
  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data?.summary)) {
    return data.summary.join('\n');
  }

  return data?.summary || data?.ai_summary || data?.text || data?.result || '';
}

export async function fetchAISummary({ title, excerpt, body }) {
  const response = await fetch(`${AI_API_BASE_URL}/summarize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      excerpt,
      content: normalizeArticleBody(body),
    }),
  });

  if (!response.ok) {
    throw new Error(`AI summary request failed with status ${response.status}`);
  }

  const data = await response.json();
  const summary = readSummaryFromResponse(data);

  if (!summary) {
    throw new Error('AI summary response did not include a summary.');
  }

  return summary;
}
