import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Sunucunuzu Nasıl Geliştireceğinizi ve aktif tutacağınızı mı düşünüyorsunuz? İşte Türkiyenin En kaltieli ve  Sistemli Botu Xeras Karşınızda!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Xeras" />
          <meta name="twitter:creator" content="@Xeras" />
          <meta property="og:url" content="https://Xeras.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Xeras Uyg" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Are you wondering how to improve your server and keep it active? Here is Turkey's most quality and systematic boat, Xeras!"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Xeras" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Xeras App"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
