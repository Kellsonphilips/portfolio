import Head from "next/head";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Learn Docker the Easier Way & the Only Way</title>
        <meta
          name="description"
          content="A comprehensive guide to learning Docker with a clear roadmap, code examples, and visual aids."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6">
        <div className="container text-center mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn Docker the Easier Way & the Only Way
          </h1>
          <p className="text-center mt-2 text-lg">
            A Step-by-Step Roadmap to Master Docker in 2025
          </p>
          <p className="text-lg mb-6">
            By Philip Kelechukwu Orji
            <br />
            Tech Educator | Cloud Enthusiast | Data Enthusiast | Digital
            Projects Specialist
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Key Points */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">Key Points</h2>
          <ul className="list-disc list-inside space-y-2 ">
            <li>
              Learning Docker can be streamlined with a structured roadmap,
              covering basics to advanced topics.
            </li>
            <li>
              The roadmap includes stages like installation, understanding
              images, containers, and advanced topics like security and CI/CD.
            </li>
            <li>
              Following this roadmap with hands-on practice will help you master
              Docker efficiently.
            </li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">
            Introduction to Docker
          </h2>
          <p className=" mb-4">
            Docker is a powerful tool for containerizing applications, ensuring
            they run consistently across environments. This guide offers a clear
            path to learn Docker, suitable for beginners and experts.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Containers vs VMs"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-md"
          />
          <p className="text-gray-600 text-sm mt-2 text-center">
            Source:{" "}
            <a
              href="https://www.docker.com/resources/what-container/"
              className="text-blue-600 hover:underline"
            >
              Docker Official Documentation
            </a>
          </p>
        </section>

        {/* Roadmap Overview */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">Roadmap Overview</h2>
          <p className=" mb-4">
            The roadmap is divided into 17 stages, ensuring comprehensive
            learning. Practice with code examples and refer to visual aids from
            trusted sources like Docker&apos;s documentation and GeeksforGeeks.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 ">
            <li>
              <strong>Command Line Skills</strong>: Familiarity with commands
              like <code>cd</code>, <code>ls</code>, <code>rm</code>.
            </li>
            <li>
              <strong>Linux Knowledge</strong>: Docker leverages Linux kernel
              features like cgroups.
            </li>
            <li>
              <strong>Networking Basics</strong>: Understand IP addresses,
              ports, and protocols.
            </li>
            <li>
              <strong>Software Development</strong>: Know application
              development and deployment.
            </li>
            <li>
              <strong>Git</strong>: Useful for managing code in containerized
              environments.
            </li>
          </ul>
          <p className=" mt-4">
            Resources:{" "}
            <a
              href="https://www.geeksforgeeks.org/what-is-command-line-interface-cli/"
              className="text-blue-600 hover:underline"
            >
              Command Line Tutorial
            </a>
            ,{" "}
            <a
              href="https://www.geeksforgeeks.org/linux-tutorial/"
              className="text-blue-600 hover:underline"
            >
              Linux Tutorial
            </a>
            ,{" "}
            <a
              href="https://www.geeksforgeeks.org/computer-network-tutorials/"
              className="text-blue-600 hover:underline"
            >
              Networking Basics
            </a>
            .
          </p>
        </section>

        {/* Roadmap Stages */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">
            Docker Learning Roadmap
          </h2>

          {/* Introduction to Docker */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              1. Introduction to Docker
            </h3>
            <p>
              This section introduces Docker, an open-source platform that enables developers to automate the deployment, scaling, and management of applications using container technology. Understanding Docker&apos;s purpose and its core concepts—such as containers, images, and registries—lays the groundwork for mastering modern application development and DevOps practices.
            </p>
            <p className=" mb-2">
              <strong>What is Docker?</strong> An open-source platform for
              automating deployment, scaling, and management of applications in
              containers.
            </p>
            <p className=" mb-2">
              <strong>Why Use Docker?</strong> Offers consistency, isolation,
              portability, efficiency, and scalability.
            </p>
            <p className=" mb-2">
              <strong>Key Concepts</strong>: Containers, images, Dockerfiles,
              registries.
            </p>
            <p className=" mt-2">
              Reference:{" "}
              <a
                href="https://www.docker.com/101-tutorial/"
                className="text-blue-600 hover:underline"
              >
                Docker 101 Tutorial
              </a>
              .
            </p>
          </div>

          {/* Installing Docker */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              2. Installing Docker
            </h3>
            <p>
              Here, you will learn how to install Docker on various operating systems, including Windows, macOS, and Linux. Proper installation is crucial as it provides you with the Docker Engine and CLI, which are essential tools for building and running containers locally and in production environments.
            </p>
            <p className=" mb-2">
              <strong>Why Install?</strong> To experiment with containers
              locally.
            </p>
            <p className=" mb-2">
              <strong>Installation</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 ">
              <li>
                <strong>Windows/macOS</strong>: Download Docker Desktop from{" "}
                <a
                  href="https://www.docker.com/products/docker-desktop"
                  className="text-blue-600 hover:underline"
                >
                  Docker&apos;s Official Site
                </a>
                .
              </li>
              <li>
                <strong>Linux</strong>: Follow{" "}
                <a
                  href="https://docs.docker.com/engine/install/ubuntu/"
                  className="text-blue-600 hover:underline"
                >
                  Docker&apos;s Linux Guide
                </a>
                .
              </li>
            </ul>
            <p className=" mt-2">
              <strong>Verify</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker --version
            </SyntaxHighlighter>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Docker Desktop Interface"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-md mt-4 py-8"
            />
          </div>

          {/* Understanding Images */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              3. Understanding Images
            </h3>
            <p>
              This section explains Docker images, which are the blueprints for containers. You will learn how images encapsulate application code, dependencies, and runtime, making it possible to create consistent and portable environments across different systems.
            </p>
            <p className=" mb-2">
              <strong>What Are Images?</strong> Read-only templates for
              containers.
            </p>
            <p className=" mb-2">
              <strong>Pulling Images</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker pull ubuntu
            </SyntaxHighlighter>
            <p className=" mb-2">
              <strong>Creating Custom Images</strong>:
            </p>
            <SyntaxHighlighter language="dockerfile" style={tomorrow}>
              {`FROM nginx:alpine
COPY index.html /usr/share/nginx/html`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker build -t my-nginx-image .
            </SyntaxHighlighter>
            <p className=" mt-2">
              Reference:{" "}
              <a
                href="https://hub.docker.com/"
                className="text-blue-600 hover:underline"
              >
                Docker Hub
              </a>
              .
            </p>
          </div>

          {/* Working with Containers */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              4. Working with Containers
            </h3>
            <p>
              Here, you will discover how to run, manage, and interact with containers. Containers are lightweight, isolated environments that execute your applications, and mastering their lifecycle is fundamental to effective Docker usage.
            </p>
            <p className=" mb-2">
              <strong>Running Containers</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker run -it ubuntu bash
            </SyntaxHighlighter>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker run -d -p 8080:80 nginx
            </SyntaxHighlighter>
            <p className=" mb-2">
              <strong>Managing Containers</strong>: List with{" "}
              <code>docker ps -a</code>, stop with{" "}
              <code>docker stop &lt;container_id&gt;</code>.
            </p>
            <Image
              src="/learm-docker.jpg"
              alt="Container Lifecycle"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-md mt-4 py-8"
            />
          </div>

          {/* Dockerfile Best Practices */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              5. Dockerfile Best Practices
            </h3>
            <p>
              This section covers best practices for writing Dockerfiles, which are scripts that define how images are built. Efficient Dockerfiles lead to smaller, faster, and more secure images, which are critical for scalable and maintainable deployments.
            </p>
            <p className=" mb-2">
              <strong>Efficient Dockerfiles</strong>: Use smaller images,
              minimize layers.
            </p>
            <SyntaxHighlighter language="dockerfile" style={tomorrow}>
              {`FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
            </SyntaxHighlighter>
          </div>

          {/* Stage 6: Docker Hub and Registries */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              6. Docker Hub and Registries
            </h3>
            <p>
              Learn about Docker Hub and other registries, which are platforms for storing and sharing Docker images. Understanding how to push and pull images from registries is essential for collaboration and deploying applications in different environments.
            </p>
            <p className=" mb-2">
              <strong>Using Docker Hub</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              {`docker tag my-nginx-image username/my-nginx-image
docker push username/my-nginx-image`}
            </SyntaxHighlighter>
          </div>

          {/* Docker CLI Basics */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              7. Docker CLI Basics
            </h3>
            <p>
              This section introduces the Docker Command Line Interface (CLI), your primary tool for interacting with Docker. Mastering the CLI allows you to efficiently manage images, containers, networks, and volumes through simple commands.
            </p>
            <p className=" mb-2">
              <strong>Essential Commands</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker images
            </SyntaxHighlighter>
          </div>

          {/* Docker Networking */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              8. Docker Networking
            </h3>
            <p>
              Explore how Docker handles networking, enabling containers to communicate with each other and with external systems. Understanding Docker networking is vital for building multi-container applications and ensuring secure, reliable connectivity.
            </p>
            <p className=" mb-2">
              <strong>User-Defined Networks</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              {`docker network create my-net
docker run -d --name web --network my-net nginx
docker run -d --name db --network my-net postgres`}
            </SyntaxHighlighter>
          </div>

          {/* Data Volumes */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">9. Data Volumes</h3>
            <p>
              This section explains Docker volumes, which provide persistent storage for containers. Volumes are crucial for managing data that needs to survive container restarts and for sharing data between containers in complex applications.
            </p>
            <p className=" mb-2">
              <strong>Using Volumes</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              {`docker volume create my-vol
docker run -d -v my-vol:/data nginx`}
            </SyntaxHighlighter>
          </div>

          {/* Docker Compose */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">10. Docker Compose</h3>
            <p>
              Learn how Docker Compose simplifies the management of multi-container applications by allowing you to define and run them using a single YAML file. This tool is invaluable for orchestrating development and testing environments that mirror production setups.
            </p>
            <p className=" mb-2">
              <strong>Defining Multi-Container Apps</strong>:
            </p>
            <SyntaxHighlighter language="yaml" style={tomorrow}>
              {`version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example`}
            </SyntaxHighlighter>
          </div>

          {/* Docker in Development */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              11. Docker in Development
            </h3>
            <p>
              Discover how Docker streamlines development workflows by providing consistent environments for all team members. Using Docker in development reduces environment-specific bugs and accelerates onboarding for new developers.
            </p>
            <p className=" mb-2">
              <strong>Local Development</strong>:
            </p>
            <SyntaxHighlighter language="bash" style={tomorrow}>
              docker run -d -p 3306:3306 --name my-mysql -e
              MYSQL_ROOT_PASSWORD=example mysql:latest
            </SyntaxHighlighter>
          </div>

          {/* Docker in Production */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              12. Docker in Production
            </h3>
            <p>
              This section addresses the challenges and best practices for running Docker in production. Topics include orchestration, scaling, monitoring, and ensuring high availability and security for containerized applications.
            </p>
            <p className=" mb-2">
              <strong>Orchestration</strong>: Use Docker Swarm or Kubernetes.
            </p>
            <p className=" mb-2">
              <strong>Monitoring</strong>: Use ELK stack or Prometheus.
            </p>
          </div>

          {/* Docker Security */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">13. Docker Security</h3>
            <p>
              Security is a critical aspect of containerized environments. This section covers strategies for minimizing vulnerabilities, using trusted images, managing secrets, and following security best practices to protect your applications and infrastructure.
            </p>
            <p className=" mb-2">
              <strong>Best Practices</strong>: Use official images, run as
              non-root.
            </p>
          </div>

          {/* Docker in CI/CD */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">14. Docker in CI/CD</h3>
            <p>
              Learn how Docker integrates with Continuous Integration and Continuous Deployment (CI/CD) pipelines to automate the building, testing, and deployment of applications. This ensures consistency and reliability throughout the software delivery lifecycle.
            </p>
            <p className=" mb-2">
              <strong>Building Images</strong>:
            </p>
            <SyntaxHighlighter language="groovy" style={tomorrow}>
              {`stage('Build Docker Image') {
    steps {
        sh 'docker build -t my-app .'
    }
}`}
            </SyntaxHighlighter>
          </div>

          {/* Advanced Topics */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">15. Advanced Topics</h3>
            <p>
              This section delves into advanced Docker features such as orchestration with Swarm, automation with Docker Machine, and interacting with the Docker API. Mastery of these topics enables you to build robust, scalable, and automated containerized systems.
            </p>
            <p className=" mb-2">Docker Swarm, Docker Machine, Docker API.</p>
          </div>

          {/* Troubleshooting */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">16. Troubleshooting</h3>
            <p>
              Troubleshooting is an essential skill for maintaining healthy Docker environments. This section provides guidance on diagnosing and resolving common issues related to containers, images, networking, and performance.
            </p>
            <p className=" mb-2">
              Check logs with <code>docker logs &lt;container_id&gt;</code>,
              ensure ports are free.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">17. Best Practices</h3>
            <p>
              The final section summarizes best practices for working with Docker, including optimizing image size, securing containers, managing resources, and keeping your environment up to date. Following these practices ensures efficient, secure, and maintainable containerized applications.
            </p>
            <p className=" mb-2">
              Optimize images, secure containers, set resource limits.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
          <p className=" mb-4">
            This roadmap provides a structured path to mastering Docker.
            Practice with code examples and refer to{" "}
            <a
              href="https://docs.docker.com/get-started/"
              className="text-blue-600 hover:underline"
            >
              Docker&apos;s Documentation
            </a>{" "}
            and{" "}
            <a
              href="https://www.geeksforgeeks.org/blogs/docker-roadmap/"
              className="text-blue-600 hover:underline"
            >
              GeeksforGeeks
            </a>{" "}
            for further learning.
          </p>
        </section>
      </main>
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
  );
}
