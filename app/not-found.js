export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Page Not Found</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Home</a>
    </div>
  );
} 