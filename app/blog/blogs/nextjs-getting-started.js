import Head from 'next/head';
import Link from 'next/link';

export default function GettingStartedWithNext() {
  return (
    <>
      <Head>
        <title>Getting Started with Next.js | Philip Kelechukwu Orji</title>
        <meta
          name="description"
          content="A beginner's guide to building web apps with Next.js."
        />
        <meta
          name="keywords"
          content="next.js, react, web development, Philip Orji"
        />
        <meta
          property="og:title"
          content="Getting Started with Next.js | Philip Kelechukwu Orji"
        />
        <meta
          property="og:description"
          content="A beginner's guide to building web apps with Next.js."
        />
        <meta property="og:image" content="/Images/profile.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Getting Started with Next.js | Philip Kelechukwu Orji"
        />
        <meta
          name="twitter:description"
          content="A beginner's guide to building web apps with Next.js."
        />
        <meta name="twitter:image" content="/Images/profile.jpg" />
        <link
          rel="canonical"
          href="https://philipkelechiorji.vercel.app/blog/nextjs-getting-started"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Getting Started with Next.js",
              image: ["/Images/profile.jpg"],
              author: { "@type": "Person", name: "Philip Kelechukwu Orji" },
              publisher: {
                "@type": "Organization",
                name: "Philip Kelechukwu Orji",
              },
              datePublished: "2024-06-17",
              description:
                "A beginner's guide to building web apps with Next.js.",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://philipkelechiorji.vercel.app/blog/nextjs-getting-started",
              },
            }),
          }}
        />
      </Head>
      <div className="bg-gray-50 text-gray-900">
        <header className="bg-white py-8 px-4 text-center">
          <h1 className="m-0 text-4xl md:text-5xl font-bold">🚀 Getting Started with Next.js</h1>
          <p className="text-lg">The Ultimate Beginner&apos;s Guide</p>
          <p className="text-lg mb-6">
            By Philip Kelechukwu Orji
            <br />
            Tech Educator | Cloud Enthusiast | Data Enthusiast | Digital Projects Specialist
          </p>
        </header>

        <main className="max-w-3xl mx-auto py-10 px-4 bg-white">
          <p>
            If you&apos;ve ever wanted to build high-performance web applications with React, then you&apos;ve probably heard of <strong>Next.js</strong>. It&apos;s a <em>React framework</em> that simplifies the development of scalable, fast, and SEO-friendly applications — and it&apos;s become the go-to choice for modern web development.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📦 What is Next.js?</h2>
          <p>
            <strong>Next.js</strong> is an open-source React framework built by{' '}
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel</Link>.
            It enables functionalities like:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Server-side rendering (SSR)</li>
            <li>Static site generation (SSG)</li>
            <li>Incremental Static Regeneration (ISR)</li>
            <li>File-based routing</li>
            <li>API routes</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">⚖️ Why Choose Next.js Over React?</h2>
          <table className="w-full border-collapse my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-2">Feature</th>
                <th className="border px-2 py-2">React</th>
                <th className="border px-2 py-2">Next.js</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Routing", "Manual", "Built-in"],
                ["SSR/SSG", "Manual or external", "Built-in"],
                ["API Routes", "Not supported", "Built-in"],
                ["SEO Optimization", "Manual", "Easy"],
              ].map(([feature, react, next]) => (
                <tr key={feature}>
                  <td className="border px-2 py-2">{feature}</td>
                  <td className="border px-2 py-2">{react}</td>
                  <td className="border px-2 py-2">{next}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🛠️ Installing Next.js</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">1. Prerequisites</h3>
          <p>Ensure Node.js and npm or yarn are installed.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. Create a New App</h3>
          <CodeBlock>
            npx create-next-app@latest my-next-app
            <br />
            cd my-next-app
            <br />
            npm run dev
          </CodeBlock>
          <p>
            This starts the server at{' '}
            <Link href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">http://localhost:3000</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📁 Project Structure</h2>
          <CodeBlock>
            my-next-app/
            <br />├── pages/
            <br />│&nbsp;&nbsp;&nbsp;&nbsp;└── index.js
            <br />├── public/
            <br />├── styles/
            <br />├── package.json
          </CodeBlock>
          <ul className="list-disc pl-6 mb-4">
            <li><code>pages/</code>: File-based routing</li>
            <li><code>public/</code>: Static files</li>
            <li><code>styles/</code>: CSS Modules or global CSS</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🧱 Creating Your First Page</h2>
          <p>Create <code>pages/about.js</code>:</p>
          <CodeBlock>
            export default function About() &#123;
            <br />&nbsp;&nbsp;return &lt;h1&gt;About Us&lt;/h1&gt;;
            <br />&#125;
          </CodeBlock>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🎨 Adding Styles</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">Using CSS Modules</h3>
          <p>Create <code>styles/Home.module.css</code>:</p>
          <CodeBlock>
            .title &#123;
            <br />&nbsp;&nbsp;color: royalblue;
            <br />&nbsp;&nbsp;text-align: center;
            <br />&#125;
          </CodeBlock>

          <p>Use it in a component:</p>
          <CodeBlock>
            import styles from &quot;../styles/Home.module.css&quot;;
            <br />
            <br />export default function Home() &#123;
            <br />&nbsp;&nbsp;return &lt;h1 className=&#123;styles.title&#125;&gt;Welcome to Next.js!&lt;/h1&gt;;
            <br />&#125;
          </CodeBlock>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🌐 Fetching Data</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2"><code>getStaticProps</code></h3>
          <CodeBlock>
            export async function getStaticProps() &#123;
            <br />&nbsp;&nbsp;return &#123; props: &#123; name: &quot;Next.js Learner&quot; &#125; &#125;;
            <br />&#125;
            <br />
            <br />export default function Home(&#123; name &#125;) &#123;
            <br />&nbsp;&nbsp;return &lt;h1&gt;Hello, &#123;name&#125;!&lt;/h1&gt;;
            <br />&#125;
          </CodeBlock>

          <h3 className="text-xl font-semibold mt-6 mb-2"><code>getServerSideProps</code></h3>
          <CodeBlock>
            export async function getServerSideProps() &#123;
            <br />&nbsp;&nbsp;const res = await fetch(&quot;https://api.example.com/data&quot;);
            <br />&nbsp;&nbsp;const data = await res.json();
            <br />&nbsp;&nbsp;return &#123; props: &#123; data &#125; &#125;;
            <br />&#125;
          </CodeBlock>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🌍 API Routes</h2>
          <p>Create <code>pages/api/hello.js</code>:</p>
          <CodeBlock>
            export default function handler(req, res) &#123;
            <br />&nbsp;&nbsp;res.status(200).json(&#123; message: Hello from Next.js API! &#125;);
            <br />&#125;
          </CodeBlock>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Deploying</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>Push your project to GitHub</li>
            <li>
              Sign up on{' '}
              <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel</Link>
            </li>
            <li>Connect repo → auto-deploys on push</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">✅ Final Thoughts</h2>
          <p>
            Next.js simplifies React development with optimized performance, full-stack capabilities, and great developer experience. Whether it&apos;s a blog or a large-scale app, you&apos;re set for success.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🔗 Resources</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Next.js Docs</Link>
            </li>
            <li>
              <Link href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Official Learn Course</Link>
            </li>
            <li>
              <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Vercel Deployment</Link>
            </li>
          </ul>
        </main>
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-center mb-2">Follow me on 𝕏 for more tech insights</p>
          <a
            href="https://twitter.com/JoinPhotonPhill"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-500/70 hover:text-blue-600 transition-colors"
          >
            @JoinPhotonPhill
          </a>
        </div>
      </div>
    </>
  );
}

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
    <code>{children}</code>
  </pre>
);
