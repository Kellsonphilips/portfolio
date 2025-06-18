import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import GoogleTranslate from '@/components/GoogleTranslate';
import ToggleButtons from '@/components/ToggleButtons';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
  description: "ICT Solution Provider, Software Engineer & Data Analyst",
  keywords: "portfolio, web development, data analysis, ICT, Philip Orji, Next.js, React, Node.js, Python, Tailwind CSS",
  openGraph: {
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & Data Analyst",
    images: ["/Images/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Kelechukwu Orji - IT Support | Web Dev | Data Analyst",
    description: "ICT Solution Provider, Software Engineer & Data Analyst",
    images: ["/Images/profile.jpg"],
  },
  icons: {
    icon: "/Images/profile.jpg",
  },
};

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
          <LanguageProvider>
            <GoogleTranslate />
            <div className="min-h-screen bg-background-light dark:bg-background-dark">
              <Navbar />
              <main className="container mx-auto px-4 py-8">{children}</main>
              <Footer />
              <ToggleButtons />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
