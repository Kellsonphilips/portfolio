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

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
  description: "ICT Solution Provider, Software Engineer & Project Manager",
  keywords: "portfolio, web development, ICT, Philip Orji, Next.js, React, Node.js, Python, Tailwind CSS, software engineer, IT support, cloud computing, project management, frontend, backend, full stack, developer, technology, consulting, digital solutions, UI/UX, SaaS, web apps, business intelligence, personal website, resume, CV, projects, blog, skills, capabilities, contact, privacy, FAQ, Philip Kelechukwu Orji, Philip Orji, Kellsonphilips, joinphotonphill",
  authors: [{ name: "Philip Kelechukwu Orji" }],
  creator: "Philip Kelechukwu Orji",
  canonical: "https://philipkelechiorji.vercel.app/",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
      { rel: "icon", url: "/Images/profile/profilelogoNobg.png" }
    ]
  },
  openGraph: {
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "ICT Solution Provider, Software Engineer & Project Manager",
    url: "https://philipkelechiorji.vercel.app/",
    siteName: "Philip Kelechukwu Orji Portfolio",
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@JoinPhotonPhill",
    creator: "@JoinPhotonPhill",
    title: "Philip Kelechukwu Orji - ICT Solution Provider | Software Engineer | Project Manager",
    description: "ICT Solution Provider, Software Engineer & Project Manager",
    images: [
      {
        url: "/Images/profile.jpg",
        alt: "Philip Kelechukwu Orji Profile Picture"
      }
    ],
  },
  metadataBase: new URL('https://philipkelechiorji.vercel.app/'),
  // For JSON-LD structured data, use a client component or next/script if needed
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
    <html lang={/* locale || */ 'en'} suppressHydrationWarning>
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
              <main id="main-content" className="container mx-auto px-4 py-8">{children}</main>
              <footer>
                <Footer />
              </footer>
              <ToggleButtons />
            </div>
          </ThemeProvider>
        </LanguageProvider>
        <ScrollToTop />
        <StructuredData />
      </body>
      {/* Google Analytics placeholder */}
      {/* 
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      </script>
      */}
    </html>
  );
}
