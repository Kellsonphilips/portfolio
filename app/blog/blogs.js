// Dynamic imports for blog content to reduce bundle size
const CloudComputingBlog = () => import("./blogs/understanding-cloud-computing").then(mod => mod.default);
const GettingStartedWithNext = () => import("./blogs/nextjs-getting-started").then(mod => mod.default);
const DataAnalysisBestPractices = () => import("./blogs/data-analysis-best-practices").then(mod => mod.default);
const MachineLearningDeepDive = () => import("./blogs/machine-learning-deep-dive").then(mod => mod.default);
const BecomeICTSpecialist = () => import("./blogs/become-an-ict-specialist").then(mod => mod.default);
const ITBlog = () => import("./blogs/it-specialist-vs-it-engineer").then(mod => mod.default);
const CloudEngineerBlog = () => import("./blogs/cloud-engineering-guide").then(mod => mod.default);
const StartingCloudEngineerCareer = () => import("./blogs/starting-cloud-engineer-career").then(mod => mod.default);
const CloudSecurityBestPractices = () => import("./blogs/cloud-security-best-practice").then(mod => mod.default);
const ServerlessArchitectureBlog = () => import("./blogs/serverless-architecture-explained").then(mod => mod.default);
const AWSDeployBlog = () => import("./blogs/guide-to-deploying-apps-on-aws").then(mod => mod.default);
const DataAnalyticsCareer = () =>
  import("./blogs/data-analytics-career-complete-blog").then(
    (mod) => mod.default
  );
const CICDRoadmapBlog = () => import("./blogs/CI-CD-roadmap-learning-with-ease").then(mod => mod.default);
const DockerRoadmapBlog = () => import("./blogs/learm-docker-comprehensive-roadmap").then(mod => mod.default);
const KubernetesRoadmapBlog = () => import("./blogs/simplified-kubertes-learning-roadmap").then(mod => mod.default);
const CloudComputingLearningRoadmapBlog = () => import("./blogs/cloud-computing-learning-roadmap").then(mod => mod.default);
const LinuxAudioClippingFixBlog = () => import("./blogs/linux-audio-clipping-fix").then(mod => mod.default);

