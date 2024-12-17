import "../styles/globals.css"; // Global CSS ko import karna

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
