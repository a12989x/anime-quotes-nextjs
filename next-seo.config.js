const title = 'Anime Quote PWA';
const description = 'Quotes from animes with character and anime name';

const SEO = {
  title,
  description,
  canonical: 'https://losapuntesdemajo-five.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://losapuntesdemajo-five.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://losapuntesdemajo-five.vercel.app/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@__codax__',
    site: '@__codax__',
    cardType: 'summary_large_image',
  },
};

export default SEO;
