import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import ToggleButtons from '@/components/ToggleButtons';
import { LanguageProvider } from '@/components/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import StructuredData from '@/components/StructuredData';
import HreflangTags from '@/components/HreflangTags';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    template: "%s | Philip Kelechukwu Orji Portfolio",
  },
  description: "Professional ICT Solution Provider, Software Engineer, and Project Manager specializing in web development, cloud computing, network engineering, and data analytics. Expert in React, Next.js, Node.js, AWS, Docker, Kubernetes, and DevOps.",
  keywords: [
    "Philip Kelechukwu Orji",
    "Philip Orji",
    "ICT Solution Provider",
    "Software Engineer",
    "Project Manager",
    "Network Engineer",
    "Cloud Engineer",
    "web development",
    "cloud computing",
    "AWS",
    "Docker",
    "Kubernetes",
    "DevOps",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "network security",
    "cloud migration",
    "data analytics",
    "machine learning",
    "full stack developer",
    "backend developer",
    "frontend developer",
    "DevOps engineer",
    "IT consultant",
    "software development",
    "ICT solutions",
    "network engineering",
    "system administration",
    "cloud infrastructure",
    "CI/CD",
    "microservices",
    "portfolio",
    "professional services",
    "freelance developer",
    "Kellsonphilips",
    "JoinPhotonPhill",
    "technology blog",
  ],
  authors: [{ name: "Philip Kelechukwu Orji", url: "https://philipkelechiorji.vercel.app" }],
  creator: "Philip Kelechukwu Orji",
  publisher: "Philip Kelechukwu Orji Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Philip Kelechukwu Orji Portfolio",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: "/Images/profile/profilelogoNobg.png",
    shortcut: "/Images/profile/profilelogoNobg.png",
    apple: "/Images/profile/profilelogoNobg.png",
    other: [
      { rel: "apple-touch-icon", url: "/Images/profile/profilelogoNobg.png" },
      { rel: "icon", url: "/Images/profile/profilelogoNobg.png" },
    ],
  },
  openGraph: {
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "Professional ICT Solution Provider, Software Engineer, and Project Manager specializing in web development, cloud computing, network engineering, and data analytics. Expert in React, Next.js, AWS, Docker, and Kubernetes.",
    url: "https://philipkelechiorji.vercel.app/",
    siteName: "Philip Kelechukwu Orji Portfolio",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        width: 1200,
        height: 1200,
        alt: "Philip Kelechukwu Orji - ICT Solution Provider, Software Engineer & Project Manager",
      },
    ],
    type: "website",
    locale: "en_GB",
    localeAlternate: ["fr_FR", "es_ES", "de_DE", "zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "Professional ICT Solution Provider, Software Engineer, and Project Manager. Expert in web development, cloud computing, network engineering, and data analytics.",
    images: [
      {
        url: "https://philipkelechiorji.vercel.app/Images/profile/profilelogoNobg.png",
        alt: "Philip Kelechukwu Orji - ICT Solution Provider, Software Engineer & Project Manager",
      },
    ],
  },
  metadataBase: new URL("https://philipkelechiorji.vercel.app/"),
  verification: {
    google: "verify-google",
    yandex: "verify-yandex",
    yahoo: "verify-yahoo",
  },
};

export function generateViewport() {
  return {
    themeColor: "#DC8923",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5"
  };
}

export default function RootLayout({ children /*, locale = 'en' */ }) {
  // In the future, pass locale as a prop or from context/provider for i18n
  return (
    <html lang={/* locale || */ "en"} suppressHydrationWarning>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-white dark:bg-background text-primary font-bold px-4 py-2 rounded shadow transition-all duration-200"
        >
          Skip to main content
        </a>
        <HreflangTags />
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-background-light dark:bg-background-dark">
              <nav>
                <Navbar />
              </nav>
              <main id="main-content" className="container mx-auto px-4 py-8">
                {children}
              </main>
              <footer>
                <Footer />
              </footer>
              <ToggleButtons />
            </div>
          </ThemeProvider>
        </LanguageProvider>

        <ScrollToTop />
        <StructuredData />

        {/* Google Analytics */}
        <Script
          async src="https://www.googletagmanager.com/gtag/js?id=G-RM39P6B0G9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RM39P6B0G9');
        `}
        </Script>
      </body>
    </html>
  );
}
