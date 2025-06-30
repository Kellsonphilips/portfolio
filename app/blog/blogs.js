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

// Function to get blog posts based on language
export const getBlogPosts = (language = 'en') => {
  const blogPostsData = [
    {
      slug: "become-an-ict-specialist",
      titleKey: "blog.post.becomeIctSpecialist.title",
      excerptKey: "blog.post.becomeIctSpecialist.excerpt",
      date: "2024-12-20",
      readTime: "8 min read",
      categoryKey: "blog.category.ictSolutions",
      content: BecomeICTSpecialist,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "it-specialist-vs-it-engineer",
      titleKey: "blog.post.itSpecialistVsEngineer.title",
      excerptKey: "blog.post.itSpecialistVsEngineer.excerpt",
      date: "2024-12-19",
      readTime: "7 min read",
      categoryKey: "blog.category.ictSolutions",
      content: ITBlog,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "cloud-engineering-guide",
      titleKey: "blog.post.cloudEngineeringGuide.title",
      excerptKey: "blog.post.cloudEngineeringGuide.excerpt",
      date: "2024-12-18",
      readTime: "12 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: CloudEngineerBlog,
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "starting-cloud-engineer-career",
      titleKey: "blog.post.startingCloudEngineerCareer.title",
      excerptKey: "blog.post.startingCloudEngineerCareer.excerpt",
      date: "2024-12-17",
      readTime: "6 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: StartingCloudEngineerCareer,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "cloud-security-best-practice",
      titleKey: "blog.post.cloudSecurityBestPractice.title",
      excerptKey: "blog.post.cloudSecurityBestPractice.excerpt",
      date: "2024-12-16",
      readTime: "5 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: CloudSecurityBestPractices,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "serverless-architecture-explained",
      titleKey: "blog.post.serverlessArchitectureExplained.title",
      excerptKey: "blog.post.serverlessArchitectureExplained.excerpt",
      date: "2024-12-15",
      readTime: "4 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: ServerlessArchitectureBlog,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "guide-to-deploying-apps-on-aws",
      titleKey: "blog.post.guideToDeployingAppsOnAws.title",
      excerptKey: "blog.post.guideToDeployingAppsOnAws.excerpt",
      date: "2024-12-14",
      readTime: "9 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: AWSDeployBlog,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "getting-started-with-nextjs",
      titleKey: "blog.post.gettingStartedWithNextjs.title",
      excerptKey: "blog.post.gettingStartedWithNextjs.excerpt",
      date: "2024-03-15",
      readTime: "5 min read",
      categoryKey: "blog.category.webDevelopment",
      content: GettingStartedWithNext,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "data-analysis-best-practices",
      titleKey: "blog.post.dataAnalysisBestPractices.title",
      excerptKey: "blog.post.dataAnalysisBestPractices.excerpt",
      date: "2024-03-10",
      readTime: "8 min read",
      categoryKey: "blog.category.dataScience",
      content: DataAnalysisBestPractices,
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fit=crop&w=1200&q=80",
    },
    {
      slug: "a-deep-dive-into-machine-learning",
      titleKey: "blog.post.machineLearningDeepDive.title",
      excerptKey: "blog.post.machineLearningDeepDive.excerpt",
      date: "2025-03-21",
      readTime: "10 min read",
      categoryKey: "blog.category.artificialIntelligence",
      content: MachineLearningDeepDive,
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "understanding-cloud-computing",
      titleKey: "blog.post.understandingCloudComputing.title",
      excerptKey: "blog.post.understandingCloudComputing.excerpt",
      date: "2024-12-17",
      readTime: "7 min read",
      categoryKey: "blog.category.cloudTechnologies",
      content: CloudComputingBlog,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=500&fit=crop&q=80",
    },
    {
      slug: "data-analytics-career-complete-blog",
      titleKey: "blog.post.dataAnalyticsCareerCompleteBlog.title",
      excerptKey: "blog.post.dataAnalyticsCareerCompleteBlog.excerpt",
      date: "2024-12-13",
      readTime: "7 min read",
      categoryKey: "blog.category.dataScience",
      content: DataAnalyticsCareer,
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fit=crop&w=1200&q=80",
    },
  ];

  return blogPostsData;
};

// Legacy export for backward compatibility (English only)
export const blogPosts = getBlogPosts('en'); 