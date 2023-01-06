import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de" id="top">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital@1&family=Inter:wght@400;600"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <noscript>
            <style>{`div#pageContent { opacity: 1}`}</style>
          </noscript>
        </Head>
        <body className="bg-white-200 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
