// pages/_app.js
import '../styles/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
