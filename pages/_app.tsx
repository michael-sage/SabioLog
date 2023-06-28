import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { globals } from '../globals';
import { Header } from '../components/Header';
import '../styles/base.css';
import Script from 'next/script';

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
      <>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4091280539840115"
          crossOrigin="anonymous" />
        {globals.googleAnalyticsId && (
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}/>
        )}
        {globals.googleAnalyticsId && (
          <Script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
          }}/>
        )}
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
      </>
  );
};

export default App;
