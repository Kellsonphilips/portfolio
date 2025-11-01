'use client';

export default function StructuredData() {
  const siteUrl = 'https://philipkelechiorji.vercel.app';

  // Enhanced Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Philip Kelechukwu Orji",
    "alternateName": ["Philip Orji", "Kellsonphilips", "JoinPhotonPhill"],
    "jobTitle": [
      "ICT Solution Provider",
      "Software Engineer",
      "Project Manager",
      "Network Engineer",
      "Cloud Engineer",
      "Data Analyst"
    ],
    "url": siteUrl,
    "email": "contact@philipkelechiorji.vercel.app",
    "sameAs": [
      "https://github.com/Kellsonphilips",
      "https://twitter.com/JoinPhotonPhill",
      "https://linkedin.com/in/philip-orji",
      siteUrl
    ],
    "knowsAbout": [
      "Web Development",
      "ICT Solutions",
      "Network Engineering",
      "Network Security",
      "Cloud Computing",
      "Cloud Security",
      "Data Analytics",
      "Data Science",
      "Machine Learning",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "DevOps",
      "Full Stack Development",
      "Project Management",
      "Software Architecture",
      "System Administration"
    ],
    "description": "Philip Kelechukwu Orji is a highly skilled ICT Solution Provider, Software Engineer, and Project Manager specializing in web development, cloud computing, network engineering, and data analytics. Offering comprehensive technology solutions and expertise across multiple domains.",
    "image": `${siteUrl}/Images/profile/profilelogoNobg.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "International"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Professional Services",
      "url": siteUrl
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "ICT & Software Engineering"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Philip Kelechukwu Orji Portfolio",
    "alternateName": "Philip Orji Professional Services",
    "url": siteUrl,
    "logo": `${siteUrl}/Images/profile/profilelogoNobg.png`,
    "description": "Professional ICT solutions, software engineering, and project management services by Philip Kelechukwu Orji. Specializing in web development, cloud computing, network engineering, and data analytics.",
    "founder": {
      "@type": "Person",
      "name": "Philip Kelechukwu Orji"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Professional Services",
      "url": `${siteUrl}/contact`,
      "availableLanguage": ["English", "French", "Spanish", "German", "Chinese"]
    },
    "sameAs": [
      "https://twitter.com/JoinPhotonPhill",
      "https://github.com/Kellsonphilips",
      "https://linkedin.com/in/philip-orji"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "International"
    }
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Philip Kelechukwu Orji Professional Services",
    "url": siteUrl,
    "description": "Comprehensive ICT solutions, software engineering, cloud computing, network engineering, and project management services. Specialized expertise in web development, DevOps, data analytics, and cloud infrastructure.",
    "provider": {
      "@type": "Person",
      "name": "Philip Kelechukwu Orji",
      "url": siteUrl
    },
    "serviceType": [
      "Web Development",
      "Software Engineering",
      "Cloud Computing Services",
      "Cloud Migration",
      "Network Engineering",
      "Network Security",
      "ICT Solutions",
      "DevOps Consulting",
      "Data Analytics",
      "Project Management",
      "Technical Consulting",
      "Full Stack Development",
      "System Architecture",
      "Cloud Infrastructure"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 0,
        "longitude": 0
      },
      "geoRadius": {
        "@type": "Distance",
        "name": "Worldwide"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Full-stack web development using modern technologies like React, Next.js, and Node.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Computing Services",
            "description": "Cloud infrastructure setup, migration, and management on AWS and other cloud platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Network Engineering",
            "description": "Network design, implementation, security, and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management",
            "description": "Agile project management and technical leadership for software projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Analytics",
            "description": "Data analysis, business intelligence, and data-driven insights"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
} 