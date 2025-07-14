'use client';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Philip Kelechukwu Orji",
    "jobTitle": "ICT Solution Provider, Software Engineer & Data Analyst",
    "url": "https://philipkelechiorji.vercel.app",
    "sameAs": [
      "https://github.com/Kellsonphilips",
      "https://twitter.com/JoinPhotonPhill",
      "https://linkedin.com/in/philip-orji"
    ],
    "knowsAbout": [
      "Web Development",
      "ICT Solutions", 
      "Data Analytics",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Cloud Computing"
    ],
    "description": "ICT Solution Provider, Software Engineer & Data Analyst specializing in web development, ICT solutions, and data analytics.",
    "image": "https://philipkelechiorji.vercel.app/Images/profile.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 