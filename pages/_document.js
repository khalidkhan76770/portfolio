import { Html, Head, Main, NextScript } from 'next/document';

function setInitialTheme() {
  const stored = window.localStorage.getItem('theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = stored || system;
  if (theme === 'dark') document.documentElement.classList.add('dark');
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialTheme.toString()})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
