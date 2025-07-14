// pages/blog/serverless-architecture.js
import Image from "next/image";
import Head from 'next/head';

export default function ServerlessArchitectureBlog() {
  return (
    <>
      <Head>
        <title>Serverless Architecture Explained | Philip Kelechukwu Orji</title>
        <meta name="description" content="A clear explanation of serverless architecture, its benefits, and how it changes the way we build and deploy applications." />
        <meta property="og:title" content="Serverless Architecture Explained | Philip Kelechukwu Orji" />
        <meta property="og:description" content="A clear explanation of serverless architecture, its benefits, and how it changes the way we build and deploy applications." />
        <meta property="og:image" content="/Images/profile.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serverless Architecture Explained | Philip Kelechukwu Orji" />
        <meta name="twitter:description" content="A clear explanation of serverless architecture, its benefits, and how it changes the way we build and deploy applications." />
        <meta name="twitter:image" content="/Images/profile.jpg" />
        <link rel="canonical" href="https://philipkelechiorji.vercel.app/blog/serverless-architecture-explained" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Serverless Architecture Explained",
            image: ["/Images/profile.jpg"],
            author: { "@type": "Person", name: "Philip Kelechukwu Orji" },
            publisher: { "@type": "Organization", name: "Philip Kelechukwu Orji" },
            datePublished: "2024-06-17",
            description: "A clear explanation of serverless architecture, its benefits, and how it changes the way we build and deploy applications.",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://philipkelechiorji.vercel.app/blog/serverless-architecture-explained" }
          })
        }} />
      </Head>
      <div className="prose lg:prose-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center">
          Understanding Serverless Architecture
        </h1>
        <p className="text-lg mb-6">
          By Philip Kelechukwu Orji
          <br />
          Tech Educator | Cloud Enthusiast | Data Enthusiast | Digital Projects
          Specialist
        </p>

        <p className="text-text-light dark:text-text-dark">
          In the evolving world of cloud computing,{" "}
          <strong>serverless architecture</strong> is transforming how developers
          build and deploy applications. Despite the name, serverless doesn&apos;t
          mean there are no servers. Instead, it means developers don&apos;t need
          to manage the servers — the cloud provider takes care of it.
        </p>

        <h2>🌐 What is Serverless Architecture?</h2>
        <p className="text-text-light dark:text-text-dark">
          Serverless architecture allows you to write and deploy code without
          worrying about the underlying infrastructure. Your code runs in
          ephemeral containers that are created and destroyed on demand. Popular
          cloud providers like AWS, Azure, and Google Cloud offer serverless
          platforms.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80"
          alt="Cloud infrastructure concept"
          width={800}
          height={500}
          priority
        />

        <h2>🧩 Key Characteristics of Serverless</h2>
        <ul className="text-text-light dark:text-text-dark">
          <li>
            <strong>No Server Management:</strong> You don&apos;t need to
            provision or maintain servers.
          </li>
          <li>
            <strong>Automatic Scaling:</strong> Functions scale automatically with
            demand.
          </li>
          <li>
            <strong>Pay-as-You-Go:</strong> You only pay for the compute time your
            code uses.
          </li>
          <li>
            <strong>Event-Driven:</strong> Functions run in response to triggers
            (HTTP requests, file uploads, etc.).
          </li>
        </ul>

        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&q=80"
          alt="Serverless architecture diagram"
          width={800}
          height={450}
        />

        <h2>🏗️ How Does Serverless Work?</h2>
        <p className="text-text-light dark:text-text-dark">
          Let&apos;s say you&apos;re building an image upload service. Instead of
          setting up a backend server:
        </p>
        <ol className="text-text-light dark:text-text-dark">
          <li>You upload the image to cloud storage (e.g., AWS S3).</li>
          <li>This triggers a cloud function (e.g., AWS Lambda).</li>
          <li>The function processes the image (resize, watermark, etc.).</li>
          <li>The result is stored or returned to the user.</li>
        </ol>

        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop&q=80"
          alt="Image processing flow"
          width={800}
          height={500}
        />

        <h2>🚀 Popular Serverless Services</h2>
        <ul className="text-text-light dark:text-text-dark">
          <li>
            <strong>AWS Lambda</strong> – Event-driven functions on Amazon Web
            Services
          </li>
          <li>
            <strong>Azure Functions</strong> – Serverless compute for Microsoft
            Azure
          </li>
          <li>
            <strong>Google Cloud Functions</strong> – Lightweight functions for
            Google Cloud
          </li>
          <li>
            <strong>Vercel/Netlify</strong> – Great for deploying full-stack apps
            with serverless APIs
          </li>
        </ul>

        <h2>✅ Advantages of Serverless</h2>
        <ul className="text-text-light dark:text-text-dark">
          <li>Faster time to market</li>
          <li>Lower operational costs</li>
          <li>Focus on business logic</li>
          <li>Scalable by design</li>
        </ul>

        <h2>⚠️ Drawbacks to Consider</h2>
        <ul className="text-text-light dark:text-text-dark">
          <li>Cold starts (delay when function is first called)</li>
          <li>Vendor lock-in</li>
          <li>Limited execution time</li>
          <li>Harder to test/debug locally</li>
        </ul>

        <h2>🔧 Best Use Cases</h2>
        <ul className="text-text-light dark:text-text-dark">
          <li>RESTful APIs and microservices</li>
          <li>Real-time file processing</li>
          <li>Chatbots and automation</li>
          <li>Data transformation pipelines</li>
        </ul>

        <Image
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=500&fit=crop&q=80"
          alt="Automated processes with serverless"
          width={800}
          height={500}
        />

        <h2>🛠️ Example: Hello World with AWS Lambda</h2>
        <pre>
          {`exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from Serverless!" }),
    };
  };`}
        </pre>

        <h2>📌 Final Thoughts</h2>
        <p className="text-text-light dark:text-text-dark">
          Serverless is not a one-size-fits-all solution, but it&apos;s ideal for
          applications that need scalability and low maintenance. For startups,
          solo developers, and even large teams, it unlocks a new level of
          productivity and cost efficiency.
        </p>

        <p className="text-center font-semibold text-text-light dark:text-text-dark">
          Embrace serverless and build more with less!
        </p>
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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
    </>
  );
}
