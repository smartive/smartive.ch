import Document, { Head, Html, Main, NextScript } from 'next/document';

export const GoogleFontUrl = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital@1&family=Inter:wght@400;600';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={`${GoogleFontUrl}&display=swap`} rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white-200 text-black overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
