import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen px-4 md:px-12 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
