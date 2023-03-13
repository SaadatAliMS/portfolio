import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className=" bg-fixed bg-gradient-to-r from-green-default to-blue-400 dark:from-dark-500 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
