import Image from "next/image";
import Head from "next/head";

export default function AWSDeployBlog() {
  return (
    <>
      <Head>
        <title>Beginner&apos;s Guide to Deploying Apps on AWS</title>
        <meta
          name="description"
          content="Learn how to deploy your apps on AWS using Elastic Beanstalk, EC2, and S3."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10 text-text-light dark:text-text-dark">
        <h1 className="text-4xl font-bold mb-6">
          🚀 Beginner&apos;s Guide to Deploying Applications on AWS
        </h1>
        <p className="text-lg mb-6">
          By Philip Kelechukwu Orji
          <br />
          Tech Educator | Cloud Enthusiast | Data Enthusiast | Digital Projects
          Specialist
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🧠 Introduction</h2>
          <p className="mb-4 text-text-light dark:text-text-dark">
            AWS (Amazon Web Services) is the most powerful and widely used cloud
            platform. Whether you&apos;re deploying a static site or a
            full-stack app, AWS has the tools to help you scale. In this
            tutorial, you&apos;ll learn how to deploy apps using EC2, S3, and
            Elastic Beanstalk — with images to guide you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            🛠️ What You&apos;ll Need
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-text-light dark:text-text-dark">
            <li>An AWS account</li>
            <li>A simple web app (Node.js, Flask, or HTML)</li>
            <li>Internet access & terminal or command prompt</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            🧩 AWS Services Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-text-light dark:text-text-dark">
                    Service
                  </th>
                  <th className="px-4 py-2 text-text-light dark:text-text-dark">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    EC2
                  </td>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    Run full apps on virtual servers
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    S3
                  </td>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    Host static websites and store files
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    Elastic Beanstalk
                  </td>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    Deploy and scale web apps quickly
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    IAM
                  </td>
                  <td className="px-4 py-2 text-text-light dark:text-text-dark">
                    Manage access and permissions securely
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            🏗️ Step 1: Create an AWS Account
          </h2>
          <p className="mb-4 text-text-light dark:text-text-dark">
            Head over to{" "}
            <a
              href="https://aws.amazon.com"
              className="text-blue-600 underline"
            >
              aws.amazon.com
            </a>{" "}
            and click <strong>&ldquo;Create an AWS Account&ldquo;</strong>.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80"
            alt="AWS signup"
            width={800}
            height={400}
            className="rounded"
            priority
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            🏗️ Step 2: Deploy Using Elastic Beanstalk
          </h2>

          <p className="mb-4 font-semibold text-text-light dark:text-text-dark">
            1. Prepare Your App (Example: Flask)
          </p>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-4">
            <code>
              {`from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from AWS!"

if __name__ == '__main__':
    app.run()`}
            </code>
          </pre>

          <p className="mb-4 text-text-light dark:text-text-dark">
            Also include <code>requirements.txt</code>:
          </p>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-4">
            <code>Flask==2.0.1</code>
          </pre>

          <p className="mb-4 font-semibold text-text-light dark:text-text-dark">
            2. Upload to Elastic Beanstalk
          </p>
          <p className="mb-4 text-text-light dark:text-text-dark">
            Visit{" "}
            <a
              href="https://console.aws.amazon.com/elasticbeanstalk"
              className="text-blue-600 underline"
            >
              Elastic Beanstalk Console
            </a>
            , create a Python app, and upload your zipped app folder.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&q=80"
            alt="Elastic Beanstalk"
            width={800}
            height={400}
            className="rounded"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            ☁️ Step 3: Host Static Website with S3
          </h2>
          <p className="mb-4 text-text-light dark:text-text-dark">
            To host static HTML/CSS/JS files:
          </p>
          <ol className="list-decimal pl-6 space-y-1 mb-4 text-text-light dark:text-text-dark">
            <li>
              Create a bucket on{" "}
              <a
                href="https://s3.console.aws.amazon.com/s3"
                className="text-blue-600 underline"
              >
                S3 Console
              </a>
            </li>
            <li>Disable public block access</li>
            <li>Enable static website hosting in the bucket properties</li>
            <li>Upload your static files</li>
          </ol>
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&q=80"
            alt="S3 bucket setup"
            width={800}
            height={400}
            className="rounded"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            💻 Step 4: Deploy a Node.js App Using EC2
          </h2>

          <p className="mb-4 font-semibold text-text-light dark:text-text-dark">
            1. Launch EC2 Instance
          </p>
          <p className="mb-4 text-text-light dark:text-text-dark">
            Go to{" "}
            <a
              href="https://console.aws.amazon.com/ec2"
              className="text-blue-600 underline"
            >
              EC2 Console
            </a>
            , create an instance (e.g., Ubuntu), and download the key pair.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&h=400&fit=crop&q=80"
            alt="EC2 Instance Setup"
            width={800}
            height={400}
            className="rounded"
          />

          <p className="mb-4 font-semibold mt-6 text-text-light dark:text-text-dark">
            2. Connect & Setup Node
          </p>
          <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-4">
            <code>
              {`chmod 400 my-key.pem
ssh -i "my-key.pem" ec2-user@your-ec2-ip

# Then install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install node
npm install
node app.js`}
            </code>
          </pre>

          <p className="mb-4 font-semibold text-text-light dark:text-text-dark">
            3. Open Port in Security Group
          </p>
          <Image
            src="https://images.unsplash.com/photo-1581091012184-e8f707c16c5f?w=800&h=400&fit=crop&q=80"
            alt="Security Group Settings"
            width={800}
            height={400}
            className="rounded"
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            📊 Bonus: Monitor with CloudWatch
          </h2>
          <p className="text-text-light dark:text-text-dark">
            Use{" "}
            <a
              href="https://console.aws.amazon.com/cloudwatch"
              className="text-blue-600 underline"
            >
              CloudWatch
            </a>{" "}
            to track metrics, logs, and uptime of your apps.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">✅ Summary</h2>
          <ul className="list-disc pl-6 space-y-1 text-text-light dark:text-text-dark">
            <li>Use Elastic Beanstalk for quick deployments</li>
            <li>Use S3 for static sites</li>
            <li>Use EC2 for full control</li>
            <li>Use CloudWatch to monitor performance</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🗂️ Final Thoughts</h2>
          <p className="text-text-light dark:text-text-dark">
            AWS can feel overwhelming at first, but by starting with these
            services, you&apos;ll be able to launch and scale your apps in the
            cloud with confidence.
          </p>
        </section>
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
