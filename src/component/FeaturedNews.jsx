import React from 'react';

export default function FeaturedNews() {
  const heroArticle = {
    title: '"Start Solving Problems That Matter to Business": Business Leader Manoj Kohli\'s advice in times on uncertainties',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80'
  };

  const secondaryArticles = [
    {
      id: 1,
      title: 'Hindalco, Vedanta, Nalco shares in focus as anti dumping duty on aluminium foil extended - BusinessToday',
      source: 'Business Today',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80',
      isVideo: true
    },
    {
      id: 2,
      title: "#BTSustainabilityAwards LIVE: The Eco Drive - Will Flex-Fuel & EVs Redefine India's Mobility?",
      source: 'Business Today',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
      isVideo: true
    }
  ];

  return (
    <section className="mb-10 flex flex-col gap-12 bg-white">
      <div className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-rose-600 pt-5 md:min-h-[450px]">
        <img
          src={heroArticle.image}
          alt="Featured Leader"
          className="h-[95%] object-contain grayscale mix-blend-luminosity brightness-110"
        />

        <div className="absolute -bottom-8 z-10 w-[88%] max-w-4xl bg-white px-5 py-6 text-center shadow-xl sm:px-8">
          <h1 className="m-0 font-serif text-2xl font-semibold leading-tight text-black md:text-4xl">
            {heroArticle.title}
          </h1>
        </div>
      </div>

      <div className="grid gap-6 pt-2 md:grid-cols-2">
        {secondaryArticles.map((article) => (
          <article key={article.id} className="cursor-pointer border-b border-gray-200 pb-5 md:border-b-0">
            <div className="relative mb-3 aspect-video w-full overflow-hidden">
              <img className="h-full w-full object-cover" src={article.image} alt={article.title} />
              {article.isVideo && (
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded bg-red-600 px-2 py-1 text-[10px] font-bold text-white">
                  PLAY BT TV
                </div>
              )}
            </div>

            <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-gray-950">
              {article.title}
            </h3>
            <span className="text-xs font-medium text-gray-500">{article.source}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
