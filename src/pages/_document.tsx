import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Improved favicon handling */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="shortcut icon" href="/favicon.ico" />
          
          {/* Use color-scheme for better cross-browser compatibility */}
          <meta name="color-scheme" content="light dark" />
          
          {/* Theme color for supported browsers (Chrome, Edge, Safari) */}
          <meta name="theme-color" content="#000000" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
