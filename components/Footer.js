"use client"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className="text-sm">&copy; {year} MyPortfolio. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
    </footer>
  );
} 