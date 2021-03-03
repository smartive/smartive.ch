import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=optional" rel="stylesheet" />

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