// English-only blog posts
export const getBlogPosts = () => {
  const blogPostsData = [
    {
      slug: "become-an-ict-specialist",
      title: "How to Become an ICT Solutions Specialist",
      excerpt: "Learn how to become an ICT Solutions Specialist and build a career in Information and Communication Technology with this comprehensive guide.",
      category: "ICT Solutions",
      date: "2024-10-20",
      readTime: "8 min read",
      content: BecomeICTSpecialist,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "it-specialist-vs-it-engineer",
      title: "What Does an IT Specialist Do? & Who is an IT Engineer?",
      excerpt: "Explore the differences between IT Specialists and IT Engineers, their roles, responsibilities, and career paths in the technology industry.",
      category: "ICT Solutions",
      date: "2024-12-19",
      readTime: "7 min read",
      content: ITBlog,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "cloud-engineering-guide",
      title: "What Does a Cloud Engineer Do & Who is a Cloud Engineer?",
      excerpt: "A comprehensive guide to cloud engineering, including roles, responsibilities, skills, and career opportunities in cloud computing.",
      category: "Cloud Technologies",
      date: "2024-12-18",
      readTime: "12 min read",
      content: CloudEngineerBlog,
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "starting-cloud-engineer-career",
      title: "Starting a Career as a Cloud Engineer: A Beginner-Friendly Guide",
      excerpt: "Begin your journey in cloud engineering with this beginner-friendly guide covering skills, certifications, and career paths.",
      category: "Cloud Technologies",
      date: "2024-12-17",
      readTime: "6 min read",
      content: StartingCloudEngineerCareer,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "cloud-security-best-practice",
      title: "Cloud Security Best Practices: Protecting Your Digital Assets",
      excerpt: "Essential cloud security practices and strategies to protect your applications and data in the cloud environment.",
      category: "Cloud Technologies",
      date: "2024-12-03",
      readTime: "5 min read",
      content: CloudSecurityBestPractices,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "serverless-architecture-explained",
      title: "Serverless Architecture Explained: Benefits and Use Cases",
      excerpt: "Understanding serverless architecture, its benefits, limitations, and real-world applications in modern software development.",
      category: "Cloud Technologies",
      date: "2024-12-15",
      readTime: "4 min read",
      content: ServerlessArchitectureBlog,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "guide-to-deploying-apps-on-aws",
      title: "Beginner's Guide to Deploying Applications on AWS",
      excerpt: "Step-by-step guide to deploying your first application on Amazon Web Services with best practices and tips.",
      category: "Cloud Technologies",
      date: "2024-12-14",
      readTime: "9 min read",
      content: AWSDeployBlog,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, including server-side rendering, static generation, and API routes.",
      category: "Web Development",
      date: "2024-03-15",
      readTime: "5 min read",
      content: GettingStartedWithNext,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "data-analysis-best-practices",
      title: "Data Analysis Best Practices",
      excerpt: "Essential tips and techniques for effective data analysis, from data cleaning to visualization and interpretation.",
      category: "Data Science",
      date: "2024-03-10",
      readTime: "8 min read",
      content: DataAnalysisBestPractices,
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fit=crop&w=1200&q=80",
    },
    {
      slug: "a-deep-dive-into-machine-learning",
      title: "A Deep Dive into Machine Learning",
      excerpt: "Understand the core concepts and applications of machine learning, from algorithms to real-world implementations.",
      category: "Artificial Intelligence",
      date: "2025-03-21",
      readTime: "10 min read",
      content: MachineLearningDeepDive,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "understanding-cloud-computing",
      title: "Understanding Cloud Computing",
      excerpt: "An introduction to the benefits and types of cloud services, including IaaS, PaaS, and SaaS models.",
      category: "Cloud Technologies",
      date: "2024-12-17",
      readTime: "7 min read",
      content: CloudComputingBlog,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "data-analytics-career-complete-blog",
      title: "Starting a Career in Data Analytics: A Complete Beginner's Guide",
      excerpt: "A practical roadmap for beginners to launch a successful career in data analytics, including essential skills, tools, and tips.",
      category: "Data Science",
      date: "2024-12-13",
      readTime: "7 min read",
      content: DataAnalyticsCareer,
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fit=crop&w=1200&q=80",
    },
    {
      slug: "ci-cd-roadmap-learning-with-ease",
      title: "Learn CI/CD the Easier Way: A Comprehensive Guide",
      excerpt: "Master Continuous Integration and Continuous Delivery/Deployment with a structured roadmap. This guide covers the essentials, best practices, and hands-on steps to become proficient in CI/CD.",
      category: "DevOps",
      date: "2025-05-21",
      readTime: "15 min read",
      content: CICDRoadmapBlog,
      image: "/CI-CD-roadmap.jpg",
    },
    {
      slug: "learn-docker-comprehensive-roadmap",
      title: "Learn Docker the Easier Way & the Only Way",
      excerpt: "A step-by-step roadmap to master Docker, from basics to advanced topics, with practical examples and visual aids.",
      category: "DevOps",
      date: "2025-07-15",
      readTime: "14 min read",
      content: DockerRoadmapBlog,
      image: "/learm-docker.jpg",
    },
    {
      slug: "simplified-kubernetes-learning-roadmap",
      title: "Learn Kubernetes the Easier Way & the Only Way",
      excerpt: "A comprehensive, structured roadmap to mastering Kubernetes, covering everything from prerequisites to advanced best practices.",
      category: "DevOps",
      date: "2025-07-14",
      readTime: "16 min read",
      content: KubernetesRoadmapBlog,
      image: "/learn-kubernetes.jpg",
    },
    {
      slug: "cloud-computing-learning-roadmap",
      title: "Comprehensive Analysis of the Cloud Computing Learning Roadmap",
      excerpt: "An in-depth, stage-by-stage analysis of how to learn cloud computing, including models, providers, and best practices for all levels.",
      category: "Cloud Technologies",
      date: "2025-07-13",
      readTime: "18 min read",
      content: CloudComputingLearningRoadmapBlog,
      image: "/cloud-computing-roadmap.jpg",
    },
    {
      slug: "fixing-audio-clipping-in-ubuntu",
      title: "Fixing Audio Clipping in Ubuntu (22.04 – 25.x & Beyond)",
      excerpt: "A stable, elegant, and permanent fix for crackling, distorted, or broken audio on Ubuntu virtual machines, especially on VMware. This solution restores clean sound on Ubuntu 22 through 25, and likely future versions as well.",
      category: "ICT Solutions",
      date: "2025-10-30",
      readTime: "6 min read",
      content: LinuxAudioClippingFixBlog,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=500&fit=crop&q=80",
    },
  ];

  return blogPostsData;
};

// Legacy export for backward compatibility
export const blogPosts = getBlogPosts(); 