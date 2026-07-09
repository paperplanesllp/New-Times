function normalizeArticleText(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).join('\n\n').trim();
  }

  return String(value || '').trim();
}

export async function generateArticleSummary(article = {}) {
  const baseUrl = import.meta.env.VITE_AI_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('AI summary API URL is missing.');
  }

  const text = normalizeArticleText(
    article.content || article.text || article.description || article.body
  );

  if (text.length < 100) {
    throw new Error('Article text must be at least 100 characters.');
  }

  let response;

  try {
    response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/v1/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article_id: article.id || article.slug || article.title,
        title: article.title,
        text,
        source_url: article.url || article.source_url || '',
      }),
    });
  } catch {
    throw new Error('AI summary request failed.');
  }

  if (!response.ok) {
    throw new Error('AI summary request failed.');
  }

  const data = await response.json();
  const summary = data?.summary;

  if (typeof summary !== 'string' || !summary.trim()) {
    throw new Error('AI summary response did not include a summary.');
  }

  return summary;
}
