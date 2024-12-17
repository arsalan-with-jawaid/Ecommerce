import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce Template</title>
      </Head>
      <main className="container">
        <header className="header">
          <h1>Build ecom sites, super fast</h1>
          <p>This template was built to help you rapidly and modularly build e-commerce concepts...</p>
        </header>

        <section className="styles-section">
          <h2>Use the styles</h2>
          <p>Styles in Figma mean you can find color and text styles...</p>
          {/* Add sample style boxes */}
        </section>

        <section className="components-section">
          <h2>Use the components</h2>
          <p>There’s a bunch of pre-configured components for you...</p>
          {/* Add button examples */}
        </section>

        <section className="layouts-section">
          <h2>Check the layouts</h2>
          <p>We’ve built a bunch of layouts to build mobile and desktop sites...</p>
          {/* Add layout previews */}
        </section>

        <section className="content-blocks-section">
          <h2>Use the content blocks</h2>
          <p>We’ve built a multitude of content blocks for you to use in your landing pages...</p>
          {/* Add content block examples */}
        </section>
      </main>
    </>
  );
}
