import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import ToggleButtons from '@/components/ToggleButtons';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
  description: "ICT Solution Provider, Software Engineer & a Data Analyst",
  keywords: "portfolio, web development, data analysis, ICT, Philip Orji, Next.js, React, Node.js, Python, Tailwind CSS, software engineer, IT support, cloud computing, data analytics, frontend, backend, full stack, developer, technology, consulting, digital solutions, UI/UX, SaaS, web apps, business intelligence, machine learning, personal website, resume, CV, projects, blog, skills, capabilities, contact, privacy, FAQ, Philip Kelechukwu Orji, Philip Orji, Kellsonphilips, joinphotonphill",
  author: "Philip Kelechukwu Orji",
  canonical: "https://philipkelechiorji.vercel.app/",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
  appleTouchIcon: "/Images/profile.jpg",
  msapplicationTileImage: "/Images/profile.jpg",
  msapplicationTileColor: "#DC8923",
  openGraph: {
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & a Data Analyst",
    url: "https://philipkelechiorji.vercel.app/",
    site_name: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "/Images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
    type: "website",
    locale: "en_GB",
    fbAppId: "1234567890" // Replace with actual Facebook App ID if available
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & a Data Analyst",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
  icons: {
    icon: "/Images/profile.jpg",
    shortcut: "/Images/profile.jpg",
    apple: "/Images/profile.jpg",
    other: [
      { rel: "apple-touch-icon", url: "/Images/profile.jpg" },
      { rel: "icon", url: "/Images/profile.jpg" }
    ]
  },
};

export function generateViewport() {
  return {
    themeColor: "#DC8923",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5"
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://philipkelechiorji.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://philipkelechiorji.vercel.app/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Understanding Cloud Computing",
                  item: "https://philipkelechiorji.vercel.app/blog/understanding-cloud-computing",
                },
              ],
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
            <ToggleButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
