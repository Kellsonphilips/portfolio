import Image from "next/image";

export default function CloudComputingBlog() {
  return (
    <div className="prose lg:prose-xl mx-auto p-6">
      <h1 style={{ margin: 0, fontSize: "2rem" }}>
        Understanding Cloud Computing with Visual Examples
      </h1>

      <h2 style={{ margin: 0, fontSize: "1.2rem" }}>Introduction</h2>
      <p>
        In today&apos;s digital-first world, <strong>cloud computing</strong>{" "}
        powers everything—from streaming your favorite show to running complex
        enterprise applications. But what exactly is cloud computing, and why
        has it become such a transformative force in technology?
      </p>

      <h2>What is Cloud Computing?</h2>
      <p>
        Cloud computing refers to the{" "}
        <strong>delivery of computing services</strong>—including servers,
        storage, databases, networking, software, and more—
        <strong>over the internet (“the cloud”)</strong>. Instead of owning and
        maintaining physical data centers or servers, you rent access to these
        services on a pay-as-you-go basis.
      </p>
      <Image
        src="/Images/cloud-computing-vs-traditional-computing.jpg"
        alt="Cloud vs Traditional IT"
        width={800}
        height={400}
      />

      <h3>Traditional vs Cloud Computing</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Traditional IT</th>
            <th>Cloud Computing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hardware ownership</td>
            <td>You buy and maintain hardware</td>
            <td>Provider owns infrastructure</td>
          </tr>
          <tr>
            <td>Scalability</td>
            <td>Manual, slow, expensive</td>
            <td>Instant and on-demand</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>High upfront capital expenses</td>
            <td>Pay-as-you-use operational costs</td>
          </tr>
          <tr>
            <td>Accessibility</td>
            <td>On-site or private network</td>
            <td>Anywhere with internet</td>
          </tr>
        </tbody>
      </table>

      <h2>Types of Cloud Services (Service Models)</h2>
      <Image
        src="/Images/cloud-service-models.png"
        alt="IaaS vs PaaS vs SaaS"
        width={800}
        height={450}
      />
      <h3>1. IaaS – Infrastructure as a Service</h3>
      <p>
        Offers virtualized computing resources like servers, storage, and
        networking. You manage everything from the OS upward.
      </p>

      <h3>2. PaaS – Platform as a Service</h3>
      <p>
        Provides a ready-to-use platform for app development. Focus on building
        apps without managing infrastructure.
      </p>

      <h3>3. SaaS – Software as a Service</h3>
      <p>
        Offers complete software applications over the internet. Users access
        software via a browser—no installations needed.
      </p>

      <h2>Types of Cloud Deployment</h2>
      <Image
        src="/Images/cloud-deployment-models.png"
        alt="Public, Private, Hybrid, Community Cloud"
        width={800}
        height={400}
      />
      <ul>
        <li>
          <strong>Public Cloud</strong>: Hosted by third-party providers; shared
          resources.
        </li>
        <li>
          <strong>Private Cloud</strong>: Exclusive infrastructure for one
          organization.
        </li>
        <li>
          <strong>Hybrid Cloud</strong>: Combines public and private for
          flexibility.
        </li>
        <li>
          <strong>Community Cloud</strong>: Shared infrastructure among similar
          organizations.
        </li>
      </ul>

      <h2>Core Benefits of Cloud Computing</h2>
      <Image
        src="/Images/cloud-computing-benefits.jpg"
        alt="Benefits of Cloud Computing"
        width={800}
        height={350}
      />
      <ul>
        <li>Scalability</li>
        <li>Cost Efficiency</li>
        <li>Flexibility</li>
        <li>Reliability</li>
        <li>Security</li>
      </ul>

      <h2>Real-World Use Cases</h2>
      <Image
        src="/Images/cloud_computing_use_cases.jpg"
        alt="Cloud Use Cases"
        width={800}
        height={400}
      />
      <ul>
        <li>
          <strong>Netflix</strong>: Streams content using AWS for scalability.
        </li>
        <li>
          <strong>Spotify</strong>: Streams music using Google Cloud
          infrastructure.
        </li>
        <li>
          <strong>Dropbox</strong>: Stores and syncs files via cloud-based
          storage.
        </li>
      </ul>

      <h2>Common Cloud Providers</h2>
      <Image
        src="/Images/major-cloud-computing-service-providers.jpg"
        alt="Major Cloud Providers"
        width={800}
        height={350}
      />
      <ul>
        <li>AWS</li>
        <li>Microsoft Azure</li>
        <li>Google Cloud</li>
        <li>IBM Cloud</li>
        <li>Oracle Cloud</li>
      </ul>

      <h2>Visual Architecture Example: A Cloud-Based Web App</h2>
      <Image
        src="/Images/cloud-web-app-architecture.png"
        alt="Cloud Web App Architecture"
        width={800}
        height={400}
      />
      <p>
        A typical architecture includes load balancers, virtual machines or
        containers, databases, and storage—all scalable and distributed.
      </p>

      <h2>Getting Started with Cloud Computing</h2>
      <ul>
        <li>Choose a provider (AWS, Azure, GCP)</li>
        <li>Create a free tier account</li>
        <li>Learn compute, storage, and network basics</li>
        <li>Host a static website to practice</li>
        <li>Try certifications like AWS Cloud Practitioner</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        Cloud computing is the new standard. From startups to global
        enterprises, everyone is leveraging cloud platforms for agility, cost
        savings, and innovation.
      </p>
      <blockquote>
        “The cloud is for everyone. The real question is: how will you use it to
        your advantage?”
      </blockquote>

      <p>Stay tuned for upcoming posts on:</p>
      <ul>
        <li>Deploying apps on AWS</li>
        <li>Understanding serverless architecture</li>
        <li>Cloud security best practices</li>
      </ul>
    </div>
  );
}
