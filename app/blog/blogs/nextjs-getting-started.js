
export default function GettingStartedWithNext() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f9f9f9",
        color: "#333",
      }}
    >
      <header
        style={{
          background: "#fff",
          color: "#fff",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
          🚀 Getting Started with Next.js
        </h1>
        <p>The Ultimate Beginner’s Guide</p>
      </header>

      <main
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "2rem 1rem",
          background: "#fff",
        }}
      >
        <p>
          If you&apos;ve ever wanted to build high-performance web applications
          with React, then you&apos;ve probably heard of{" "}
          <strong>Next.js</strong>. It&apos;s a <em>React framework</em> that
          simplifies the development of scalable, fast, and SEO-friendly
          applications — and it&apos;s become the go-to choice for modern web
          development.
        </p>

        <h2>📦 What is Next.js?</h2>
        <p>
          <strong>Next.js</strong> is an open-source React framework built by{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          . It enables functionalities like:
        </p>
        <ul>
          <li>Server-side rendering (SSR)</li>
          <li>Static site generation (SSG)</li>
          <li>Incremental Static Regeneration (ISR)</li>
          <li>File-based routing</li>
          <li>API routes</li>
        </ul>

        <h2>⚖️ Why Choose Next.js Over React?</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
          }}
        >
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={thStyle}>Feature</th>
              <th style={thStyle}>React</th>
              <th style={thStyle}>Next.js</th>
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
                <td style={tdStyle}>{feature}</td>
                <td style={tdStyle}>{react}</td>
                <td style={tdStyle}>{next}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>🛠️ Installing Next.js</h2>
        <h3>1. Prerequisites</h3>
        <p>Ensure Node.js and npm or yarn are installed.</p>

        <h3>2. Create a New App</h3>
        <CodeBlock>
          npx create-next-app@latest my-next-app
          <br />
          cd my-next-app
          <br />
          npm run dev
        </CodeBlock>
        <p>
          This starts the server at{" "}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>
          .
        </p>

        <h2>📁 Project Structure</h2>
        <CodeBlock>
          my-next-app/
          <br />
          ├── pages/
          <br />
          │&nbsp;&nbsp;&nbsp;&nbsp;└── index.js
          <br />
          ├── public/
          <br />
          ├── styles/
          <br />
          ├── package.json
        </CodeBlock>
        <ul>
          <li>
            <code>pages/</code>: File-based routing
          </li>
          <li>
            <code>public/</code>: Static files
          </li>
          <li>
            <code>styles/</code>: CSS Modules or global CSS
          </li>
        </ul>

        <h2>🧱 Creating Your First Page</h2>
        <p>
          Create <code>pages/about.js</code>:
        </p>
        <CodeBlock>
          export default function About() &#123;
          <br />
          &nbsp;&nbsp;return &lt;h1&gt;About Us&lt;/h1&gt;;
          <br />
          &#125;
        </CodeBlock>

        <h2>🎨 Adding Styles</h2>
        <h3>Using CSS Modules</h3>
        <p>
          Create <code>styles/Home.module.css</code>:
        </p>
        <CodeBlock>
          .title &#123;
          <br />
          &nbsp;&nbsp;color: royalblue;
          <br />
          &nbsp;&nbsp;text-align: center;
          <br />
          &#125;
        </CodeBlock>

        <p>Use it in a component:</p>
        <CodeBlock>
          import styles from &quot;../styles/Home.module.css&quot;;
          <br />
          <br />
          export default function Home() &#123;
          <br />
          &nbsp;&nbsp;return &lt;h1
          className=&#123;styles.title&#125;&gt;Welcome to Next.js!&lt;/h1&gt;;
          <br />
          &#125;
        </CodeBlock>

        <h2>🌐 Fetching Data</h2>
        <h3>
          <code>getStaticProps</code>
        </h3>
        <CodeBlock>
          export async function getStaticProps() &#123;
          <br />
          &nbsp;&nbsp;return &#123; props: &#123; name: &quot;Next.js
          Learner&quot; &#125; &#125;;
          <br />
          &#125;
          <br />
          <br />
          export default function Home(&#123; name &#125;) &#123;
          <br />
          &nbsp;&nbsp;return &lt;h1&gt;Hello, &#123;name&#125;!&lt;/h1&gt;;
          <br />
          &#125;
        </CodeBlock>

        <h3>
          <code>getServerSideProps</code>
        </h3>
        <CodeBlock>
          export async function getServerSideProps() &#123;
          <br />
          &nbsp;&nbsp;const res = await
          fetch(&quot;https://api.example.com/data&quot;);
          <br />
          &nbsp;&nbsp;const data = await res.json();
          <br />
          &nbsp;&nbsp;return &#123; props: &#123; data &#125; &#125;;
          <br />
          &#125;
        </CodeBlock>

        <h2>🌍 API Routes</h2>
        <p>
          Create <code>pages/api/hello.js</code>:
        </p>
        <CodeBlock>
          export default function handler(req, res) &#123;
          <br />
          &nbsp;&nbsp;res.status(200).json(&#123; message: Hello from Next.js
          API! &#125;);
          <br />
          &#125;
        </CodeBlock>

        <h2>🚀 Deploying</h2>
        <ol>
          <li>Push your project to GitHub</li>
          <li>
            Sign up on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </li>
          <li>Connect repo → auto-deploys on push</li>
        </ol>

        <h2>✅ Final Thoughts</h2>
        <p>
          Next.js simplifies React development with optimized performance,
          full-stack capabilities, and great developer experience. Whether it’s
          a blog or a large-scale app, you’re set for success.
        </p>

        <h2>🔗 Resources</h2>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Docs
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Learn Course
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Deployment
            </a>
          </li>
        </ul>
      </main>
      <div className="mt-8 p-4 bg-gray-500/10 rounded-lg">
        <p className="text-center mb-2">
          Follow me on 𝕏 for more tech insights
        </p>
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
  );
}

const CodeBlock = ({ children }) => (
  <pre
    style={{
      background: "#1e1e1e",
      color: "#d4d4d4",
      padding: "1rem",
      borderRadius: "6px",
      overflowX: "auto",
    }}
  >
    <code>{children}</code>
  </pre>
);

const thStyle = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};
