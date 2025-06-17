"use client"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900/50 dark:bg-background text-center py-6 mt-10 border-t">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://x.com/JoinPhotonPhill"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/joinphotonphill/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/philip-kelechi-orji-a3579b128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Kellsonphilips"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="text-sm text-text-light dark:text-text-dark">Copywrite &copy; {year} MyPortfolio. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2 text-sm">
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
    </footer>
  );
} 