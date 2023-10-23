import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de" id="top">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white-200 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
