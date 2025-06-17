import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import GoogleTranslate from '@/components/GoogleTranslate';
import ToggleButtons from '@/components/ToggleButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Philip Kelechukwu Orji - Portfolio',
  description: 'ICT Solution Provider, Software Engineer & Data Analyst',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <GoogleTranslate />
            <div className="min-h-screen bg-background-light dark:bg-background-dark">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
              <ToggleButtons />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
