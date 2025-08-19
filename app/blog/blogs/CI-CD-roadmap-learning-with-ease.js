// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function CICDGuide() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Learn CI/CD the Easier Way: A Comprehensive Guide</title>
        <meta
          name="description"
          content="Master Continuous Integration and Continuous Delivery/Deployment with a structured roadmap, practical steps, examples, and resources."
        />
      </Head>
      {/* Header */}
      <header className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold">
            Learn CI/CD the Easier Way: A Comprehensive Guide
          </h1>
          <p className="mt-2 text-lg">
            Master Continuous Integration and Continuous Delivery/Deployment
            with a Structured Roadmap
          </p>
          <p className="text-lg mb-6">
            By Philip Kelechukwu Orji
            <br />
            Tech Educator | Cloud Enthusiast | Data Enthusiast | Digital
            Projects Specialist
          </p>
          <p className="mt-1 text-sm">Published on July 16, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            As a software developer, mastering{" "}
            <strong>
              Continuous Integration and Continuous Delivery/Deployment (CI/CD)
            </strong>{" "}
            is essential in today’s fast-paced development environment. CI/CD
            practices enable frequent, reliable software releases by automating
            building, testing, and deployment processes. This guide provides a
            detailed roadmap to learn CI/CD in an easier, structured way,
            ensuring you can meet industry expectations and enhance your
            development workflow. Whether you’re a beginner or looking to refine
            your skills, this roadmap will guide you through practical steps to
            become proficient in CI/CD.
          </p>
        </section>

        {/* Understanding CI/CD */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Understanding CI/CD: The Basics
          </h2>
          <p className="mb-4">
            CI/CD stands for Continuous Integration and Continuous
            Delivery/Continuous Deployment, a set of practices that streamline
            software development. <strong>Continuous Integration (CI)</strong>{" "}
            involves frequently integrating code changes into a shared
            repository, automatically building and testing them to detect issues
            early. <strong>Continuous Delivery (CD)</strong> ensures code is
            always in a deployable state, while{" "}
            <strong>Continuous Deployment</strong> automatically deploys changes
            to production if tests pass.
          </p>
          <p className="mb-4">
            Think of CI/CD as a conveyor belt in a factory. CI is the quality
            control station where each part is inspected before moving forward,
            and CD is the packaging and shipping department, ensuring the
            product is ready for customers. The benefits include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Faster Time-to-Market:</strong> Automating repetitive
              tasks speeds up releases.
            </li>
            <li>
              <strong>Improved Code Quality:</strong> Automated tests catch bugs
              early.
            </li>
            <li>
              <strong>Reduced Errors:</strong> Automation minimizes human
              mistakes.
            </li>
            <li>
              <strong>Better Collaboration:</strong> Teams work seamlessly with
              shared pipelines.
            </li>
          </ul>
          <div className="my-6">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="CI/CD Pipeline Visualization"
              width={1350}
              height={450}
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2">
              A visual representation of a CI/CD pipeline (Source: Unsplash,
              copyright-free)
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            The Roadmap: Stages and Detailed Explanations
          </h2>
          <p className="mb-4">
            To learn CI/CD effectively, follow this structured roadmap, divided
            into five stages. Each stage builds on the previous, combining
            theory and hands-on practice to make learning engaging and
            practical.
          </p>

          {/* Stage 1: Understand CI/CD Concepts */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Stage 1: Understand CI/CD Concepts
            </h3>
            <p className="mb-4">
              Start by grasping the fundamentals. CI/CD evolved from traditional
              development models like waterfall, where releases were slow and
              error-prone, to modern practices enabling multiple daily
              deployments, as seen in companies like Netflix and Etsy.
            </p>
            <p className="mb-4">
              <strong>Continuous Integration (CI):</strong> Developers
              frequently merge code changes into a shared repository, triggering
              automated builds and tests. It’s like a chef tasting a dish during
              cooking to ensure it’s perfect before serving.
            </p>
            <p className="mb-4">
              <strong>Continuous Delivery (CD):</strong> Ensures every change
              passing tests is ready for deployment, like having a meal prepped
              and ready to serve at any time.
            </p>
            <p className="mb-4">
              <strong>Continuous Deployment:</strong> Automatically pushes
              passing changes to production, like a restaurant serving dishes as
              soon as they’re ready, common in high-velocity environments.
            </p>
            <p className="mb-4">
              Why learn CI/CD? Companies like Etsy deploy thousands of times
              daily using CI/CD, reducing downtime and improving user
              experience. It speeds up development, enhances code quality, and
              fosters collaboration by catching issues early.
            </p>
            <p className="mb-4">
              For a visual aid, check out this{" "}
              <Link
                href="https://creately.com/diagram/example/c5JMedWsSpq/cicd-pipeline-example"
                className="text-blue-600 underline"
              >
                CI/CD pipeline example on Creately
              </Link>
              , which illustrates the flow from coding to deployment.
            </p>
          </div>

          {/* Stage 2: Set Up Version Control */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Stage 2: Set Up Version Control
            </h3>
            <p className="mb-4">
              Version control is the backbone of CI/CD, providing a single
              source of truth for your code. Imagine writing a novel with
              multiple authors—without a system to track changes, chaos ensues.
              Git, a free and open-source version control system, solves this by
              enabling collaboration and tracking code history.
            </p>
            <p className="mb-4">
              <strong>Getting Started with Git:</strong> Follow these steps to
              set up Git and a repository:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                <strong>Install Git:</strong> Download and install Git for your
                system (Windows, macOS, or Linux).
              </li>
              <li>
                <strong>Create a Repository:</strong> Initialize a new Git
                repository.
              </li>
              <li>
                <strong>Add Files:</strong> Stage files for tracking.
              </li>
              <li>
                <strong>Commit Changes:</strong> Save changes with descriptive
                messages.
              </li>
              <li>
                <strong>Push to Remote:</strong> Connect to a remote platform
                like GitHub and push your changes.
              </li>
            </ol>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`# Initialize a new Git repository
git init

# Stage files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin <repository_url>

# Push changes
git push -u origin main`}
              </code>
            </pre>
            <p className="mt-4">
              Learn branching strategies like GitFlow or trunk-based development
              to manage code changes effectively. For more, visit the{" "}
              <Link
                href="https://git-scm.com/doc"
                className="text-blue-600 underline"
              >
                official Git documentation
              </Link>
              .
            </p>
            <div className="my-6">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Version Control Workflow"
                width={1350}
                height={450}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                Git workflow visualization (Source: Unsplash, copyright-free)
              </p>
            </div>
          </div>

          {/* Stage 3: Learn to Write Tests */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Stage 3: Learn to Write Tests
            </h3>
            <p className="mb-4">
              Automated testing is the heart of CI/CD, ensuring code
              reliability. Think of tests as quality checks in a car factory,
              verifying each part before assembly. Tests catch bugs early,
              saving time and effort.
            </p>
            <p className="mb-4">
              <strong>Types of Tests:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Unit Tests:</strong> Test individual functions, like
                checking a light bulb before installation.
              </li>
              <li>
                <strong>Integration Tests:</strong> Verify components work
                together, like ensuring the engine and transmission sync.
              </li>
              <li>
                <strong>End-to-End Tests:</strong> Simulate user interactions,
                like test-driving a car to confirm it works as a whole.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Writing Tests:</strong> Here’s a simple unit test using
              Python and pytest.
            </p>
            <p className="mb-2">Install pytest:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`pip install pytest`}</code>
            </pre>
            <p className="mb-2">Create a function and test:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`# math_utils.py
def add(a, b):
    return a + b

# test_math_utils.py
def test_add():
    assert add(2, 3) == 5`}
              </code>
            </pre>
            <p className="mb-2">Run the test:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`pytest`}</code>
            </pre>
            <p className="mt-4">
              Frameworks like pytest (Python), JUnit (Java), or Mocha
              (JavaScript) simplify testing. See the{" "}
              <Link
                href="https://docs.pytest.org/en/stable/"
                className="text-blue-600 underline"
              >
                Pytest Documentation
              </Link>{" "}
              for more.
            </p>
          </div>

          {/* Stage 4: Set Up a CI/CD Pipeline */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Stage 4: Set Up a CI/CD Pipeline
            </h3>
            <p className="mb-4">
              Now, automate your workflow with a CI/CD pipeline. Tools like
              Jenkins, GitLab CI/CD, GitHub Actions, and CircleCI are popular,
              with GitHub Actions being beginner-friendly due to its integration
              with GitHub.
            </p>
            <p className="mb-4">
              <strong>Creating a Pipeline:</strong> Here’s a GitHub Actions
              pipeline that runs on every push to the main branch:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>
                Create a <code>.github/workflows/ci.yml</code> file in your
                repository.
              </li>
              <li>Define the workflow to build and test your code.</li>
            </ol>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>
                {`name: CI

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install pytest

      - name: Test with pytest
        run: |
          pytest`}
              </code>
            </pre>
            <p className="mt-4">
              This pipeline checks out code, sets up Python, installs
              dependencies, and runs tests. For more, see the{" "}
              <Link
                href="https://docs.github.com/en/actions"
                className="text-blue-600 underline"
              >
                GitHub Actions Documentation
              </Link>
              .
            </p>
            <div className="my-6">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="CI/CD Workflow Example"
                width={1350}
                height={450}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                Example of a CI/CD workflow in action (Source: Unsplash,
                copyright-free)
              </p>
            </div>
          </div>

          {/* Stage 5: Learn Deployment Strategies */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Stage 5: Learn Deployment Strategies
            </h3>
            <p className="mb-4">
              With your code tested and pipeline set up, it’s time to deploy to
              production. Deployment strategies ensure releases are safe and
              reliable, minimizing downtime and user impact.
            </p>
            <p className="mb-4">
              <strong>Deployment Strategies:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Blue-Green Deployment:</strong> Maintain two identical
                production environments (blue and green). Deploy the new version
                to the green environment, test it, then switch traffic from blue
                to green. It’s like switching lanes on a highway without
                stopping traffic, ensuring zero downtime.
              </li>
              <li>
                <strong>Canary Releases:</strong> Roll out the new version to a
                small subset of users first. Monitor for issues, and if all’s
                well, expand to all users. It’s like testing a new recipe on a
                few customers before serving the whole restaurant.
              </li>
              <li>
                <strong>Rolling Updates:</strong> Update application instances
                gradually, keeping the service available. Think of replacing
                seats in a theater during a show without interrupting the
                performance.
              </li>
            </ul>
            <p className="mb-4">
              For example, Kubernetes supports rolling updates to deploy new
              versions seamlessly. Companies like Amazon use canary releases to
              test changes with minimal risk, rolling back quickly if issues
              arise.
            </p>
            <p className="mb-4">
              <strong>Monitoring and Rollback:</strong> Post-deployment, monitor
              your application using tools like Prometheus or Grafana to track
              performance and detect issues. Always have a rollback plan, like
              keeping a spare tire in your car, to revert to the previous
              version if needed.
            </p>
            <p className="mb-4">
              For a visual representation, see this{" "}
              <Link
                href="https://creately.com/diagram/example/c5JMedWsSpq/cicd-pipeline-example"
                className="text-blue-600 underline"
              >
                CI/CD pipeline example on Creately
              </Link>
              , which includes deployment stages.
            </p>
            <div className="my-6">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Deployment Strategy Visualization"
                width={1350}
                height={450}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                Deployment process visualization (Source: Unsplash,
                copyright-free)
              </p>
            </div>
          </div>
        </section>

        {/* Tools and Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Tools and Resources</h2>
          <p className="mb-4">
            The industry relies on tools like Jenkins, GitLab CI/CD, GitHub
            Actions, and CircleCI for CI/CD pipelines. GitHub Actions is
            particularly beginner-friendly due to its seamless integration with
            GitHub repositories. For hands-on practice, try setting up a
            pipeline for a small project, like a personal blog, to identify
            patterns and build confidence.
          </p>
          <p className="mb-4">
            For structured learning, consider these resources:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <Link
                href="https://www.udemy.com/course/ci-cd-devops/"
                className="text-blue-600 underline"
              >
                Udemy’s DevOps and CI/CD for Beginners
              </Link>
              : Offers hands-on projects for practical learning.
            </li>
            <li>
              <Link
                href="https://www.simplilearn.com/free-ci-cd-online-training-course-skillup"
                className="text-blue-600 underline"
              >
                Simplilearn’s Free CI/CD Certification
              </Link>
              : Provides expert guidance and certification.
            </li>
            <li>
              <Link
                href="https://www.gitlab.com/blog/2022/04/13/how-to-learn-ci-cd-fast/"
                className="text-blue-600 underline"
              >
                GitLab’s Blog
              </Link>
              : Tips for learning CI/CD quickly.
            </li>
            <li>
              <Link
                href="https://codefresh.io/learn/ci-cd/"
                className="text-blue-600 underline"
              >
                CodeFresh’s CI/CD Guide
              </Link>
              : Detailed explanations of tools and strategies.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
          <p className="mb-4">
            Mastering CI/CD doesn’t have to be daunting. By following this
            roadmap—understanding concepts, setting up version control, writing
            tests, configuring pipelines, and learning deployment
            strategies—you’ll gain the skills to build efficient, reliable
            software delivery pipelines. These practices align with industry
            standards, as seen in companies like Netflix and Amazon, and will
            make you a valuable asset in any development team.
          </p>
          <p className="mb-4">
            Start small with tools like Git and GitHub Actions, practice with
            real projects, and leverage resources like Udemy and Simplilearn to
            deepen your knowledge. The key is hands-on experience, so dive in,
            experiment, and watch your CI/CD skills grow. Happy coding!
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
