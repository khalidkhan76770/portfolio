import Head from 'next/head';

export default function SEO({ title, description, url = '', image = '' }) {
  const metaTitle = title ? `${title}` : 'Khalid Khan';
  const metaDescription = description || 'Portfolio of Khalid Khan';
  const metaImage = image || '/og-image.png';
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
